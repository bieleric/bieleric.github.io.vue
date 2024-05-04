<script setup>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

    defineProps({
        visible: Boolean
    })
</script>

<template>
    <span v-if="visible" class="text-xl scroll-hint animate__animated animate__bounce animate__infinite">
        <FontAwesomeIcon :icon="faChevronDown" />
    </span>
</template>

<style scoped>
    .scroll-hint {
        position: fixed;
        bottom: 30px;
        left: 50%;
        color: #fff;
        border-radius: 50%;
        z-index: 999;
        transform: translateX(-50%);
    }
</style>