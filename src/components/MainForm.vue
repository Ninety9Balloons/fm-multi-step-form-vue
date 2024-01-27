<template>
    <div
        class="container flex flex-col md:flex-row items-center relative h-screen sm:justify-center sm:items-center"
    >
        <MobileCounter />

        <div
            class="bg-white max-h-[600px] md:h-[600px] flex z-20 w-[90%] p-6 rounded-xl"
        >
            <DesktopCounter />
            <form
                class="flex sm:flex-col md:w-[70%] md:h-full pr-0 md:pr-14 md:pt-10 justify-center md:justify-between"
            >
                <PersonalInfo v-if="store.step === 1" />
                <SelectPlan v-if="store.step === 2" />
                <Addons v-if="store.step === 3" />
                <Summary v-if="store.step === 4" />
                <ThankYou v-if="store.step === 5" />

                <NavBar />
            </form>
        </div>
    </div>
</template>

<script setup>
import NavBar from "./BottomNavBar/NavBar.vue";
import PersonalInfo from "./FirstStep/PersonalInfo.vue";
import SelectPlan from "./SecondStep/SelectPlan.vue";
import Addons from "./ThirdStep/Addons.vue";
import Summary from "./FourthStep/Summary.vue";
import MobileCounter from "./StepCounter/MobileCounter.vue";
import DesktopCounter from "./StepCounter/DesktopCounter.vue";
import { store } from "../store/store";
import ThankYou from "./ThankYou.vue";
</script>
