import PropTypes from 'prop-types';
import './styles.scss';

const SimpleCardCharacters = ({ character }) => {
  return (
      <div className="card border-0 p-2">
        <div className="img-card img-fluid" style={{ backgroundImage: `url(${(`${character.thumbnail.path}.${character.thumbnail.extension}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        </div>
        <div className="card-body">
          <h5 className="card-title fs-3 text-decoration-none">{character.name}</h5>
        </div>
      </div>
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
