import React from 'react';
import { FullCardProps } from './types';

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  cardData: FullCardProps;
};

function Modal({ active, setActive, cardData }: ModalProps) {
  const { image, name, created, gender, location, species, status, type } = cardData;
  return (
    <button
      data-testid="modal-container"
      className={active ? 'modal-container modal-active' : 'modal-container'}
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
        <div
          className="close-button"
          onClick={() => {
            setActive(false);
          }}
          aria-hidden="true"
        >
          <img src="../../../public/closeButton-01.png" alt="close-button" />
        </div>
        <div className="card-img-container">
          <img src={image} alt={name} />
        </div>
        <div className="card-info-container">
          <div data-testid="card-header" className="card-header">
            {name}
          </div>
          <div className="card-text">Created: {created}</div>
          <div className="card-text">Gender: {gender}</div>
          <div className="card-text">Location: {location.name}</div>
          <div className="card-text">Species: {species}</div>
          <div className="card-text">Status: {status}</div>
          {type && <div className="card-text">Type: {type}</div>}
        </div>
      </div>
    </button>
  );
}

export default Modal;
