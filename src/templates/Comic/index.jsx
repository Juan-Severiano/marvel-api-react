import { useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import { getComicById } from '../../services/requests/comics';
import ComeBack from '../../components/ComeBack';

const objCharacter = {
  name: 'Loading ...',
  title: 'Loading ...',
  description: 'Lorem ipsim tananam',
  thumbnail: {
    path: '',
    extension: ''
  },
  dates: [
    {type: 'asd', date: '1234567890'}
  ]
}

function Comic() {
  const { id } = useParams()
  const [comic, setComic] = useState(objCharacter);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getComicById(id);
      console.log(response.results);
      setComic(response.results[0]);
    }
    fetchCharacter()
  }, [id]);

  return (
    <>
      <ComeBack />
      <main id="comic" style={{ backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})` }}>
        <article className="container">
          <section className="content container">
            <div className="row">
              <div className="col-6 col-md-5 p-5">
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className='img-fluid rounded rounded-3' alt="" />
              </div>
              <div className="col-12 col-md-7 my-auto my-5">
                <h2 className="character-name">{comic.title}</h2>
                <span className='font-default fs-4'>Published</span>
                <p className='description'>{new Date(comic.dates[0].date).toDateString()}</p>
                <p className="font-default fs-4">descrição</p>
                <p className="description">{comic.description || 'Nenhuma descrição sobre a HQ encontrada'}</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default Comic
