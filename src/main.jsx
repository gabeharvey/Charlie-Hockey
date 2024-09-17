import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "transparent",
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme} >
      <RouterProvider router={router}/>
    </ChakraProvider>
);
