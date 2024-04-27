<script setup>
    defineProps({
        projectName: String,
        shortDescription: String,
        linkName: String,
        image: String
    })
</script>

<template>
    <div class="mx-auto sm:h-52 sm:flex border-2 rounded-md border-zinc-600 p-4 mb-4 text-lg">
        <div class="aspect-square h-full flex justify-center items-center bg-zinc-800 rounded-md p-4 sm:mr-3">
            <img :src="'/' + image" />
        </div>
        <div class="flex flex-col justify-between mt-4 sm:mt-0">
            <div>
                <p class="text-xl">{{ projectName }}</p>
                <p class="font-thin">{{ shortDescription }}</p>
            </div>
            <p class="text-right mt-3"><RouterLink :to="'/projects/' + linkName"><span>Read more</span></RouterLink></p>
        </div>
    </div>
</template>