import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { getCharactersById, getCharactersComics, getCharactersEvents, getCharactersSeries } from '../../services/requests/characters';
import ComeBack from '../../components/ComeBack';
import Carousel from '../../components/Carousel';

const objCharacter = {
  name: 'Loading ...',
  title: 'Loading ...',
  description: 'Lorem ipsim tananam',
  thumbnail: {
    path: '',
    extension: ''
  }
}

function Character() {
  const { id } = useParams()
  const [character, setCharacter] = useState(objCharacter);
  const [comics, setComics] = useState([objCharacter]);
  const [series, setSeries] = useState([objCharacter]);
  const [events, setEvents] = useState([objCharacter]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharactersById(id);
      const comicsResponse = await getCharactersComics(id);
      const seriesResponse = await getCharactersSeries(id);
      const eventsResponse = await getCharactersEvents(id);
      setCharacter(response.results[0]);
      setComics(comicsResponse.results);
      setSeries(seriesResponse.results);
      setEvents(eventsResponse.results);
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
                <img src="/marvel-logo-different.jpeg" className='img-fluid logo' alt="" />
                <img id='img-inside' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className='img-fluid  d-md-none mb-3' alt="" />
                <h2 className="character-name">{character.name}</h2>
                <p className="description" id={1}>{character.description}</p>
              </div>
              <div className="col-12 col-md-6 p-5 d-none d-md-block">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className='img-fluid rounded rounded-3' alt="" />
              </div>
            </div>
          </section>
        </article>
      </main>
      <main className='px-auto' id='comics'>
        <article className="container px-auto">
          <section className="content container">
            <h3 className='font-default mt-5 text-primary text-white fs-1 text-center text-md-start'>Comics with {character.name}</h3>
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
      <main className='px-auto' id='series'>
        <article className="container px-auto">
          <section className="content container">
            <h3 className='font-default mt-5 text-primary text-white fs-1 text-center text-md-start'>Series with {character.name}</h3>
            <Carousel>
              {
                series.map(serie => (
                  <figure className='serie-card item' key={serie.id}>
                    <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} className='comic-img img-fluid' alt="" />
                    <div className="comic-card-body mt-3">
                      <h4 className='font-default text-center fs-6'>{serie.title}</h4>
                    </div>
                  </figure>
                ))
              }
            </Carousel>
          </section>
        </article>
      </main>
      <main className='px-auto' id='events'>
        <article className="container px-auto">
          <section className="content container">
            <h3 className='font-default mt-5 text-primary text-white fs-1 text-center text-md-start'>Events with {character.name}</h3>
            <Carousel>
              {
                events.map(serie => (
                  <figure className='serie-card item' key={serie.id}>
                    <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} className='comic-img img-fluid' alt="" />
                    <div className="comic-card-body mt-3">
                      <h4 className='font-default text-center fs-6'>{serie.title}</h4>
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
