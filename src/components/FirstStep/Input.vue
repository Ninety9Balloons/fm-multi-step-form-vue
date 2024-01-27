<template>
    <label
        :for="props.value"
        :class="
            errors[props.value]
                ? 'text-red-500 text-xs font-bold mt-3 md:mt-5'
                : 'text-marine-blue text-xs font-bold mt-3 md:mt-5'
        "
        id="name-label"
        ><slot></slot
    ></label>
    <input
        :type="props.type"
        :id="props.value"
        :class="
            errors[props.value]
                ? 'border-2 border-red-500 p-2 rounded-md mt-1'
                : 'border-2 p-2 bg-none rounded-md mt-1'
        "
        :placeholder="props.placeholder"
        @input="personalInfo[props.value] = $event.target.value"
        v-model="personalInfo[props.value]"
    />
</template>

<script setup>
import { personalInfo, errors } from "../../store/store";

const props = defineProps(["value", "placeholder", "type"]);
</script>
