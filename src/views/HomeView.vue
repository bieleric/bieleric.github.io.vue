<script setup>
  import ProjectLink from "@/components/ProjectLink.vue"
  import ScrollProgressBar from "@/components/ScrollProgressBar.vue"
  import { useNavigationStore } from "@/stores/navigationStore";
  import { ref } from "vue";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faLinkedin, faSquareGithub, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

  const navigationStore = useNavigationStore();

  const page1 = ref(null);
  const page2 = ref(null);
  const page3 = ref(null);
  const page4 = ref(null);

  const isElementInViewport = () => {
    const pages = [page1, page2, page3, page4];

    pages.forEach(page => {
      if(page.value) {
        let rect = page.value.getBoundingClientRect();

        if(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || el.clientHeight) && rect.right <= (window.innerWidth || el.clientWidth)) {
          navigationStore.setCurrentPage(page.value.id)
        }
      }
    });
  }
</script>

<template>
  <main class="text-slate-200" :onscroll="isElementInViewport">
    <ScrollProgressBar />
    <div id="1" ref="page1" class="section h-dvh flex justify-center items-center">
      <object class="w-full" data="/hero-animation.svg"></object>
    </div>

    <div id="2" ref="page2" class="section h-dvh flex flex-col justify-center items-center">
      <p class="md:w-1/2 w-3/4 text-3xl mb-4">Welcome to my corner of the web!</p>
      <p class="md:w-1/2 w-3/4 font-thin text-xl">I'm Eric, an enthusiastic computer scientist based in Germany. With a passion for Web Development, Self-Sovereign Identity and Web3-Technologies, I strive to create cool and interesting projects to make people's live easier. Through this platform, I aim to showcase my journey and projects. I'm excited to share my story and collaborate on exciting opportunities.</p>
      <div class="flex justify-evenly md:w-1/2 w-3/4 font-thin mt-8 text-3xl">
        <a href="https://linkedin.com/in/eric-biele-ba9163185" target="_blank"><FontAwesomeIcon :icon="faLinkedin" /></a>
        <a href="https://github.com/bieleric" target="_blank"><FontAwesomeIcon :icon="faSquareGithub" /></a>
        <a href="#"><FontAwesomeIcon :icon="faSquareYoutube" /></a>
      </div>
    </div>

    <div id="3" ref="page3" class="section h-dvh flex flex-col justify-center items-center">
      <div class="text-3xl mb-8">
        Projects
      </div>
      <div class="w-10/12 md:w-3/4 xl:w-1/2 grid md:grid-cols-3 grid-cols-2 gap-4">
        <ProjectLink :projectName="$t('projects.idenlight.title')" :shortDescription="$t('projects.idenlight.shortDescription')" :linkName="$t('projects.idenlight.linkName')" :image="$t('projects.idenlight.image')" />
        <ProjectLink :projectName="$t('projects.webxplorer.title')" :shortDescription="$t('projects.webxplorer.shortDescription')" :linkName="$t('projects.webxplorer.linkName')" :image="$t('projects.webxplorer.image')" />
        <ProjectLink :projectName="$t('projects.bib-desk.title')" :shortDescription="$t('projects.bib-desk.shortDescription')" :linkName="$t('projects.bib-desk.linkName')" :image="$t('projects.bib-desk.image')" />
      </div>
    </div>
  </main>
</template>

<style>
  main {
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
  }
  .section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
</style>
