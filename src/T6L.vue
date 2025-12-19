<script setup lang="ts">
import { ref } from 'vue';
import TFumenPlayer from './TFumenPlayer.vue';
import TFumenList from "./TFumenList.vue"
import PCF from "../src/PCF.vue"

interface SecondSetup {
    name: string,
    build_fumen?: string,
    field_fumen?: string,
    solutions_fumen: string,
}

const props = withDefaults(defineProps<{
  name: string,
  blurb?: string,
  build_fumen?: string,
  second_setups: SecondSetup[],
  mirror?: boolean,
}>(), { mirror: false });

const showModal = ref(false);
const secondSetupsVisibility = ref<Record<string, boolean>>({});

function toggleSecondSetup(name: string) {
    secondSetupsVisibility.value[name] = !secondSetupsVisibility.value[name];
}
</script>

<template>
    <div @click="showModal = true" class="setup-preview">
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
            
            <div class="second-setups-container">
                <div v-for="setup in props.second_setups" :key="setup.name" class="second-setup-item">
                <h5>{{ setup.name }}</h5>
                <div v-if="setup.scoring" class="scoring-info-compact">
                    <span>avg PC score: {{ setup.scoring[0] }}</span> |
                    <span>extra%: {{ setup.scoring[1] }}%</span> |
                    <span>PC Chance: {{ setup.scoring[2] }}%</span>
                </div>
                <div v-if="setup.scoring_details">
                    <div @click="toggleSecondSetup(setup.name + '-scoring')" class="toggle-details-button">
                        {{ secondSetupsVisibility[setup.name + '-scoring'] ? 'scoring details ▲' : 'scoring details ▼' }}
                    </div>
                    <div v-if="secondSetupsVisibility[setup.name + '-scoring']" class="scoring-details-content">
                        <pre>{{ setup.scoring_details }}</pre>
                    </div>
                </div>
                
                <div @click="toggleSecondSetup(setup.name)" class="toggle-solutions-button">
                    {{ secondSetupsVisibility[setup.name] ? 'sols ▲' : 'sols ▼' }}
                </div>
                <div v-if="secondSetupsVisibility[setup.name]">
                    <TFumenList :fumen="setup.solutions_fumen" :height="6" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
                    <PCF :initial_field_fumen="setup.field_fumen" sequence="ITSZOLJ"/>
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
    margin-left: 0px; /* Space between items */
}

.toggle-details-button {
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
    font-weight: 500;
    color: var(--vp-c-brand); /* Assuming VitePress brand color */
}

.toggle-details-button:hover {
    text-decoration: underline;
}

.scoring-details-content {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid var(--vp-c-border); /* Assuming VitePress border color */
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft); /* Assuming VitePress soft background color */
    font-size: 0.9em;
    white-space: pre-wrap; /* Preserve whitespace and wrap text */
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
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

.second-setups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
}

.second-setup-item {
    border: 0px solid var(--vp-c-border);
    border-radius: 8px;
    padding: 0px;
    flex-basis: calc(50% - 8px);
}
</style>
