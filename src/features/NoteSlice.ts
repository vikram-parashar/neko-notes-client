import {createSlice} from '@reduxjs/toolkit'

export const AllNotebooksSlice = createSlice({
  name: 'All Notebooks',
  initialState: {
    loading: false,
    notebooks: [],
    error: null,
  },
  reducers: {
    ALL_NOTEBOOK_REQUEST: (state) => {
      state.loading = true
    },
    ALL_NOTEBOOK_SUCCESS: (state, action) => {
      state.loading = false
      state.notebooks = action.payload
    },
    ALL_NOTEBOOK_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    NEW_NOTEBOOK_REQUEST: (state) => {
      state.loading = true
    },
    NEW_NOTEBOOK_SUCCESS: (state, action) => {
      state.loading = false
      state.notebooks = [...state.notebooks, action.payload]
    },
    NEW_NOTEBOOK_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    REMOVE_NOTEBOOK_REQUEST: (state) => {
      state.loading = true
    },
    REMOVE_NOTEBOOK_SUCCESS: (state, action) => {
      state.loading = false
      state.notebooks = state.notebooks.filter( (notebook) => notebook._id !== action.payload,) },
    REMOVE_NOTEBOOK_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const CurrNotebookSlice = createSlice({
  name: 'Current Notebook',
  initialState: {
    loading: false,
    notebook: {
      ID: '',
      Title: '',
      Notes: [],
      Created: '',
      LastAccessed: '',
    },
    error: null,
  },
  reducers: {
    NOTEBOOK_REQUEST: (state) => {
      state.loading = true
    },
    NOTEBOOK_SUCCESS: (state, action) => {
      state.loading = false
      state.notebook = action.payload
    },
    NOTEBOOK_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    NEW_NOTE_REQUEST: (state) => {
      state.loading = true
    },
    NEW_NOTE_SUCCESS: (state, action) => {
      state.loading = false
      state.notebook.Notes = [...state.notebook.Notes, action.payload]
    },
    NEW_NOTE_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    REMOVE_NOTE_REQUEST: (state) => {
      state.loading = true
    },
    REMOVE_NOTE_SUCCESS: (state, action) => {
      state.loading = false
      state.notebook.Notes = state.notebook.Notes.filter((note) => note.ID !== action.payload)
    },
    REMOVE_NOTE_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
export const NotesSlice = createSlice({
  name: 'Current Notebook',
  initialState: {
    loading: false,
    notes: [],
    error: null,
  },
  reducers: {
    ALL_NOTES_REQUEST: (state) => {
      state.loading = true
    },
    ALL_NOTES_SUCCESS: (state, action) => {
      state.loading = false
      state.notes = action.payload
    },
    ALL_NOTES_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    NEW_NOTE_REQUEST: (state) => {
      state.loading = true
    },
    NEW_NOTE_SUCCESS: (state, action) => {
      state.loading = false
      state.notes = [...state.notes, action.payload]
    },
    NEW_NOTE_FAIL: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
