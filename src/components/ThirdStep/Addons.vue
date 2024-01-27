<template>
    <!-- Pick Add-ons -->
    <div class="container z-20">
        <h1 class="text-2xl text-marine-blue font-bold mb-2">Pick add-ons</h1>
        <p class="text-cool-gray">
            Add-ons help enhance your gaming experience.
        </p>

        <!-- Add ons container -->

        <div class="container mt-4">
            <!-- Add on -->
            <Input
                name="Online Service"
                amount="+$1/mo"
                cost="1"
                desc="Access to multiplayer games"
            />

            <!-- Add on -->
            <Input
                name="Larger Storage"
                amount="+$2/mo"
                cost="2"
                desc="Extra 1TB of cloud save"
            />

            <!-- Add on -->
            <Input
                name="Custom Profile"
                amount="+$2/mo"
                cost="2"
                desc="Custome theme on your profile"
            />
        </div>
    </div>
</template>

<script setup>
import Input from "./Input.vue";
import { addons } from "../../store/store";
</script>

<style lang="scss" scoped></style>
