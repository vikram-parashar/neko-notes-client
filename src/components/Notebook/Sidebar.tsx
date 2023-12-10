import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { DoubleArrowLeftIcon, FilePlusIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Loading } from '../Loading'
import { useSelector, useDispatch } from 'react-redux'
import { getAllNotes } from '../../actions/notebookActions'

export const Sidebar = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)
  const [myNotes, setMyNotes] = useState([])

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        setSelectedNote({ name: file.name, content: content })
      }

      reader.readAsText(file)
    }
  }
  const handleUpload = async () => {
    setLoading(true)
    const res = await axios.post(
      'https://neko-notesbackendstorage.onrender.com/notebook/6575ecdd591cfaabf1140967/notes',
      {
        Title: selectedNote.name,
        Text: selectedNote.content,
      },
    )
    setLoading(false)
  }

  useEffect(() => {
    dispatch(getAllNotes())
  }, [dispatch])

  return (
    <div className="ml-5 w-64 h-full">
      {loading && <Loading />}
      <div className="flex items-center justify-between w-full">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Notes
        </h4>
        <label
          className="border border-gray-200 dark:border-gray-800 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          htmlFor="file-upload"
        >
          <FilePlusIcon className="h-4 w-4" />
          <input
            id="file-upload"
            multiple={true}
            onChange={handleFileChange}
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div>
        {selectedNote && (
          <div className="py-5 flex flex-col items-center rounded-xl mt-3 px-5 bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">{selectedNote.name}</h4>
                <div className="p-3 ml-3">
                  <DoubleArrowLeftIcon />
                </div>
              </div>
            </div>
            <Button onClick={handleUpload} className="mt-5">
              Upload
            </Button>
          </div>
        )}
      </div>
      <div>
        {myNotes.length > 0 &&
          myNotes.map((note) => (
            <Card className="mt-3 pt-3 aspect-square">
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {note.content.substring(0, 150)}
                </p>
              </CardContent>
              <CardFooter>
                <small className="text-sm font-medium text-center leading-none">
                  {note.name}
                </small>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}
