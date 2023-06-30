import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    const userStatus = userResult.status === 'fulfilled' ? 200 : 500;
    const photoStatus = photoResult.status === 'fulfilled' ? 200 : 500;

    return [
      { status: userStatus, value: userResult.status === 'fulfilled' ? userResult.value : new Error() },
      { status: photoStatus, value: photoResult.status === 'fulfilled' ? photoResult.value : new Error() },
    ];
  } catch {
    console.log('Signup system offline');
    return [];
  }
}
