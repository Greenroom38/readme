import React, { useState } from 'react'

function UserForm({ onAddUser }) {
 
 const [name, setName] = useState('')
 const [age, setAge] =useState('');
 const [city, setCity] =useState('');
 

const handleSubmit = e => {
    e.preventDefault(); //Prevent page reload on form

    if (!name || !age || !city)  {
        alert('Please fill all fields')
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        age: parseInt(age),
        city,
    }
onAddUser(neewUser); //pass on new user
//reset fields after submission
setName('');
setAge('');
setCity('');

}

    return (
    <form
        onSubmit={handleSubmit}
        className='bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mb-6'
    >
      <h2>Add a New User</h2>
        <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 mb-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400' />


<input type="Number"
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='w-full p-2 mb-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400' />

<input type="text"
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='w-full p-2 mb-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400' />

<button 
    type='Submit'
    className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-semibold'
>
        Add User


</button>

    </form>
  )
}

export default UserForm
