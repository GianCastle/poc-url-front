import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'reactstrap';
import useUrlRedirect from '../hooks/useUrlRedirect';

export default function LinkRedirectHandler() {
  const { id } = useParams();
  const { loading, error } = useUrlRedirect(id ?? '');

  if (loading) return <Spinner />;
  if (!loading && error) return <Container>{error && error}</Container>;
  return null;
}
