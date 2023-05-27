import { getFilter } from 'Redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { setFilter } from 'Redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filetrData = useSelector(getFilter);
  
  return (
    <Label>
      Find contact by name
      <input
        type="text"
        value={filetrData}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value.trim()))}
      />
    </Label>
  );
};
