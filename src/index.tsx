import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals'
import theme from './theme'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
          <ReactQueryDevtools />
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)

reportWebVitals()
