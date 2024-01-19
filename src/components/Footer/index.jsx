import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between flex-column">
      <div className="top container d-flex justify-content-center align-items-center text-white flex-column">
        <div className="info d-flex text-white align-items-center justify-content-center flex-column">
          <h4>The Marvel API</h4>
          <p>Esse site foi feito com o uso de tecnologias como React.js, JavaScript, Bootstrap, Sass, Axios. Consumindo a Marvel API feita pela <a className='font-default' href="https://github.com/afuh" rel="noopener">Marvel Developers</a></p>
        </div>
        <h4>Este projeto só foi concluido pela <a className='font-default' href="https://developer.marvel.com/" rel="noopener">The Marvel Developers</a></h4>

      </div>
      <div className="bottom d-flex justify-content-center align-items-center text-white bg-black">
        &copy; Todos os direitos reservados à <a className='ms-1 font-default ' href="https://marvel.com/" rel="noopener">Marvel</a>
      </div>
    </footer>
  )
}

export default Footer;
