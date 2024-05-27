import { createSlice, current } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'tasks',

  initialState: {
    value: []
  },




  reducers: {
    submitAdd: (state, action) => {
      state.value.push(action.payload)
      console.log(current(state))
    },
    submitEdit: (state, action) => {
      state.value.splice(action.payload.id, 1, action.payload.body)
      console.log(current(state));
    },
    markAsDone: (state, action) => {
      state.value[action.payload.id].done = action.payload.done
      console.log(current(state));
    },
    deleteTodo: (state, action) => {
      state.value.splice(action.payload.id, 1)
      console.log(current(state));

    },


  }
})

// Action creators are generated for each case reducer function
export const { submitAdd, submitEdit, markAsDone, deleteTodo } = todoSlice.actions

export default todoSlice.reducer