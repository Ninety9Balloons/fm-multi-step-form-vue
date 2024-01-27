<template>
    <!-- Finishing Up -->
    <div class="container z-20">
        <h1 class="text-2xl text-marine-blue font-bold mb-2">Finishing up</h1>
        <p class="text-cool-gray">
            Double-check everything looks OK before confirming.
        </p>

        <!-- Results Container -->
        <div class="container bg-alabaster rounded-lg p-4 mt-3">
            <!-- Plan Result -->
            <div class="container flex items-center">
                <div class="container">
                    <!-- Plan -->
                    <h2 class="font-bold text-marine-blue text-sm capitalize">
                        {{ plan.plan }} ({{ plan.planLength }})
                    </h2>
                    <a href="#" class="text-cool-gray underline text-sm"
                        >Change</a
                    >
                </div>
                <p class="font-bold text-marine-blue text-sm">
                    {{ plan.planCost }}
                </p>
            </div>

            <hr class="mt-2 mb-3" />

            <!-- Add-ons Results -->
            <ul id="add-ons-result-list">
                <li v-for="item in addons" class="flex justify-between">
                    <p class="text-cool-gray text-sm">{{ item.name }}</p>
                    <p class="text-sm text-marine-blue">{{ item.amount }}</p>
                </li>
            </ul>
        </div>

        <!-- Total -->
        <div class="container flex justify-between mt-4 p-4">
            <p class="text-sm text-cool-gray">Total (per month)</p>
            <p class="font-bold text-marine-blue">${{ total }}/mo</p>
        </div>
    </div>
</template>

<script setup>
import { plan, addons } from "../../store/store";

let total = 0 + Number(plan.planNumber);

// Loop through any addons and add them together
const calcTotal = () => {
    for (var i = 0; i < addons.value.length; i++) {
        total += Number(addons.value[i].cost);
    }
};

calcTotal();
</script>

<style lang="scss" scoped></style>
