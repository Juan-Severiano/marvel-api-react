import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { getCharactersById } from '../../services/requests/characters';
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

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharactersById(id);
      console.log(response)
      setCharacter(response.results[0]);
    }
    fetchCharacter()
  }, [id])
  return (
    <>
    <ComeBack />
      <main id="artist">
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
    </>
  )
}

export default Character
