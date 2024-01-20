import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { getCharactersById, getCharactersComics } from '../../services/requests/characters';
import ComeBack from '../../components/ComeBack';
import Carousel from '../../components/Carousel';

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
            <Carousel>
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
            </Carousel>
          </section>
        </article>
      </main>
    </>
  )
}

export default Character
