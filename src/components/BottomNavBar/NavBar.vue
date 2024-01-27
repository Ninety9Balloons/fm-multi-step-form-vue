<template>
    <nav
        :class="store.step == 5 ? 'hidden' : 'block'"
        class="container w-full absolute sm:relative md:mt-10 bottom-0 right-0 bg-white p-4 flex justify-between flex-row-reverse"
    >
        <button
            class="bg-marine-blue text-white text-sm py-3 px-5 rounded-md"
            :class="btnValidation()"
            id="next-btn"
            type="button"
            @click="nextBtn"
        >
            {{ store.step !== 4 ? "Next Step" : "Submit" }}
        </button>
        <button
            class="none text-cool-gray"
            :class="store.step === 1 ? 'hidden' : 'block'"
            id="previous-btn"
            type="button"
            @click="store.step--"
        >
            Go Back
        </button>
    </nav>
</template>

<script setup>
import { store } from "../../store/store";
import {
    personalInfoValidation,
    selectPlanValidation,
} from "../../utils/validation";

const nextBtn = () => {
    if (store.step === 1 && personalInfoValidation()) {
        store.step++;
    } else if (store.step === 2 && selectPlanValidation()) {
        store.step++;
    } else if (store.step === 3) {
        store.step++;
    } else if (store.step === 4) {
        store.step++;
    }
};

const btnValidation = () => {
    if (store.step === 2 && !selectPlanValidation()) {
        return "bg-red-700";
    }
};
</script>
