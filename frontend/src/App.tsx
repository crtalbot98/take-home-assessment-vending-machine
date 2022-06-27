import React, { useState } from 'react'
import './styles/main.css';
import VendingMachine from './components/VendingMachine';
import { RoleContext, Roles } from './context';

const App: React.FC = () => {
  const [role, setRole] = useState(Roles.User);

  const handleRoleChange = () => {
    if(role === Roles.Admin) setRole(Roles.User);
    else setRole(Roles.Admin)
  }

  return <div className='bg-sky-800 grid gap-y-20 md:gap-y-80 md:p-4 justify-items-center min-h-screen'>
    <RoleContext.Provider value={{ role }}>
      <button 
        onClick={handleRoleChange}
        className='absolute bg-white p-2 left-0'
      >
        Change Role
      </button>
      <VendingMachine/>
    </RoleContext.Provider>
  </div>
};

export default App;