import React from 'react';
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

const Home = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          Gifs example API
        </NavbarBrand>
        <NavItem>
          <NavLink href="#" onClick={() => alert('hello')}>Top gifs</NavLink>
        </NavItem>
      </Navbar>
      <Row>
        <Search />
      </Row>
      <Row>
        <MainContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </MainContainer>
      </Row>
    </>
  );
};

export default Home;
