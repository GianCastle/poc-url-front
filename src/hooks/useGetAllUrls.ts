import { useEffect, useState } from 'react';
import { UrlDto } from '../domain/short-url';
import { getAllUrlsAsync } from '../utils/http';

export default function useGetAllUrls(isSucess: boolean) {
  const [data, setData] = useState<UrlDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAllUrls = async () => {
    setLoading(true);
    try {
      const response = await getAllUrlsAsync();
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error as string);
    }
  };

  useEffect(() => {
    getAllUrls();
  }, [isSucess]);

  return { data, loading, error };
}
