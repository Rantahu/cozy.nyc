import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function Exchange() {
  return (
    <div>
      <Helmet title="exchange" />
      <h1>Still in the works...</h1>
      <Link to="/">Take me back home</Link>
      <p>Or</p>
      <Link to="/contribute">Help us out!!!</Link>
    </div>
  );
}
