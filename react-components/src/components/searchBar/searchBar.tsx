import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook';
import { updateSearchValue } from '../../store/searchValueSlice';

type InputValue = {
  inputValue: string;
};

function SearchBar() {
  const { register, handleSubmit } = useForm<InputValue>({
    mode: 'onSubmit',
  });
  const dispatch = useAppDispatch();

  const onSubmitInputValue = (inputValue: InputValue) => {
    dispatch(updateSearchValue(inputValue.inputValue));
  };

  return (
    <form className="input-wrapper" onSubmit={handleSubmit(onSubmitInputValue)}>
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input {...register('inputValue')} placeholder="Type to search..." type="text" />
    </form>
  );
}

export default SearchBar;
