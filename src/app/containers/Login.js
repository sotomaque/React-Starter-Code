import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'USER_LOGGED_IN',
      payload: username,
    });
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Login;
