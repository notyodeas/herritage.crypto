import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, HashRouter, Routes, Route } from 'react-router-dom';
import Leivates from './components/Leivates';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
const getLibary = (provider) => {
  return new Web3Provider(provider);
}
const notorutes = createBrowserRouter([
  {
    path: '', element: <Leivates /> 
  }
])
function App() {
  return (<HashRouter><Routes>
    <Route path='' element={<Leivates />} />
    </Routes></HashRouter>);
}

export default App;
