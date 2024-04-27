<script setup>
    import { useNavigationStore } from '@/stores/navigationStore';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faHouse, faUser, faDiagramProject, faStar } from '@fortawesome/free-solid-svg-icons';

    const navigationStore = useNavigationStore();
</script>

<template>
    <div class="progress-container text-slate-900">
        <div :class="{ 'progress-item': true, 'active': navigationStore.getCurrentPage == 1 }">
            <FontAwesomeIcon :icon="faHouse" />
        </div>
        <div :class="{ 'progress-item': true, 'active': navigationStore.getCurrentPage == 2 }">
            <FontAwesomeIcon :icon="faUser" />
        </div>
        <div :class="{ 'progress-item': true, 'active': navigationStore.getCurrentPage == 3 }">
            <FontAwesomeIcon :icon="faDiagramProject" />
        </div>
        <div :class="{ 'progress-item': true, 'active': navigationStore.getCurrentPage == 4 }">
            <FontAwesomeIcon :icon="faStar" />
        </div>
    </div>
</template>

<style scoped>
.progress-container {
    background-color: rgba(85,176,169, 0.5);
    border-radius: 0.5rem;
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 50px;
    padding: 0.5rem;
}

.progress-item {
    background-color: rgba(137, 200, 195, 0.3);
    border-radius: 0.5rem;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.active {
    background-color: rgba(137, 200, 195, 0.7);
    width: 39px;
    height: 39px;
}

@media (max-width: 767px) {
  .progress-container {
    top: auto;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    width: 200px;
    height: 50px;
  }
}
</style>