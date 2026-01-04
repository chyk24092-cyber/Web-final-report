import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "./index.css";  <-- この行を削除してください（または // でコメントアウト）

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)