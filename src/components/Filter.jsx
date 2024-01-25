import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../redux/filterSlice';
import styled from 'styled-components';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label style={{ color: 'white' }}>
      Find contacts by name:
      <Input
        onChange={handleFilterChange}
        name="filter"
        type="text"
        placeholder="Search by name"
        filter={filter}
      />
    </label>
  );
};

const Input = styled.input`
  margin-left: 10px;
`;
