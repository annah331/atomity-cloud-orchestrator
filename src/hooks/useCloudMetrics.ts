import { useQuery } from '@tanstack/react-query';
import { getCloudMetrics } from '../lib/api';

export function useCloudMetrics() {
  return useQuery({
    queryKey: ['cloudMetrics'],
    queryFn: getCloudMetrics,
  });
}
