import { UserApi, AuthApi, CurrentUserApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import { user } from './UserSlice';
export const startRegister = (user: user): Promise<{ user: user }> => {
  return new Promise<{ user: user }>((resolve, reject) => {
    const userApi = new UserApi(apiConfig);
    userApi
      .register({
        username: user.userName,
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.confirmPassword,
        country: user.country,
        college: user.college,
        avatarId: 0,
      })
      .then(() => {
        resolve({ user: user });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject(error.message);
        }
      });
  });
};

export function startLogin(
  user = { email: ' ', password: '' },
): Promise<{ user: { email: string; password: string } }> {
  return new Promise<{
    user: { email: string; password: string };
  }>((resolve, reject) => {
    const authApi = new AuthApi(apiConfig);
    authApi
      .passwordLogin({
        email: user.email,
        password: user.password,
      })
      .then(() => {
        resolve({ user: user });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject(error);
        }
      });
  });
}

export const getUserDetails = (): Promise<{
  fullName: string;
  userName: string;
  email: string;
  admin: boolean;
  college: string;
  country: string;
}> => {
  return new Promise((resolve, reject) => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .getCurrentUser()
      .then(res => {
        resolve({
          fullName: res.name,
          userName: res.username,
          email: res.email,
          admin: res.isAdmin,
          college: res.college,
          country: res.country,
        });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject();
        }
      });
  });
};

export const ChangeUserDetails = (user: {
  userName: string;
  college: string;
  country: string;
}): Promise<{
  user: { userName: string; college: string; country: string };
}> => {
  return new Promise<{
    user: { userName: string; college: string; country: string };
  }>((resolve, reject) => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .updateCurrentUser({
        name: user.userName,
        college: user.college,
        country: user.country,
      })
      .then(() => {
        resolve({ user: user });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject();
        }
      });
  });
};

export const ChangeUserCreditionals = (creditionals: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .updatePassword({
        oldPassword: creditionals.oldPassword,
        password: creditionals.newPassword,
        passwordConfirmation: creditionals.confirmPassword,
      })
      .then(() => {
        resolve(creditionals.confirmPassword);
      })
      .catch(error => {
        if (error instanceof ApiError) {
          reject({ error: error.message });
        }
      });
  });
};