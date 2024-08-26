import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
