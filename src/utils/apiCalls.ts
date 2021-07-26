export const getApiData = async (endPoint: string) => {
  let url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/${endPoint}`
  return await fetch(url);
};