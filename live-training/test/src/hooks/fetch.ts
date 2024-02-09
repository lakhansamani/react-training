import { useEffect, useState } from 'react';

export interface FetchData {
  url: string;
  method: string;
  body?: string;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface FetchResponse<T> {
  data: T | undefined;
  error: string;
  loading: boolean;
}

const defaultHeaders = {
  'Content-Type': 'application/json',
  'X-platform': 'web',
};

export function useFetch<T>(data: FetchData): FetchResponse<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState<T>();

  useEffect(() => {
    let isComponentMounted = true;
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(data.url, {
          method: data.method,
          body: data.body,
          headers: {
            ...defaultHeaders,
            ...data.headers,
          },
        });
        const json = await res.json();
        if (!isComponentMounted) return;
        setResponseData(json);
      } catch (err: unknown) {
        if (!isComponentMounted) return;
        setError(err as string);
      } finally {
        if (isComponentMounted) {
          setLoading(false);
        }
      }
    }

    getData();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  return {
    data: responseData,
    error: error,
    loading: loading,
  };
}
