import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { UrlDto } from '../domain/short-url';

type UrlListProps = {
  items: UrlDto[];
};
export default function UrlList(props: UrlListProps) {
  const { items } = props;

  return (
    <Container className="mt-3">
      <h3>Latests URL</h3>
      <Row>
        <Col xs={12} md={10} lg={10}>
          <ListGroup>
            {items?.map((item) => (
              <ListGroupItem key={item.id}>
                <a href={item.longUrl} target="_blank" rel="noreferrer">
                  {item.shortUrl}
                </a>
                @ {item.longUrl}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
