import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExpensesView from "../views/ExpensesView.vue";
import { DEFAULT_APP_TITLE, useAppTitleStore } from "@/stores/appTitle";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/expenses",
      name: "expenses",
      component: ExpensesView,
    },
  ],
});

// Reset title so it is immediately noticed if another view does not set the title
router.beforeEach(() => {
  const appTitle = useAppTitleStore();
  appTitle.updateTitle(DEFAULT_APP_TITLE);
})

export default router;
