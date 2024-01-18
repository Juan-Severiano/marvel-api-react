import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container p-2 d-flex align-items-center" >
          <div className="d-none d-md-block font-config">
            <i className="bi bi-envelope-fill me-2"></i>
            juansev.dev@gmail.com
          </div>
          <div className="ms-md-auto me-md-0 mx-auto">
            <a rel="noreferrer" target="_blank" href="https:/instagram.com/_juan.sev_/" className="me-4 text-reset text-decoration-none"><i className="bi bi-instagram"></i></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/francisco-juan-severiano-a939b9241/" className="me-4 text-reset text-decoration-none"><i className="bi bi-linkedin"></i></a>
            <a rel="noreferrer" target="_blank" href="https://github.com/Juan-Severiano/" className="me-4 text-reset text-decoration-none"><i className="bi bi-github"></i></a>
            <a rel="noreferrer" target="_blank" href="https://wa.me/+5588988586931" className="me-4 text-reset text-decoration-none"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </section>
      <header className="container-fluid" id='header'>
        <nav className="navbar navbar-expand-lg">
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
                <li className="nav-item"><Link className="nav-link text-reset" to="/series">Series</Link></li>
                <li className="nav-item"><Link className="nav-link text-reset" to="/stories">Stories</Link></li>
                <li className="nav-item"><Link className="nav-link text-reset" to="/events">Events</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
