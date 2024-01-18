import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import './styles.scss';
import { Grid } from "@mui/material";

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
      <main className="container" id="home">
        <h2 className="font-default text-white text-center fs-1 my-5">Conheça os personagens</h2>
        <Grid container xs={12} spacing={3}>
          {
            characters.map(character => {
              return (
                <Grid key={character.id} item xs={12} lg={3} md={4} sm={6}>
                  <figure className="card border-0">
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="img-fluid" alt={character.name} />
                    <div className="card-body">
                      <h5 className="card-title">{character.name}</h5>
                    </div>
                  </figure>
                </Grid>
              )
            })
          }
        </Grid>
      </main>
    </>
  );
};

export default Home;
