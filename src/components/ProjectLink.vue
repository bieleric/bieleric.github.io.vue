<script setup>
    defineProps({
        projectName: String,
        shortDescription: String,
        linkName: String,
        image: String
    })
</script>

<template>
    <RouterLink :to="'/projects/' + linkName">
        <div class="project-square relative aspect-square w-full flex justify-center items-center bg-zinc-800 rounded-md p-4 cursor-pointer">
            <img :src="'/' + image" />
            <div class="overlay">{{ projectName }}</div>
        </div>
    </RouterLink>
</template>

<style scoped>
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

.project-square:hover .overlay {
  opacity: 1;
}

</style>