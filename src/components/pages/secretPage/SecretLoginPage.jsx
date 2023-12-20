import React from 'react'

const SecretLoginPage = () => {
    const { password, handleLogin } = useAuth();

    return (
      <div>
        <h1>Welcome!</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin(password)}>Login</button>
      </div>
    );
}

export default SecretLoginPage