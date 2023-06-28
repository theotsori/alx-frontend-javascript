function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { message: 'API response' };
      resolve(response);
    });
  });
}

export default getResponseFromAPI;
