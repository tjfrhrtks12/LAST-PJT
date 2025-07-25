import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }
    setError('');
    
    // 실제 로그인 로직 대신, onLogin 함수를 호출하여 상태를 변경합니다.
    onLogin();
  };

  return (
    <div className="login-split-container">
      <div className="login-left-section"></div>
      <div className="login-right-section">
        <form className="login-form-full" onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login; 