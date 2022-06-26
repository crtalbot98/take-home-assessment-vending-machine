import React from 'react'
import './styles/main.css';
import VendingMachine from './components/VendingMachine';

const App: React.FC = () => {

  return <div className='bg-sky-800 grid gap-y-96 p-4 justify-items-center h-screen'>
    <VendingMachine/>
  </div>
};

export default App;