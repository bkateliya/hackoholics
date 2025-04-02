import cache from 'memory-cache';
export async function getOrSetCache<T>(
  cacheKey: string,
  getData: () => Promise<T>,
  duration = 5 * 60 * 1000
) {
  const cachedResponse = cache.get(cacheKey) as T | null;

  if (cachedResponse !== null) {
    return cachedResponse;
  }
  const response = await getData();
  cache.put(cacheKey, response, duration);
  return response;
}
