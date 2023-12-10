import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const ChatBox = () => {
  return (
    <div className="rounded-3xl h-full py-5 w-1/2 flex flex-col mr-3 border">
      <div className="h-full"></div>
      <div className="relative">
        <Textarea
          rows={1}
          className="w-[90%] min-h-16 resize-none rounded-full border mx-[5%]"
          placeholder="Type a query..."
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute rounded-full right-[6%] top-1/2 scale-90 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
