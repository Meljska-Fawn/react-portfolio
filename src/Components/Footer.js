import React from 'react';
import Row from 'react-bootstrap/Row';

function Copyright() {
  return (
    <div className="text-secondary">
      {'Copyright © '}
      Melissa Vaughn
      {' '}
      {new Date().getFullYear()}
    </div>
  );
}

export default function Footer() {
  return (
      <Row className="fixed-bottom max-width-lg bg-light pb-2 pt-2 d-flex align-items-center justify-content-center" style={{ maxHeight: '200px' }}>
          <Copyright />
      </Row>
  );
}