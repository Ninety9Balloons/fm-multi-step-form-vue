<template>
    <div class="container w-full relative z-10 block sm:hidden">
        <img
            src="../../assets/images/bg-sidebar-mobile.svg"
            alt="sidebar image"
            class="absolute w-full z-10 max-h-[180px]"
        />
    </div>
    <!-- Step Number Container Mobile -->
    <div class="container z-20 my-8 sm:hidden">
        <ul class="flex justify-center">
            <MobileListItem step="1"> 1 </MobileListItem>
            <MobileListItem step="2"> 2 </MobileListItem>
            <MobileListItem step="3"> 3 </MobileListItem>
            <MobileListItem step="4"> 4 </MobileListItem>
        </ul>
    </div>
</template>

<script setup>
import MobileListItem from "./MobileListItem.vue";
</script>

<style scoped></style>
