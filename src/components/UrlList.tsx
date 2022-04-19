import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { UrlDto } from '../domain/short-url';

type UrlListProps = {
  items: UrlDto[];
};
export default function UrlList(props: UrlListProps) {
  const { items } = props;

  return (
    <Container className="mt-3">
      <ListGroup>
        {items?.map((item) => (
          <ListGroupItem key={item.id}>
            <a href={item.longUrl} target="_blank" rel="noreferrer">
              {item.longUrl}
            </a>
            @ {item.shortUrl}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
