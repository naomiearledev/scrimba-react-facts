import '../App.css'
import logo from '../assets/react-logo-small.png'

function Header() {
  return (
    <header className="reactFacts_header">
      <div className="reactFacts_header_logo">
        <img src={logo} alt="ReactJS logo" />
        <h2>ReactFacts</h2>
      </div>
      <div className="reactFacts_header_info">
        <p>React Course - Project 1</p>
      </div>
    </header>
  )
}

export default Header