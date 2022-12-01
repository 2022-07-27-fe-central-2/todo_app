import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewTodo, deleteTodo, getAllTodos, updateTodo } from "../utils/fetch_api_funcs";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', getAllTodos)
export const addTodo = createAsyncThunk('todos/add', createNewTodo)
export const editTodo = createAsyncThunk('todos/edit', updateTodo)
export const removeTodo = createAsyncThunk('todos/delete', deleteTodo)

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload
    })
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = action.payload
    })
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.todos = action.payload
    })
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.todos = action.payload
    })
  }
})

export default todosSlice.reducer