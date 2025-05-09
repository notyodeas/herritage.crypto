import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Leivates from './components/Leivates';
const notorutes = createBrowserRouter([
  {
    path: '', element: <Leivates /> 
  }
])
function App() {
  return <RouterProvider router={notorutes}/>;
}

export default App;
