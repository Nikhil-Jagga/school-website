import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history:
    "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students for over three decades.",
  vision:
    "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
  mission:
    "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
  PrincipalMessage:
    "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future",
  facilities: [
    { title: "State-of-the-art science and computer labs" },
    { title: "Library with a vast collection of books and digital resources" },
    { title: "Spacious and well-equipped classrooms" },
    {
      title:
        "Sports facilities including a playground, gymnasium, and swimming pool",
    },
  ],
};

export const aboutSlice = createSlice({
  name: "about",
  initialState: initialState,
  reducers: {},
});

// export const {} = aboutSlice.actions
export default aboutSlice.reducer;
