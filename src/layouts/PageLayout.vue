<template>
    <div class="section h-svh">
        <slot></slot>
    </div>
</template>

<style scoped>
    .section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }
</style>