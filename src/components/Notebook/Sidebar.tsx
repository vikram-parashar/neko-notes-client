import { useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { DoubleArrowLeftIcon, FilePlusIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Sidebar = () => {
  const [selectedNotes, setSelectedNotes] = useState([])
  const [myNotes, setMyNotes] = useState([
    {
      name: 'note1',
      content:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    {
      name: 'note2',
      content:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    { name: 'note3', content: 'content3' },
  ])

  const handleFileChange = (event) => {
    setSelectedNotes(event.target.files)
    console.log(event.target.files)
  }

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('file', selectedFile)

      axios
        .post('http://localhost:3000/upload', formData)
        .then((response) => {
          console.log('File uploaded successfully', response.data)
        })
        .catch((error) => {
          console.error('Error uploading file', error)
        })
    }
  }

  return (
    <div className="ml-5 w-64 h-full">
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
        {selectedNotes.length > 0 && (
          <div className="py-5 flex flex-col items-center rounded-xl mt-3 px-5 bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col justify-center">
              {Array.from(selectedNotes).map((note) => (
                <div
                  key={note.name}
                  className="flex justify-between items-center"
                >
                  <h4 className="text-sm font-semibold">{note.name}</h4>
                  <div className="p-3 ml-3">
                    <DoubleArrowLeftIcon />
                  </div>
                </div>
              ))}
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
