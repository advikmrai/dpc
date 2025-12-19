<script setup lang="ts">
import { ref } from 'vue';
import TFumenPlayer from './TFumenPlayer.vue';
import TFumenList from "./TFumenList.vue"
import PCF from "../src/PCF.vue"

interface FourthSetup {
    name: string,
    blurb?: string,
    build_fumen: string,
    field_fumen: string,
    solutions_fumen: string,
    scoring?: number[],
    scoring_details?: string,
}

interface ThirdSetup {
    name: string,
    blurb?: string,
    build_fumen: string,
    fourth_setups: FourthSetup[],
}

interface SecondSetup {
    name: string,
    blurb?: string,
    build_fumen: string,
    third_setups: ThirdSetup[],
}

const props = withDefaults(defineProps<{
  name: string,
  blurb?: string,
  build_fumen: string,
  second_setups: SecondSetup[],
  mirror?: boolean,
}>(), { mirror: false });

const showModal = ref(false);
const secondSetupsVisibility = ref<Record<string, boolean>>({});
const thirdSetupsVisibility = ref<Record<string, boolean>>({});
const fourthSetupsVisibility = ref<Record<string, boolean>>({});
const fifthSetupsVisibility = ref<Record<string, boolean>>({});

function toggleSecondSetup(name: string) {
    secondSetupsVisibility.value[name] = !secondSetupsVisibility.value[name];
}

function toggleThirdSetup(name: string) {
    thirdSetupsVisibility.value[name] = !thirdSetupsVisibility.value[name];
}

function toggleFourthSetup(name: string) {
    fourthSetupsVisibility.value[name] = !fourthSetupsVisibility.value[name];
}

function toggleFifthSetup(name: string) {
    fifthSetupsVisibility.value[name] = !fifthSetupsVisibility.value[name];
}

function openModalAndExpand() {
    for (const secondSetup of props.second_setups) {
        secondSetupsVisibility.value[secondSetup.name] = true;
        for (const thirdSetup of secondSetup.third_setups) {
            thirdSetupsVisibility.value[thirdSetup.name] = true;
            for (const fourthSetup of thirdSetup.fourth_setups) {
                fourthSetupsVisibility.value[fourthSetup.name] = true;
            }
        }
    }
    showModal.value = true;
}
</script>

