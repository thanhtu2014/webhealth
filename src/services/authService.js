import { API } from '@/constants/api';
import http from '@/http';
import { ServiceError } from '@/utils/errorUtil';
import { setAuthUser } from '@/utils/localStorageUtil';
import { camelize, snakelize } from '@/utils/parse';

export async function login({ email, password }) {
  try {
    const {
      data: { user },
    } = await http.post('/users/login', {
      user: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new ServiceError({
      message: 'Unauthorize!',
      details: ['Invalid email or password'],
    });
  }
}

export async function signIn({ email, password }) {
  try {
    const payload = snakelize({ email, password });
    const { status, data } = await http.post(API.AUTH.LOGIN, payload);
    if (status === 200) {
      setAuthUser(data);
      return {
        success: true
      };
    }
    return {
      success: false
    };
  } catch (error) {
    const { response: { data } } = error;
    const { errorCode } = camelize(data);
    console.log(errorCode);

    return {
      success: false,
    };
  };
};

export async function verifyToken({ email, token }) {
  try {
    const payload = snakelize({ email, token });
    const { status, data } = await http.post(API.AUTH.VERIFY_TOKEN, payload);
    if (status === 200) {
      setAuthUser(data);
      return {
        success: true
      };
    }
    return {
      success: false
    };
  } catch (error) {
    const { response: { data } } = error;
    const { errorCode } = camelize(data);

    if (errorCode && errorCode !== 'INVALID_RESET_TOKEN_OR_EXPIRED') {
      console.log(errorCode);
    }
    return {
      success: false
    };
  };
};
