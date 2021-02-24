import React, { lazy, Suspense } from 'react';

const Dashboard = lazy (()=> import ("./pages/dashboard"))
const Login = lazy(() => import("./pages/login"))
const SignUP = lazy(() => import("./pages/signup"))
const Profile = lazy(() => import("./pages/profile"))
const NotFound = lazy(() => import("./pages/not-found"))

import './App.css';


function App() {
  return (
    <div className="App">
      <p className='text-red-500'>hello world</p>
    </div>
  );
}

export default App;
