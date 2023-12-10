import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AllNotebook } from './components/AllNotebook'
import { ViewNotebook } from './components/Notebook/Page'
import { ThemeProvider } from '@/components/theme-provider'

const router = createBrowserRouter([
  { path: '/', element: <AllNotebook /> },
  { path: '/notebook/:id', element: <ViewNotebook /> },
])

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
