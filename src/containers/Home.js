import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap';
import Image from '../components/Image';
import Search from '../components/Search';
import {
  ImageContainer,
  MainContainer,
} from '../components/Layout';
import {
  fetchSearchData,
  fetchTrendingData,
  resetData,
} from '../actions';

const Home = ({ data, ...props }) => {
  const [searchData, setSearchData] =  useState('');
  useEffect(() => {
    props.fetchTrendingData();
  }, []);


  const setTrending = () => {
    props.resetData();
    props.fetchTrendingData();
  };

  const handleChange = ({ target: { value } }) => {
    setSearchData(value);
  };

  const handleClick = () => {
    if(searchData.length > 0) {
      props.resetData();
      props.fetchSearchData(searchData);
    }
  };

  return (
    <>
      <Navbar color="dark">
        <NavbarBrand>
          <NavLink href="#" onClick={setTrending}>Top gifs</NavLink>
        </NavbarBrand>
      </Navbar>
      <Row>
        <Search onChange={handleChange} onClick={handleClick} />
      </Row>
      <Row>
        <MainContainer>
         {
           data.length > 0 && data.map(({ images }, i) => (
             <ImageContainer>
              <Image src={images.downsized.url} />
             </ImageContainer>
           ))
         }
        </MainContainer>
      </Row>
    </>
  );
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
