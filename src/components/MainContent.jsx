import '../App.css'
import logoSVG from '../assets/react-logo-large.svg'

function MainContent() {
  return (
    <div className="reactFacts_main">
      <img src={logoSVG} aria-hidden="true" />
      <div className="reactFacts_main_content">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  )
}

export default MainContent