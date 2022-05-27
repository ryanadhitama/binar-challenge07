import apiConfig from "../config/api.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncData = createAsyncThunk(
  "apiStore/getAsyncData",
  async () => {
    const listCars = await fetch(apiConfig.URL);
    const listCarsJson = await listCars.json();

    return listCarsJson;
  }
);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const apiStore = createSlice({
  name: "apiStore",
  initialState: {
    cars: [],
    filteredCars: []
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncData.fulfilled, (state, action) => {
      let results = [...action.payload];
      let cars = [];
      for (let i = 0; i < results.length; i++) {
        let item = results[i];
        const isPositive = getRandomInt(0, 1) === 1;
        const timeAt = new Date();
        const mutator = getRandomInt(1000000, 100000000);
        let availableAt = new Date(
          timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
        ).toISOString();

        item.image = item.image.replaceAll(
          "./",
          apiConfig.IMAGE_BASE_URL + "/"
        );
        item.withDriver = Math.round(Math.random() * 1) === 1;
        item.available = availableAt;
        cars.push(item);
      }
      state.cars = cars;
    });
  },
});

export default apiStore.reducer;
