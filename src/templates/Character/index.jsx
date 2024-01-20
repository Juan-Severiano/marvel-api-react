import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState, useRef } from 'react';
import { getCharactersById, getCharactersComics } from '../../services/requests/characters';
import ComeBack from '../../components/ComeBack';

function Character() {
  const { id } = useParams()
  const [character, setCharacter] = useState({
    name: 'Loading ...',
    description: 'Lorem ipsim tananam',
    thumbnail: {
      path: '',
      extension: ''
    }
  });
  const [comics, setComics] = useState([]);
  const carousel = useRef(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharactersById(id);
      const comicsResponse = await getCharactersComics(id);
      console.log(comicsResponse);
      setCharacter(response.results[0]);
      setComics(comicsResponse.results);
    }
    fetchCharacter()
  }, [id]);

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <>
      <ComeBack />
      <main id="character">
        <article className="container px-auto">
          <section className="content container">
            <div className="row">
              <div className="col-12 col-md-6 my-auto my-5">
                <img src="/marvel-logo-different.jpeg" className='img-fluid w-50 mb-3' alt="" />
                <h2 className="artist-name">{character.name}</h2>
                <p className="description" id={1}>{character.description}</p>
              </div>
              <div className="col-12 col-md-6 p-lg-5">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className='img-fluid' alt="" />
              </div>
            </div>
          </section>
        </article>
      </main>
      <main className='px-auto' id='comics'>
        <article className="container px-auto">
          <section className="content container">
            <h3 className='font-default mt-5 text-primary text-white fs-1 text-center text-md-start'>Quadrinhos com {character.name}</h3>
            <section className='carousel' ref={carousel}>
              {
                comics.map(comic => (
                  <figure className='comic-card item' key={comic.id}>
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className='comic-img img-fluid' alt="" />
                    <div className="comic-card-body mt-3">
                      <h4 className='font-default text-center fs-6'>{comic.title}</h4>
                    </div>
                  </figure>
                ))
              }
            </section>
            <div className="fs-1 container justify-content-center d-flex text-black">
              <button className='btn fs-1 text-black' onClick={handleLeftClick}>
                <i className="bi bi-arrow-left-circle-fill me-3"></i>
              </button>
              <button className='btn fs-1 text-black' onClick={handleRightClick}>
                <i className="bi bi-arrow-right-circle-fill ms-3"></i>
              </button>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default Character
