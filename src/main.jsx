import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient,  QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(


  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>

  </QueryClientProvider>

)
