<script setup>
    import BaseLayout from "@/layouts/BaseLayout.vue";
    import PageLayout from "@/layouts/PageLayout.vue";
</script>

<template>
    <BaseLayout>
        <PageLayout class="w-3/4 mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center">
            <div class="col-span-5 mb-10 md:mb-0">
                <img class="w-7/12 mx-auto animate__animated animate__fadeInDown" :src="'/' + $t('projects.bib-desk.image')" />
                <p class="mt-6 text-xl animate__animated animate__fadeInLeft">{{ $t('projects.bib-desk.shortDescription') }}</p>
            </div>
            <div class="col-span-7">
                <img class="w-10/12 mx-auto animate__animated animate__fadeIn" src="/iMac_BibDesk.png" />
            </div>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Description</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">Bib-Desk is an application for managing library data. This includes the management of data on books, their loans and the master data of borrowers. The data records can be customised using classic CRUD operations.</p>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Technical Details</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">The application was developed as a desktop application based on the requirements. Electron was used as a wrapper for a Vue application. The data is stored in a relational database. </p>
        </PageLayout>
    </BaseLayout>
</template>