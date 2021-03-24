import './Header.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled(Link)`
  margin: 1vh;
  color: white;
  text-decoration: none;
  &:hover{
    border-bottom: 1px solid white; 
  }
`;

function Header() {
  return (
      <header className="App-header">
      <div className="logo-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="name-wrapper">
        <h1>Pockemons Universe</h1>
      </div>
      <div className="navbar-wrapper">
        <nav className="App-nav">
          <NavLink to="/cards">Pockemons</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/info">Info</NavLink>
        </nav>
      </div>
      </header>
  )
}

export default Header
