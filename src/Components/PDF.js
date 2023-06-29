import React from 'react';
import PropTypes from 'prop-types';

function PDF({ file }) {
  return (
    <object data={process.env.PUBLIC_URL + file} type="application/pdf" width="100%" height="100%" aria-label="Resume PDF"/>
  );
}

PDF.propTypes = {
  file: PropTypes.string.isRequired,
};

export default PDF;
