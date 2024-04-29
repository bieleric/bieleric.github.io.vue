<script setup>
    import BaseLayout from "@/layouts/BaseLayout.vue";
    import PageLayout from "@/layouts/PageLayout.vue";
</script>

<template>
    <BaseLayout>
        <PageLayout class="w-3/4 mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center">
            <div class="col-span-4 mb-10 md:mb-0">
                <img :src="'/' + $t('projects.webxplorer.image')" />
                <p class="mt-6 text-xl">{{ $t('projects.webxplorer.shortDescription') }}</p>
            </div>
            <div class="col-span-8">
                <img src="/YouTube_WebXplorerEDU.png" />
            </div>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Description</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">WebXplorerEDU is designed to teach the concepts of different web technologies. The videos are based on a didactic concept and focus on the technologies of tomorrow. These include decentralised applications and digital identities.</p>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Technical Details</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">The videos on the WebXplorerEDU channel are created with FinalCutPro and Motion. The graphics contained therein, on the other hand, are mainly illustrated with Affinity Designer 2.</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl mt-3">Go to my YouTube channel: <a href="#" target="_blank">empty</a></p>
        </PageLayout>
    </BaseLayout>
</template>