import React from 'react';
import Navbar from './components/DashboardNavbar'
import UserNavbar from './components/NavBar/UserNavbar'
import Container from './components/container-Fluid/Container'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Navbar/> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <UserNavbar/>
            <Container/>
          </div>
          <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2020</span>
            </div>
          </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
