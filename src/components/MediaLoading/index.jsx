import './styles.scss';

const MediaCard = () => {
  return (
    <div className="media-card card border-0 p-2">
        <div className="skeleton-container">
          <div className="circle skeleton" style={{ width: 150, height: 150, borderRadius: '100%', backgroundColor: '#000' }}></div>
          <div className="text skeleton" style={{ width: '90%', height: 40, borderRadius: 10 }}></div>
        </div>
    </div>
  );
};

export default MediaCard;
