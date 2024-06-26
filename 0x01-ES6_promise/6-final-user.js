import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => {
      const response = [];

      for (const element of values) {
        if (element.status === 'fulfilled') {
          response.push({ status: element.status, value: element.value });
        } else {
          response.push({ status: element.status, value: `${element.reason}` });
        }
      }

      return response;
    });
}
