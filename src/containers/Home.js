import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Navbar,
  NavLink,
  Row,
  Spinner,
} from 'reactstrap';
import Image from '../components/Image';
import Search from '../components/Search';
import {
  ImageContainer,
  MainContainer,
  Loader,
} from '../components/Layout';
import {
  fetchSearchData,
  fetchTrendingData,
  resetData,
} from '../actions';

const Home = ({
  data, loading, currentSearch, ...props
}) => {
  const [searchData, setSearchData] = useState('');
  useEffect(() => {
    props.fetchTrendingData();
  }, []);

  const setTrending = () => {
    props.resetData();
    props.fetchTrendingData();
    setSearchData('');
  };

  const handleChange = ({ target: { value } }) => {
    setSearchData(value);
  };

  const handleClick = () => {
    if (searchData.length > 0) {
      props.resetData();
      props.fetchSearchData(searchData);
    }
  };

  return (
    <>
      <Navbar color="dark">
        <NavLink href="#" onClick={setTrending}>Top gifs</NavLink>
      </Navbar>
      <Row>
        <Search onChange={handleChange} onClick={handleClick} />
      </Row>
      {
        currentSearch
        && (
        <Row className="pl-4">
          <div>
            Resultados de la busqueda para
            {' '}
            <b>{currentSearch}</b>
          </div>
        </Row>
        )
      }
      {
        loading
          ? (
            <Loader>
              <Spinner type="grow" color="success" size="xl" />
              Cargando datos
            </Loader>
          )
          : (
            <Row>
              <MainContainer>
                {
                  data.length > 0 && data.map(({ images, id }) => (
                    <ImageContainer key={id}>
                      <Image src={images.downsized.url} />
                    </ImageContainer>
                  ))
                }
              </MainContainer>
            </Row>
          )
      }
    </>
  );
};

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchSearchData: PropTypes.func.isRequired,
  fetchTrendingData: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired,
  currentSearch: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ data, currentSearch, loading }) => ({
  data,
  currentSearch,
  loading,
});

const mapDispatchToProps = {
  fetchSearchData,
  fetchTrendingData,
  resetData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
