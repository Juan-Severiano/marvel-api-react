import './styles.scss';

const MediaComicsLoading = () => {
  return (
    <div className="media-card card border-0 p-2">
        <div className="skeleton-container" id='comics'>
          <div className="skeleton" style={{ width: '100%', height: 300, backgroundColor: '#000' }}></div>
          <div className="text skeleton" style={{ width: '90%', height: 40, borderRadius: 10 }}></div>
        </div>
    </div>
  );
};

export default MediaComicsLoading;
