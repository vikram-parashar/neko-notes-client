import axios from 'axios'
import { NotesSlice } from '../features/NoteSlice'

const {
  ALL_NOTE_REQUEST,
  ALL_NOTE_SUCCESS,
  ALL_NOTE_FAIL,
  NEW_NOTE_REQUEST,
  NEW_NOTE_SUCCESS,
  NEW_NOTE_FAIL,
} = NotesSlice.actions

export const getAllNotes = () => async (dispatch: any) => {
  try {
    dispatch({ type: ALL_NOTE_REQUEST })

    const { data } = await axios.get('/api/notes')

    dispatch({
      type: ALL_NOTE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_NOTE_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const newNote = (note: any) => async (dispatch: any) => {
  try {
    dispatch({ type: NEW_NOTE_REQUEST })

    const { data } = await axios.post('/api/notes', note)

    dispatch({
      type: NEW_NOTE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: NEW_NOTE_FAIL,
      payload: error.response.data.message,
    })
  }
}
