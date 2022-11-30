import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createNewTodo, deleteTodo, getAllTodos, updateTodo } from '../utils/fetch_api_funcs'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', getAllTodos)
export const addTodo = createAsyncThunk('todos/addTodo', createNewTodo)
export const editTodo = createAsyncThunk('todos/editTodo', updateTodo)
export const removeTodo = createAsyncThunk('todos/removeTodo', deleteTodo)

export const todoSlice = createSlice({
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

export default todoSlice.reducer
