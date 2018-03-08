import React from 'react';

const Register = () => {
  const handleSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">
        <input type="text" />
      </label>
      <label htmlFor="Address">
        <input type="text" />
      </label>
      <label htmlFor="Rating">
        <input type="number" />
      </label>
    </form>
  );
};

export default Register;
