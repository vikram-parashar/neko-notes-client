import { ModeToggle } from '@/components/mode-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const AllNotebook = () => {
  return (
    <>
      <div className="flex justify-between p-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          My Notebooks
        </h1>
        <ModeToggle />
      </div>
      <div className="grid gap-5 p-5 grid-cols-5">
        <NotebookCard />
        <NotebookCard />
        <NotebookCard />
        <NotebookCard />
        <NotebookCard />
        <NotebookCard />
        <NotebookCard />
      </div>
    </>
  )
}

const NotebookCard = () => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>Notebook Title</CardTitle>
        <CardDescription>Last Accessed: 01/01/2004</CardDescription>
      </CardHeader>
    </Card>
  )
}
