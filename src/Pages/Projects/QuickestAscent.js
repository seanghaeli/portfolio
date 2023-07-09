import React from 'react';
import PDF from '../../Components/PDF'

function Resume() {
  return (
    <div style={{ height: '100vh' }}>
      <PDF file='/resume.pdf'/>
    </div>
  );
}

export default Resume;
