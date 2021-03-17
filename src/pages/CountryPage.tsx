import { RouteComponentProps } from 'react-router-dom';
import * as React from 'react';

type TParams = { id: string };

export const CountryPage = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;

  return (
    <h1>
      This is a page for country with ID:
      {id}
    </h1>
  );
};
