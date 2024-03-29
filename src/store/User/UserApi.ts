import { UserApi, AuthApi, CurrentUserApi } from '@codecharacter-2024/client';
import { apiConfig, ApiError, authConfig } from '../../api/ApiConfig';
import { User } from './UserSlice';
import Toast, { toast } from 'react-hot-toast';

export const startRegister = (user: User): Promise<{ user: User }> => {
  return new Promise<{ user: User }>((resolve, reject) => {
    const userApi = new UserApi(authConfig);
    userApi
      .register({
        username: user.username,
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.confirmPassword,
        country: user.country,
        college: user.college,
        avatarId: user.avatarId,
        recaptchaCode: user.recaptchaCode,
      })
      .then(() => {
        resolve({ user: user });
        toast.success('Registration Successful');
      })
      .catch(error => {
        if (error instanceof ApiError) {
          toast.error(error.message);
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
    const authApi = new AuthApi(authConfig);
    authApi
      .passwordLogin({
        email: user.email,
        password: user.password,
      })
      .then(res => {
        localStorage.setItem('token', res.token);
        resolve({ user: user });
      })
      .catch(error => {
        if (error instanceof ApiError) {
          toast.error(error.message);
          reject(error);
        }
      });
  });
}

export const getUserDetails = (): Promise<{
  id: string;
  fullName: string;
  userName: string;
  email: string;
  admin: boolean;
  college: string;
  country: string;
  avatarId: number;
  isTutorialComplete: boolean;
  codeTutorialNumber: number | undefined;
}> => {
  return new Promise((resolve, reject) => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .getCurrentUser()
      .then(res => {
        resolve({
          id: res.id,
          fullName: res.name,
          userName: res.username,
          email: res.email,
          admin: res.isProfileComplete,
          college: res.college,
          country: res.country,
          avatarId: res.avatarId,
          isTutorialComplete: res.isTutorialComplete,
          codeTutorialNumber: res.codeTutorialLevel,
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
  avatarId: number;
}): Promise<{
  user: {
    userName: string;
    college: string;
    country: string;
    avatarId: number;
  };
}> => {
  return new Promise<{
    user: {
      userName: string;
      college: string;
      country: string;
      avatarId: number;
    };
  }>((resolve, reject) => {
    const currentUserapi = new CurrentUserApi(apiConfig);
    currentUserapi
      .updateCurrentUser({
        name: user.userName,
        college: user.college,
        country: user.country,
        avatarId: user.avatarId,
      })
      .then(() => {
        resolve({ user: user });
        Toast.success('Profile Updated');
      })
      .catch(error => {
        if (error instanceof ApiError) {
          Toast.error(error.message);
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
        Toast.success('Credentials Changed');
      })
      .catch(error => {
        if (error instanceof ApiError) {
          Toast.error(error.message);
          reject({ error: error.message });
        }
      });
  });
};
