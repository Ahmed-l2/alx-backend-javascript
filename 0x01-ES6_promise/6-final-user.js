import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([
    signUpUser(firstName, lastName).then((value) => ({ status: 'resolved', value })),
    uploadPhoto(filename).then((value) => ({ status: 'resolved', value })),
  ]).catch((error) => ({ status: 'rejected', value: error }));
}
