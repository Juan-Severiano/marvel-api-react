import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from "react-router-dom";

const SimpleCardSeries = ({ series }) => {
  return (
    <Grid key={series.id} item xs={12} lg={3} md={4} sm={6}>
      <Link to={`/events/${series.id}`} className="text-decoration-none">
      <div className="card border-0" id="series">
        <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} className="img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title fs-4">{series.title}</h5>
        </div>
      </div>
      </Link>
    </Grid>
  )
}

SimpleCardSeries.propTypes = {
  series: {
    name: PropTypes.string,
    thumbnail: {
      path: PropTypes.string,
      extension: PropTypes.string
    }
  }
}

export default SimpleCardSeries;
