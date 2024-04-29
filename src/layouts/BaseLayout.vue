<template>
    <main class="text-slate-200 bg-zinc-900">
        <slot></slot>
    </main>
</template>

<style scoped>
    main {
        scroll-snap-type: y mandatory;
        height: 100dvh;
        overflow-y: scroll;
    }
</style>