<script setup lang="ts">
import { ref } from 'vue';
import TFumenPlayer from './TFumenPlayer.vue';
import TFumenList from "./TFumenList.vue"
import PCF from "../src/PCF.vue"

const props = withDefaults(defineProps<{
  name: string,
  blurb: string,
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean,
}>(), { mirror: false });

const showModal = ref(false);
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
            <h3>Setup</h3>
            <TFumenList
                :fumen="props.build_fumen"
                :height="7"
                :cell_size="18"
                :mirror="props.mirror"
            />
            <PCF :initial_field_fumen="props.field_fumen" sequence="ITSZOLJ"/>
            <h3>Solutions</h3>
            <TFumenList :fumen="props.solutions_fumen" :height="6" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
        </div>
    </div>
</template>

<style scoped>
.setup-preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    display: inline-block;
}

.modal {
    display: block;
    position: fixed;
    z-index: 1001; /* High z-index to be on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto; /* Smaller margin */
    padding: 20px;
    border: 1px solid #888;
    width: 90%;
    max-width: 800px; /* Larger max-width for content */
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
</style>
