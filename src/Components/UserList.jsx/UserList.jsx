import React from 'react'

function UserList({ users }) {
 
 
 
 
    return (
    <div className='bg-white p-4 rounded-lg shadow-md max-w-md mx-auto'>
      <h2 className='text-xl font-semibold mb-4 text-center '>User List</h2>
      {users.lenth === 0 ? (
        <p className='text-grey-600 text-center '>NO USERS</p>
      ) : (
     <ul className='space-y-4'>
        {users.map((user) => (
            <li key={user.id} className='border p-3 rounded hover:bg-gray-100'>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>City:</strong> {user.city}</p>
            </li>
        ))}
     </ul>
      )}
    </div>
  )
}

export default UserList
