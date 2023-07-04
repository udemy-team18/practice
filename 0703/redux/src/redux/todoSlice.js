import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(newTodo);
      

        // payload: newTodo });
        // setInput("");
      }
      // const newTodo = action.payload;
      // state.todos = [...state, newTodo];
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
