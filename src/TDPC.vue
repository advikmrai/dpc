<script setup lang="ts">
import { ref } from 'vue';
import TFumenPlayer from './TFumenPlayer.vue';
import TFumenList from "./TFumenList.vue"
import PCF from "../src/PCF.vue"

const props = withDefaults(defineProps<{
  name: string,
  blurb?: string,
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean,
  scoring?: number[],
  scoring_details?: string,
}>(), { mirror: false });

const showModal = ref(false);
const showScoringDetails = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}

function toggleScoringDetails() {
  showScoringDetails.value = !showScoringDetails.value;
}
</script>

<template>
    <div @click="openModal" class="setup-preview">
        <h4>{{ name }}</h4>
        <TFumenPlayer :fumen="props.build_fumen" :height="7" :cell_size="18" :mirror="props.mirror" :hideControls="true" />
    </div>

    <div v-if="showModal" class="modal" @click.self="closeModal">
        <div class="modal-content"> 
            <span class="close" @click="closeModal">&times;</span>
            <div v-if="props.scoring" class="scoring-info-compact">
                <span>avg PC score: {{ props.scoring[0] }}</span> |
                <span>extra%: {{ props.scoring[1] }}%</span> |
                <span>PC Chance: {{ props.scoring[2] }}%</span>
            </div>
            <h2>{{ name }}</h2>
                        <p>{{ blurb }}</p>
            
                        <h3>SETUP</h3>
            <TFumenList
                :fumen="props.build_fumen"
                :height="7"
                :cell_size="18"
                :mirror="props.mirror"
            />

            <div v-if="props.scoring_details">
                            <div @click="toggleScoringDetails" class="toggle-details-button">
                                {{ showScoringDetails ? 'scoring details ▲' : 'scoring details ▼' }}
                            </div>
                            <div v-if="showScoringDetails" class="scoring-details-content">
                                <pre>{{ props.scoring_details }}</pre>
                            </div>
                        </div>
            
            <h3>SOLUTIONS</h3>
            <TFumenList :fumen="props.solutions_fumen" :height="6" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
            <PCF :initial_field_fumen="props.field_fumen" sequence="ITSZOLJ"/>
        </div>
    </div>
</template>

<style scoped>
.setup-preview {
    border: 1px solid #ddd; /* 1 */
    border-radius: 8px; /* 8 */
    padding: 9px; /* 10 */
    margin: 9px; /* 10 */
    cursor: pointer;
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
}

.setup-preview:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
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
    background-color: #fefefe;
    margin: 5% auto; /* smaller margin */
    padding: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    width: 90%;
    max-width: 975px; 
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.scoring-info-compact {
    font-size: 0.8em; 
    color: #666; 
    margin-top: 2px;
    margin-bottom: -30px;
    text-align: right; 
    padding-right: 30px; 
}

.scoring-info-compact span {
    margin-left: 10px; /* Space between items */
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
</style>
