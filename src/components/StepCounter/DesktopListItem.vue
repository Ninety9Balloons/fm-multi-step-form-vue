<template>
    <li class="my-3">
        <div class="flex items-center">
            <p
                class="border-solid border-2 border-white p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2 cursor-pointer"
                :class="
                    store.step == step
                        ? 'bg-light-blue text-marine-blue font-bold'
                        : 'text-white'
                "
            >
                <slot name="number"></slot>
            </p>
            <div>
                <p class="text-xs text-gray-300 uppercase">
                    <slot name="step"></slot>
                </p>
                <p class="uppercase text-white text-xs font-bold">
                    <slot name="text"></slot>
                </p>
            </div>
        </div>
    </li>
</template>

<script setup>
import { store } from "../../store/store";

const props = defineProps(["step"]);
</script>
