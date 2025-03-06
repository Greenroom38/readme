import React from 'react'
import LoginButton from './Components/LoginButton.jsx/LoginButton'
import UserForm from './Components/UserForm.jsx/UserForm'
import UserList from './Components/UserList.jsx/UserList'

function App() {
  return (
    <div className='max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen'>
     <h1 className='text-3xl font-bold text-center mb-4'>DASHBOARD</h1> 
<LoginButton/>
<UserForm/>
<UserList/>



    </div>
  )
}

export default App

