import React from 'react';

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
