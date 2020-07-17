import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { SearchContainer, StyledInput } from './styled';

const Search = ({ onChange, onClick }) => (
  <SearchContainer>
    <StyledInput onChange={onChange} />
    <Button color="primary" onClick={onClick}>
      Buscar
    </Button>
  </SearchContainer>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
