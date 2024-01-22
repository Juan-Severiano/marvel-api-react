import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Nav = ({ textColor }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={textColor && { color: textColor }}>
      <div className="container align-items-center">
        <a className="navbar-brand text-reset w-25 font-default align-items-center d-flex" href="/">
          <img src="/marvel-logo.png" className='img-fluid marvel-logo' alt="" /> <span className="fs-1 ms-1">API EXPLORER</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item"><Link className="nav-link text-reset" to="/characters">Characters</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" to="/comics">Comics</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" to="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" to="/series">Series</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  textColor: PropTypes.string
}

export default Nav;
