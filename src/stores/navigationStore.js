import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigationStore', {
    state: () => ({
        currentPage: 1
    }),
    getters: {
        getCurrentPage: (state) => state.currentPage
    },
    actions: {
        setCurrentPage(value) {
            this.currentPage = value
        },
        incrementCurrentPage() {
          this.currentPage++;
        },
        decrementCurrentPage() {
            this.currentPage--;
          }
    }
})