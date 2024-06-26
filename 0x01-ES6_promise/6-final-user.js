import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((values) => values);
}
