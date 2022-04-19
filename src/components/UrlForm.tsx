import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  FormFeedback,
} from 'reactstrap';
import { isValidUrl } from '../utils/isValidUrl';

export type UrlFormSchema = {
  longUrl: string;
};

export type UrlFormProps = {
  onSubmit: (data: UrlFormSchema) => void;
};
export default function UrlForm(props: UrlFormProps) {
  const { onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UrlFormSchema>();

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="url">URL Shoterner</Label>
              <input
                {...register('longUrl', {
                  required: 'URL is required',
                  validate: {
                    isValidUrlOnInput: (value) =>
                      isValidUrl(value) ? true : 'Invalid URL',
                  },
                })}
                className={`form-control ${
                  errors?.longUrl ? 'is-invalid' : ''
                }`}
                placeholder="http://foo.com"
              />
              <FormFeedback>{errors?.longUrl?.message}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input className="btn btn-success" type="submit" value="Submit" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
