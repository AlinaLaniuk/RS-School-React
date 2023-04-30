import React from 'react';
import { useGetCharacterQuery } from '../../store/api';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { updateCurrentCardId } from '../../store/updateCurrentCardIdSlice';

function Modal() {
  const dispatch = useAppDispatch();
  const currentCardId = useAppSelector((state) => state.updateCurrentCardIdSliceReducer.id);
  const isModalActive = useAppSelector((state) => state.updateCurrentCardIdSliceReducer.isActive);
  const { data, isFetching } = useGetCharacterQuery(currentCardId);
  return (
    <div
      data-testid="modal-container"
      className={isModalActive ? 'modal-container modal-active' : 'modal-container'}
      onClick={() => {
        dispatch(updateCurrentCardId({ id: currentCardId, isActive: false }));
      }}
      aria-hidden="true"
    >
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div
          className="card-container"
          onClick={(event) => event.stopPropagation()}
          aria-hidden="true"
        >
          <div
            className="close-button"
            data-testid="close-button"
            onClick={() => {
              dispatch(updateCurrentCardId({ id: currentCardId, isActive: false }));
            }}
            aria-hidden="true"
          >
            <img src="closeButton-01.png" alt="close-button" />
          </div>
          <div className="card-img-container">
            <img src={data?.image} alt={data?.name} />
          </div>
          <div className="card-info-container">
            <div data-testid="card-header" className="card-header">
              {data?.name}
            </div>
            <div className="card-text">Created: {data?.created}</div>
            <div className="card-text">Gender: {data?.gender}</div>
            <div className="card-text">Location: {data?.location.name}</div>
            <div className="card-text">Species: {data?.species}</div>
            <div className="card-text">Status: {data?.status}</div>
            {data?.type && <div className="card-text">Type: {data?.type}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
