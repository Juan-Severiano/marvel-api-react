import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import './styles.scss';
import { Grid } from "@mui/material";
import SimpleCardCharacters from "../../components/SimpleCardCharacters";
import Header from '../../components/Header/index';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get('/characters');
      console.log(response.data.data.results);
      setCharacters(response.data.data.results);
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
