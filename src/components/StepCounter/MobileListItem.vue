<template>
    <li>
        <p
            class="border-solid border-2 border-white p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2 cursor-pointer"
            :class="
                store.step == step
                    ? 'bg-light-blue text-marine-blue font-bold'
                    : 'text-white'
            "
        >
            <slot></slot>
        </p>
    </li>
</template>

<script setup>
import { store } from "../../store/store";

const props = defineProps(["step"]);
</script>
