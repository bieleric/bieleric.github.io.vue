<script setup>
    import BaseLayout from "@/layouts/BaseLayout.vue";
    import PageLayout from "@/layouts/PageLayout.vue";
</script>

<template>
    <BaseLayout>
        <PageLayout class="w-3/4 mx-auto md:grid md:grid-cols-12 flex flex-col justify-center items-center">
            <div class="col-span-5 mb-10 md:mb-0">
                <img :src="'/' + $t('projects.idenlight.image')" />
                <p class="mt-6 text-xl">{{ $t('projects.idenlight.shortDescription') }}</p>
            </div>
            <div class="col-span-7">
                <img src="/MacBook_IDEnlight.png" />
            </div>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Description</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">IDEnlight is a web application for communicating the concept of Self-Sovereign Identity at user level. It was created as part of my master's thesis and is primarily intended for use at trade fairs. It is aimed at the general public, who can use the application to test the ruthless use of verifiable credentials in order to increase trust in decentralised identity systems. IDEnlight is used together with the Lissi wallet.</p>
        </PageLayout>
        <PageLayout class="flex flex-col justify-center items-center">
            <p class="md:w-1/2 w-3/4 text-3xl mb-4">Technical Details</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl">IDEnlight is the so-called controller for the Hyperledger Aries agent. The agent is operated as a cloud agent, which is why it is a multi-container application. The overall system consists of an Indy Tails server for revoking credentials, a webhook service for communication between the controller and agent, the controller itself and the agent. The BCovrin Test Ledger is used as the verifiable data registry.</p>
            <p class="md:w-1/2 w-3/4 font-thin text-xl mt-3">You can find more information at: <a href="https://github.com/bieleric/idenlight" target="_blank">https://github.com/bieleric/idenlight</a></p>
        </PageLayout>
    </BaseLayout>
</template>