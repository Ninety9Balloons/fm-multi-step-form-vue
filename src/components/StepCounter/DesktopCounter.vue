<template>
    <div class="relative hidden sm:block z-20 flex-1 max-h-full">
        <!-- Step Number Container Desktop -->

        <ul
            class="flex flex-col justify-start w-full h-full absolute z-20 px-3 py-6"
        >
            <DesktopListItem step="1"
                ><template #number> 1 </template>
                <template #step>Step 1</template>
                <template #text>Your info</template>
            </DesktopListItem>
            <DesktopListItem step="2">
                <template #number> 2 </template>
                <template #step>Step 2</template>
                <template #text>Select plan</template>
            </DesktopListItem>
            <DesktopListItem step="3">
                <template #number> 3 </template>
                <template #step>Step 3</template>
                <template #text>Add-ons</template>
            </DesktopListItem>
            <DesktopListItem step="4">
                <template #number> 4 </template>
                <template #step>Step 4</template>
                <template #text>Summary</template>
            </DesktopListItem>
        </ul>

        <div class="absolute z-10 h-full mr-8">
            <img
                src="../../assets/images/bg-sidebar-desktop.svg"
                alt="sidebar image"
                class="z-10 h-full object-cover rounded-xl"
            />
        </div>
    </div>
</template>

<script setup>
import DesktopListItem from "./DesktopListItem.vue";
import { store } from "../../store/store";
</script>

<style scoped></style>
