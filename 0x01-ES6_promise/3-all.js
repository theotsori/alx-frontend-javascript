import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  Promise.all([promise1, promise2])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
