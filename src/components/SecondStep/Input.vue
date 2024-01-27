<template>
    <input
        type="radio"
        :id="props.value"
        name="plans"
        :class="`appearance-none peer/${props.value}`"
        :value="props.value"
        v-model="plan.plan"
        @click="
            (plan.plan = $event.target.value),
                (plan.planCost = props.cost),
                (plan.planNumber = props.number)
        "
    />
    <label
        :for="props.value"
        :class="`container flex border-2 border-light-gray rounded-lg p-3 mb-3 peer-checked/${props.value}:bg-alabaster peer-checked/${props.value}:border-purplish-blue`"
    >
        <img :src="getImageUrl()" :alt="`${props.value} image`" />
        <div class="container ml-4">
            <h2 class="font-bold text-marine-blue capitalize">
                {{ props.value }}
            </h2>
            <p class="text-cool-gray">{{ props.cost }}</p>
        </div>
    </label>
</template>

<script setup>
import { plan } from "../../store/store";

const props = defineProps(["value", "cost", "number"]);

function getImageUrl() {
    return new URL(
        `../../assets/images/icon-${props.value}.svg`,
        import.meta.url
    );
}
</script>

<style lang="scss" scoped></style>
