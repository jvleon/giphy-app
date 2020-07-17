import React from 'react';
import PropTypes from 'prop-types';
import Img from './styled';

const Image = ({ src, alt }) => (
  <Img src={src} alt={alt} />
);

Image.defaultProps = {
  src: '//via.placeholder.com/350x150',
  alt: 'placeholder',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
