import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    result.photo = await uploadPhoto();
    result.user = await createUser();
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
  }

  return result;
}
