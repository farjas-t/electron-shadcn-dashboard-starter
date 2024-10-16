import { Helmet } from 'react-helmet-async';
import React from 'react';

export default function PageHead({ title = 'Kutubi' }) {
  return (
    <Helmet>
      <title> {title} </title>
    </Helmet>
  );
}
