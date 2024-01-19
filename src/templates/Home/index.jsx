import { useEffect } from "react";
import { useState } from "react";
import { getCharacters } from "../../services/requests/characters";
import './styles.scss';
import { Grid } from "@mui/material";
import SimpleCardCharacters from "../../components/SimpleCardCharacters";
import Header from '../../components/Header/index';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getCharacters();
      console.log(response.results);
      setCharacters(response.results);
    }
    fetch()
  }, [])

  return (
    <>
      <Header />
      <main className="container my-5" id="home">
        <h2 className="font-default text-white text-center fs-1 my-5">Conheça os personagens</h2>
        <Grid container xs={12} spacing={3}>
          {
            characters.map(character => {
              return (
                <SimpleCardCharacters key={character.id} character={character} />
              )
            })
          }
        </Grid>
      </main>
    </>
  );
};

export default Home;
