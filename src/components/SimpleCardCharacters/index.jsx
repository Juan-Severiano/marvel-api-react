import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import './styles.scss';

const SimpleCardCharacters = ({ character }) => {
  return (
    <Grid key={character.id} item xs={12} lg={3} md={4} sm={6}>
      <div className="card border-0 p-2">
        <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${character.thumbnail.path}.${character.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        </div>
        <div className="card-body">
          <h5 className="card-title fs-3">{character.name}</h5>
        </div>
      </div>
    </Grid>
  )
}

SimpleCardCharacters.propTypes = {
  character: {
    name: PropTypes.string,
    thumbnail: {
      path: PropTypes.string,
      extension: PropTypes.string
    }
  }
}

export default SimpleCardCharacters;
