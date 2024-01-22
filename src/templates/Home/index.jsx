import { useEffect } from "react";
import { useState } from "react";
import { getCharacters } from "../../services/requests/characters";
import './styles.scss';
import Header from '../../components/Header/index';
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import { getComics } from "../../services/requests/comics";
import { getEvents } from "../../services/requests/events";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getCharacters();
      const responseComics = await getComics();
      const responseEvents = await getEvents();
      console.log(response.results);
      setCharacters(response.results);
      setComics(responseComics.results);
      setEvents(responseEvents.results);
    }
    fetch()
  }, [])

  return (
    <>
      <Header />
      <main className="container my-5" id="home">
        <Link to='/characters' className="text-decoration-none hover-primary">
          <h2 className="font-default text-white text-center fs-1 my-5">Conheça os personagens</h2>
        </Link>
        <Carousel>
          {
            characters.map(character => (
              <figure className='comic-card item' id="home" key={character.id}>
                <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${character.thumbnail.path}.${character.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                </div>
                <div className="comic-card-body mt-3">
                  <h4 className='font-default text-center fs-4 text-white'>{character.name}</h4>
                </div>
              </figure>
            ))
          }
        </Carousel>
        <Link to='/comics' className="text-decoration-none hover-primary">
          <h2 className="font-default text-white text-center fs-1 my-5">Conheça os quadrinhos</h2>
        </Link>
        <Carousel>
          {
            comics.map(comic => (
              <figure className='comic-card item' key={comic.id}>
                <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${comic.thumbnail.path}.${comic.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: 350 }}></div>
                <div className="comic-card-body mt-3">
                  <h4 className='font-default text-center fs-4 text-white'>{comic.title}</h4>
                </div>
              </figure>
            ))
          }
        </Carousel>
        <Link to='/events' className="text-decoration-none hover-primary">
          <h2 className="font-default text-white text-center fs-1 my-5">Conheça as Sagas</h2>
        </Link>
        <Carousel>
          {
            events.map(character => (
              <figure className='comic-card item' id="home" key={character.id}>
                <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${character.thumbnail.path}.${character.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                </div>
                <div className="comic-card-body mt-3">
                  <h4 className='font-default text-center fs-4 text-white'>{character.title}</h4>
                </div>
              </figure>
            ))
          }
        </Carousel>
      </main>
      <Footer />

    </>
  );
};

export default Home;
