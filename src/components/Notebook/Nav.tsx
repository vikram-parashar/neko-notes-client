import { ModeToggle } from '@/components/mode-toggle'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

export const Nav = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <div className="flex justify-between py-3 px-5 mb-5">
      <div className="flex items-center">
        <Link to="/">
          <Button variant="ghost" size="icon" className="mr-3">
            <DoubleArrowLeftIcon />
          </Button>
        </Link>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Notebook {id}
        </h3>
      </div>
      <div className="flex">
        <Button variant="secondary" className="mr-5">
          Share
        </Button>
        <ModeToggle />
      </div>
    </div>
  )
}
