import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { getCharacters, getCharactersByNameStart } from "../../services/requests/characters";
import { Grid } from '@mui/material';
import SimpleCardCharacters from "../../components/SimpleCardCharacters";
import './styles.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');


  const handleSearchUpdate = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await getCharacters();
      console.log(response.results);
      setCharacters(response.results);
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchSearchCharacters = async () => {
      const response = await getCharactersByNameStart(search);
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
          <input type="email" value={search} onChange={handleSearchUpdate} className="form-control text-white" id="exampleFormControlInput1" placeholder="Pesquise seu personagem favorito" />
          <span className="input-group-text"><i className="bi bi-search"></i></span>
        </div>
        <Grid container xs={12} spacing={3}>
          {characters.map((character) => {
            if (character.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') return null
            return <SimpleCardCharacters key={character.id} character={character} />
          })}
        </Grid>
      </main>
    </>
  );
};

export default Characters;
