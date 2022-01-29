import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
  return(
    <div>
      <input 
        name="username"
        placeholder="UserName"
        onChange={onChange}
        value={username}
      />
      <input 
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}

export default CreateUser;