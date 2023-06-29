import React from 'react';
import PDF from '../Components/PDF'

function RLWheelReport() {
  return (
    <div style={{ height: '100vh' }}>
      <PDF file='/RLWheelReport.pdf'/>
    </div>
  );
}

export default RLWheelReport;
