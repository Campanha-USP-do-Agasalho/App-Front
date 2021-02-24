import useSWR from 'swr';
import api from './api';

function useAPI(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    console.log('dentro do useAPI');
    const response = await api.get(url);
    return response.data;
  }, { revalidateOnMount: true });

  return { data, error, mutate };
}

export default useAPI;
