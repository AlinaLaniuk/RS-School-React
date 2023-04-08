import { FullCardProps } from './types';

function FullCard({
  name,
  created,
  gender,
  image,
  location,
  species,
  status,
  type,
}: FullCardProps) {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={image} alt={name} />
      </div>
      <div className="card-info-container">
        <div data-testid="card-header" className="card-header">
          {name}
        </div>
        <div className="budget">Created: {created}</div>
        <div className="renevue">Gender: {gender}</div>
        <div className="renevue">Location: {location.name}</div>
        <div className="renevue">Species: {species}</div>
        <div className="renevue">Status: {status}</div>
        {type && <div className="renevue">Type: {type}</div>}
      </div>
    </div>
  );
}

export default FullCard;
