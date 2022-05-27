import { configureStore } from "@reduxjs/toolkit";
import uiStore from "@reducers/ui-store";
import apiStore from "@reducers/api-store";
import authStore from "@reducers/auth-store";

const store = configureStore({
  reducer: {
    ui: uiStore,
    api: apiStore,
    auth: authStore,
  },
});

export default store;
