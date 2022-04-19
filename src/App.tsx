import './App.css';
import { Container, Spinner } from 'reactstrap';
import UrlForm, { UrlFormSchema } from './components/UrlForm';
import UrlList from './components/UrlList';
import useGetAllUrls from './hooks/useGetAllUrls';
import { createUrl } from './utils/http';
import { useState } from 'react';

function App() {
  const [sucess, setSucess] = useState(false);
  const { data, loading, error } = useGetAllUrls(sucess);

  const onSubmitUrl = async (data: UrlFormSchema) => {
    setSucess(false);
    const response = await createUrl(data);
    if (response.status === 200) setSucess(true);
  };

  return (
    <Container fluid>
      <UrlForm onSubmit={onSubmitUrl} />

      {Boolean(loading) && (
        <div className="d-flex mt-3 justify-content-center">
          <Spinner />
        </div>
      )}
      {Boolean(!loading && !error) && <UrlList items={data} />}
    </Container>
  );
}

export default App;
