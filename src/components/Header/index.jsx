import './styles.scss';
import Nav from '../Nav';

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
        <Nav />
      </header>
    </>
  );
};

export default Header;
