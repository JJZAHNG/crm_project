import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  const [isRegister, setIsRegister] = useState(true);  // 默认显示注册表单

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container">
      <h1>怪.物 孵化器 创客空间</h1>
      {isRegister ? (
        <>
          <h2>注册｜ Register</h2>
          <Register />
          <p>已经有账户了？ <button onClick={toggleForm}>去登录</button></p>
        </>
      ) : (
        <>
          <h2>登录｜ Login</h2>
          <Login />
          <p>还没有账户？ <button onClick={toggleForm}>去注册</button></p>
        </>
      )}
    </div>
  );
}

export default App;
