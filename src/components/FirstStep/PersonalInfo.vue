<template>
    <div class="container h-full z-20">
        <h1 class="text-2xl text-marine-blue font-bold mb-2">Personal info</h1>
        <p class="text-cool-gray">
            Please provide your name, email address, and phone number.
        </p>
        <!-- Form Container -->
        <div class="flex flex-col">
            <Input value="name" type="text" placeholder="e.g. Stephen King">{{
                errors.name ? errors.name : "Name"
            }}</Input>

            <Input
                value="email"
                type="email"
                placeholder="stephenking@lorem.com"
                >{{ errors.email ? errors.email : "Email" }}</Input
            >

            <Input value="phone" type="tel" placeholder="+1 234 567 890">{{
                errors.phone ? errors.phone : "Phone Number"
            }}</Input>
        </div>
    </div>
</template>

<script setup>
import { errors } from "../../store/store";
import Input from "./Input.vue";
</script>
