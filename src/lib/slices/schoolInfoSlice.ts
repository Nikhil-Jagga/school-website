import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schoolInfo: {
    basicInfo: [
      {
        schoolName: "Springdale Public School",
        quote: "Where we nurture young minds for a brighter future",
      },
    ],
    latestNews: [
      {
        title: "Annual Sports Day",
        description: "Celebrating Excellence in Sports",
      },
      {
        title: "Science Exhibition",
        description: "Showcasing Student Innovations",
      },
      {
        title: "Cultural Fest",
        description: "Embracing Diversity and Creativity",
      },
    ],
  },
};

export const schoolInfoSlice = createSlice({
  name: "schoolInfo",
  initialState,
  reducers: {
    addBasinInfo: (state, action) => {
      state.schoolInfo.basicInfo.push(action.payload);
    },
    addLatestNews: (state, action) => {
      state.schoolInfo.latestNews.push(action.payload);
    },
  },
});

export const { addBasinInfo, addLatestNews } = schoolInfoSlice.actions;
export default schoolInfoSlice.reducer;
