import { Grid } from '@mui/material';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import SimpleCardSeries from '../../components/SimpleCardSeries';
import { getEvents, getEventsByNameStart } from '../../services/requests/events';
import MediaComicsUnion from '../../components/MediaComicsUnion';

const Stories = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);


  const handleSearchUpdate = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getEvents();
      console.log(response.results);
      setCharacters(response.results);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchSearchCharacters = async () => {
      const response = await getEventsByNameStart(search);
      console.log(response.results);
      setCharacters(response.results);
    };

    fetchSearchCharacters();
  }, [search]);

  return (
    <>
      <Nav textColor='#fff' />
      <main className="container my-5">
        <div className="input-group mb-3">
          <input type="text" value={search} onChange={handleSearchUpdate} className="form-control text-white" id="exampleFormControlInput1" placeholder="Pesquise seu personagem favorito" />
          <span className="input-group-text"><i className="bi bi-search"></i></span>
        </div>
        <Grid container xs={12} spacing={3}>
          {
            loading ?
              <MediaComicsUnion />
              :
              characters.map((serie) => {
                if (serie.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null
                return <SimpleCardSeries key={serie.id} series={serie} />
              })}
        </Grid>
      </main>
    </>
  );
};

export default Stories;
