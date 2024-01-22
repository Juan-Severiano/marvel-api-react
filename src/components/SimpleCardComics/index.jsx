import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from "react-router-dom";

const SimpleCardComics = ({ comics }) => {
  return (
    <Grid key={comics.id} item xs={12} lg={3} md={4} sm={6}>
      <Link to={`/comics/${comics.id}`} className="text-decoration-none">
        <div className="card border-0" id="comics">
          <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} className="img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title fs-4">{comics.title}</h5>
          </div>
        </div>
      </Link>
    </Grid>
  )
}

SimpleCardComics.propTypes = {
  comics: {
    name: PropTypes.string,
    thumbnail: {
      path: PropTypes.string,
      extension: PropTypes.string
    }
  }
}

export default SimpleCardComics;
