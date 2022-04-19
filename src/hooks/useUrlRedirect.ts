import { useEffect, useState } from 'react';
import { getUrlByIdAsync } from '../utils/http';

export default function useUrlRedirect(id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getOriginalUrl = async () => {
    setLoading(true);
    try {
      const response = await getUrlByIdAsync(id);

      if (response?.id) {
        window.location.href = response.longUrl;
      } else setError('Url not found');

      setLoading(false);
    } catch (error) {
      setError(error as string);
    }
  };

  useEffect(() => {
    getOriginalUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error };
}
