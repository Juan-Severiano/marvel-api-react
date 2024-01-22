import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import ComeBack from '../../components/ComeBack';
import { getEventById, getEventCharacters } from '../../services/requests/events';
import Carousel from '../../components/Carousel';

const objCharacter = {
  name: 'Loading ...',
  title: 'Loading ...',
  description: 'Lorem ipsim tananam',
  thumbnail: {
    path: '',
    extension: ''
  },
  dates: [
    { type: 'asd', date: '1234567890' }
  ]
}

function Event() {
  const { id } = useParams()
  const [event, setEvent] = useState(objCharacter);
  const [characters, setCharacters] = useState([objCharacter]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getEventById(id);
      const responseCharacter = await getEventCharacters(id);
      console.log(response.results);
      setEvent(response.results[0]);
      setCharacters(responseCharacter.results);
    }
    fetchCharacter()
  }, [id]);

  return (
    <>
      <ComeBack />
      <main id="comic" style={{ backgroundImage: `url(${event.thumbnail.path}.${event.thumbnail.extension})` }}>
        <article className="container">
          <section className="content container">
            <div className="row">
              <div className="col-6 col-md-5 p-5">
                <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} className='img-fluid rounded rounded-3' alt="" />
              </div>
              <div className="col-12 col-md-7 my-auto my-5">
                <h2 className="character-name">{event.title}</h2>
                <span className='font-default fs-4'>end</span>
                <p className='description'>{new Date(event.end).toDateString()}</p>
                <p className="font-default fs-4">descrição</p>
                <p className="description">{event.description || 'Nenhuma descrição sobre a Saga encontrada'}</p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <main className='px-auto' id='events'>
        <article className="container px-auto">
          <section className="content container">
            <h3 className='font-default mt-5 text-primary text-white fs-1 text-center text-md-start'>Characters in {event.title}</h3>
            <Carousel>
              {
                characters.map(character => (
                  <figure className='comic-card item' key={character.id}>
                    <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${character.thumbnail.path}.${character.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    </div>
                    <div className="comic-card-body mt-3">
                      <h4 className='font-default text-center fs-6'>{character.name}</h4>
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

export default Event
