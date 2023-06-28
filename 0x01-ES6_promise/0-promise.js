export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { message: 'API response' };
      resolve(response);
    }, 1000);
  });
}
