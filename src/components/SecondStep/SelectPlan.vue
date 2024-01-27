<template>
    <!-- Select Your Plan -->
    <div class="container h-full z-20">
        <h1 class="text-2xl text-marine-blue font-bold mb-2">
            Select Your Plan
        </h1>
        <p class="text-cool-gray">
            You have the option of monthly or yearly billing.
        </p>
        <!-- Plans Container -->
        <div class="container flex flex-col my-4">
            <!-- Plan -->
            <Input value="arcade" cost="$9/mo" number="9" />

            <!-- Plan -->
            <Input value="advanced" cost="$12/mo" number="12" />

            <!-- Plan -->
            <Input value="pro" cost="$15/mo" number="15" />
        </div>

        <!-- Plan Length -->
        <div class="container bg-alabaster p-3 rounded-lg flex justify-center">
            <span
                class="mr-3 text-sm font-bold text-cool-gray"
                :class="
                    plan.planLength === 'Monthly'
                        ? 'font-bold text-black'
                        : 'font-normal'
                "
                >Monthly</span
            >
            <label class="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    class="sr-only peer"
                    id="plan-length-checkbox"
                    :value="plan.planLength"
                    v-model="plan.planLength"
                    true-value="Yearly"
                    false-value="Monthly"
                    @change="(e) => onChange(e)"
                />
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
                <span
                    class="ml-3 text-sm font-bold text-cool-gray"
                    :class="
                        plan.planLength === 'Yearly'
                            ? 'font-bold text-black'
                            : 'font-normal'
                    "
                    >Yearly</span
                >
            </label>
        </div>
    </div>
</template>

<script setup>
import Input from "./Input.vue";
import { plan } from "../../store/store";

const onChange = (e) => {
    if (e.target.checked) {
        plan.planLength = "Yearly";
    } else {
        plan.planLength = "Monthly";
    }
};
</script>

<style lang="scss" scoped></style>
