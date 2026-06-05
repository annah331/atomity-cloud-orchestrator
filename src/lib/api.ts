export async function getCloudMetrics() {
  const response = await fetch('https://dummyjson.com/products?limit=4');

  if (!response.ok) {
    throw new Error('Failed to fetch metrics');
  }

  const data = await response.json();

  return {
    cpuSavings: data.products[0].stock,
    gpuUtilization: data.products[1].stock,
    storageEfficiency: data.products[2].stock,
    networkPerformance: data.products[3].stock,
  };
}
