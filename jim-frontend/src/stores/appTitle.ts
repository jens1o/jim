import { defineStore } from "pinia";

export const DEFAULT_APP_TITLE = '<No title set>';

export const useAppTitleStore = defineStore({
  id: "appTitle",
  state: () => ({
    title: DEFAULT_APP_TITLE,
  }),
  actions: {
    updateTitle(newTitle: string) {
      this.title = newTitle;
    },
  },
});
