import React from 'react';
import { FullCardProps } from '../card/types';

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  cardData: FullCardProps;
};

function Modal({ active, setActive, cardData }: ModalProps) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Esc') {
      setActive(false);
    }
  };

  const { image, name, created, gender, location, species, status, type } = cardData;
  return (
    <button
      data-testid="modal-container"
      className={active ? 'modal-container active' : 'modal-container'}
      onClick={() => {
        setActive(false);
      }}
      type="button"
    >
      <div
        className="card-container"
        onClick={(event) => event.stopPropagation()}
        aria-hidden="true"
      >
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
    </button>
  );
}

export default Modal;
