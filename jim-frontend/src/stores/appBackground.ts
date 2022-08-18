import { defineStore } from "pinia";

export const useAppBackgroundStore = defineStore({
  id: "appBackground",
  state: () => ({
    background: "linear-gradient(163.49deg, #35A8E1 -2.37%, #40D8AB 105.06%)",
  }),
  actions: {
    updateBackground(newBackground: string) {
      this.background = newBackground;
    },
  },
});