<template>
    <div @click="openModalAndExpand" class="setup-preview">
        <h4>{{ name }}</h4>
        <TFumenPlayer :fumen="props.build_fumen" :height="7" :cell_size="18" :mirror="props.mirror" :hideControls="true" />
    </div>

    <div v-if="showModal" class="modal" @click.self="showModal = false">
        <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>
            <h2>{{ name }}</h2>
            <p>{{ blurb }}</p>
            <h3>FIRST BAG</h3>
            <TFumenList
                :fumen="props.build_fumen"
                :height="7"
                :cell_size="18"
                :mirror="props.mirror"
            />

            <h3>SECOND BAGS</h3>
            <div class="setups-container">
                <div v-for="setup in props.second_setups" :key="setup.name" class="setup-item">
                    <h5>{{ setup.name }}</h5>
                    <p v-if="setup.blurb">{{ setup.blurb }}</p>
                    <TFumenList
                        :fumen="setup.build_fumen"
                        :height="9"
                        :cell_size="18"
                        :mirror="props.mirror"
                    />
                    <h3 @click="toggleSecondSetup(setup.name)" class="toggle-solutions-button">
                        {{ secondSetupsVisibility[setup.name] ? 'BAG 3 ▲' : 'BAG 3 ▼' }}
                    </h3>
                    <div v-if="secondSetupsVisibility[setup.name]">
                        <div class="setups-container">
                            <div v-for="third_setup in setup.third_setups" :key="third_setup.name" class="setup-item">
                                <h5>{{ third_setup.name }}</h5>
                                <p v-if="third_setup.blurb">{{ third_setup.blurb }}</p>
                                <TFumenList :fumen="third_setup.build_fumen" :height="10" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
                                <h5 @click="toggleThirdSetup(third_setup.name)" class="toggle-solutions-button">
                                    {{ thirdSetupsVisibility[third_setup.name] ? 'BAG 4 ▲' : 'BAG 4 ▼' }}
                                </h5>
                                <div v-if="thirdSetupsVisibility[third_setup.name]">
                                    <div v-for="fourth_setup in third_setup.fourth_setups" :key="fourth_setup.name">
                                        <h5>{{ fourth_setup.name }}</h5>
                                        <p v-if="fourth_setup.blurb">{{ fourth_setup.blurb }}</p>
                                        <div v-if="fourth_setup.scoring" class="scoring-info-compact">
                                            <span>avg PC score: {{ fourth_setup.scoring[0] }}</span> |
                                            <span>extra%: {{ fourth_setup.scoring[1] }}%</span> |
                                            <span>PC Chance: {{ fourth_setup.scoring[2] }}%</span>
                                        </div>
                                        <div v-if="fourth_setup.scoring_details">
                                            <div @click="toggleFifthSetup(fourth_setup.name + '-scoring')" class="toggle-details-button">
                                                {{ fifthSetupsVisibility[fourth_setup.name + '-scoring'] ? 'scoring details ▲' : 'scoring details ▼' }}
                                            </div>
                                            <div v-if="fifthSetupsVisibility[fourth_setup.name + '-scoring']" class="scoring-details-content">
                                                <pre>{{ fourth_setup.scoring_details }}</pre>
                                            </div>
                                        </div>
                                        <TFumenList :fumen="fourth_setup.build_fumen" :height="10" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
                                        <h5 @click="toggleFourthSetup(fourth_setup.name)" class="toggle-solutions-button">
                                            {{ fourthSetupsVisibility[fourth_setup.name] ? 'BAG 5 ▲' : 'BAG 5 ▼' }}
                                        </h5>
                                        <div v-if="fourthSetupsVisibility[fourth_setup.name]">
                                            <TFumenList :fumen="fourth_setup.solutions_fumen" :height="10" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
                                            <PCF :initial_field_fumen="fourth_setup.field_fumen" sequence="ITSZOLJ"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scoring-info-compact {
    font-size: 0.8em; 
    color: #666; 
    margin-top: 2px;
    margin-bottom: -5px;
    text-align: left;
}

.scoring-info-compact span {
    margin-left: 0px; 
}

.toggle-details-button {
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
    font-weight: 500;
    color: var(--vp-c-brand); 
}

.toggle-details-button:hover {
    text-decoration: underline;
}

.scoring-details-content {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid var(--vp-c-border); 
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft); 
    font-size: 0.9em;
    white-space: pre-wrap; 
}
p {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    margin-top: -8px;
}

.toggle-solutions-button {
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
    font-weight: 500;
    color: var(--vp-c-brand);
}

.toggle-solutions-button:hover {
    text-decoration: underline;
}

.setup-preview {
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    padding: 9px;
    margin: 4px;
    cursor: pointer;
    display: inline-block;
    transition: all 0.2s ease-in-out;
}

.setup-preview:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand);
}

.modal {
    display: block;
    position: fixed;
    z-index: 1001; /* high to be on top */  
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: var(--vp-c-bg);
    margin: 5% auto; /* smaller margin */
    padding: 20px;
    border: none;
    border-radius: 8px;
    width: 90%;
    max-width: 880px; 
}

.close {
    color: var(--vp-c-text-2);
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: var(--vp-c-text-1);
    text-decoration: none;
    cursor: pointer;
}

.setups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
}

.setup-item {
    border: 0px solid var(--vp-c-border);
    border-radius: 8px;
    padding: 0px;
    flex-grow: 1;
    flex-basis: calc(50% - 8px);
}
</style>
