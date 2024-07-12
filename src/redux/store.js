import { configureStore, createSlice } from '@reduxjs/toolkit';

const namesSlice = createSlice({
  name: 'names',
  initialState: {
    names: JSON.parse(localStorage.getItem('names')) || []
  },
  reducers: {
    addName: (state, action) => {
      state.names.push(action.payload);
      localStorage.setItem('names', JSON.stringify(state.names));
    }   
  }
});
export const { addName } = namesSlice.actions;

const store = configureStore({
  reducer: {
    names: namesSlice.reducer
  }
});

export default store;
