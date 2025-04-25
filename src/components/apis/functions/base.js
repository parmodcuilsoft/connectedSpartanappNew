async function getFromApi(endpoint) {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (error) {
    console.log(`Error: ${error}`);
    return null;
  }
}

export default getFromApi;
