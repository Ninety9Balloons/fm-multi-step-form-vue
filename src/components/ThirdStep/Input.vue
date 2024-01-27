<template>
    <div
        class="flex items-center justify-between mb-4 py-3 px-4 rounded-lg border-2 border-light-gray"
    >
        <input
            :id="props.name"
            type="checkbox"
            :value="props.name"
            :data-amount="props.amount"
            :data-cost="props.cost"
            name="add-ons"
            class="w-5 h-5 mr-2 text-blue-600 bg-gray-100 border-light-gray rounded"
            @click="(event) => addToAddons(event)"
            :checked="checkedStatus"
            @change="clAddons"
        />
        <div class="container flex justify-between items-center">
            <label
                :for="props.name"
                class="ms-2 text-gray-900 dark:text-gray-300"
                ><h2 class="text-md font-bold text-marine-blue">
                    {{ props.name }}
                </h2>
                <p class="text-xs">{{ props.desc }}</p></label
            >
            <p class="text-xs text-purplish-blue font-bold">
                {{ props.amount }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { addons } from "../../store/store";

const props = defineProps(["name", "cost", "amount", "desc"]);

// Adds an addons to the addons store
const addToAddons = (event) => {
    if (event.target.checked === true) {
        addons.value = [
            ...addons.value,
            {
                name: event.target.value,
                cost: event.target.getAttribute("data-cost"),
                amount: event.target.getAttribute("data-amount"),
                checked: true,
            },
        ];
    }

    // If an addon is checked and then unchecked, removes that specific addon from the store
    if (event.target.checked === false) {
        const filteredAddons = addons.value.filter(
            (a) => a.name !== event.target.value
        );
        addons.value = filteredAddons;
    }
};

// If an addon is checked, the page changes, then the page goes back, it keeps an addons in the store checked
let checkedStatus = false;

const checkedStatusFunc = () => {
    for (var i = 0; i < addons.value.length; i++) {
        if (addons.value[i]?.name === props.name) {
            checkedStatus = true;
        }
    }
};

checkedStatusFunc();
</script>
