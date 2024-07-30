import { createSlice } from "@reduxjs/toolkit";

/*
Extracurricular Activities: "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"
Clubs and Societies: "Literary Society, Environmental Club, Astronomy Club, Coding Club"

*/
const initialState = {
  activities: [
    {
      name: "Music",
      description: "Vocal and instrumental classes, school choir",
    },
    { name: "Dance", description: "Classical and contemporary dance classes" },
    { name: "Dance", description: "Classical and contemporary dance classes" },
    { name: "Drama", description: "Annual school play, drama workshops" },
    {
      name: "Art",
      description: "Painting, sculpture, and digital art classes",
    },
    {
      name: "Sports",
      description: "Football, basketball, cricket, athletics, and more",
    },
    { name: "Robotics", description: "Building and programming robots" },
    {
      name: "Debate Club",
      description: "Intra and inter-school debate competitions",
    },
    {
      name: "Science Club",
      description: "Science fairs, experiments, and field trips",
    },
  ],
  achievements: [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition",
    "Debating Society - Runners-up in the National Schools Debate Championship",
    "Eco Warriors - Received Green School Award for environmental initiatives",
  ],
  studentCouncil: [
    { position: "President", name: "Amy Parker", grade: 12 },
    { position: "Vice President", name: "Rajiv Mehta", grade: 11 },
    { position: "Secretary", name: "Lisa Wong", grade: 10 },
    { position: "Treasurer", name: "Michael Chen", grade: 11 },
    { position: "Sports Captain", name: "David Okoye", grade: 12 },
  ],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    addAchievement: (state, action) => {
      state.achievements.push(action.payload);
    },
    updateCouncilMember: (state, action) => {
      const index = state.studentCouncil.findIndex(
        (member) => member.position === action.payload.position
      );
      if (index !== -1) {
        state.studentCouncil[index] = action.payload;
      }
    },
  },
});

export const { addAchievement, addActivity, updateCouncilMember } =
  studentSlice.actions;

export default studentSlice.reducer;
