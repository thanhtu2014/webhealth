import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '@/assets/images/logo.svg';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { setAuthUser } from '@/utils/localStorageUtil';
import { ROUTES } from '@/constants';

function LoginContainer() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const mockLogin = (data) => {
    setAuthUser(JSON.stringify(data));
    window.location.href = ROUTES.ROOT_PATH;
  };

  return (
    <div className="h-[90vh] w-screen bg-gray-50 px-[10vw] py-[5vh]">
      <div className="h-[80vh] w-full flex shadow-[0px_0px_10px_rgba(0,0,0,0.35)] overflow-hidden rounded-2xl">
        <div className="hidden sm:block w-2/5 md:w-1/2 bg-gradient-to-bl from-primary-400 to-primary-300 rounded-l-2xl">
          <div className="w-full h-full flex items-center justify-center">
            Something about the brand
          </div>
        </div>
        <div className="w-full sm:w-3/5 md:w-1/2 bg-white rounded-r-2xl px-10 py-16 flex flex-col gap-10">
          <div className="w-full flex flex-col gap-2 justify-center">
            <img src={logo} alt="Healthy Logo" className="h-20 w-auto" />
            <div className="font-roboto text-sm text-center text-gray-500">
              Sign in to your account
            </div>
          </div>
          <form
            onSubmit={handleSubmit(mockLogin)}
            className="w-full flex flex-col gap-5 items-center justify-center"
          >
            <div className="w-full relative">
              <input
                type="text"
                placeholder=""
                {...register('email', {
                  required: 'This field is required',
                })}
                className="w-full h-[52px] px-4 py-2 rounded-[0.5rem] border border-solid border-gray-500 shadow-sm"
              />
              <div className="px-1 left-5 top-[-0.5rem] h-4 absolute bg-white-light flex items-center">
                <div className="font-sans text-base font-normal leading-none">
                  Email
                </div>
              </div>
              {errors.email && (
                <div className="pt-1 text-red-600 text-[12px] font-normal leading-4 tracking-tight">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="w-full relative">
              <input
                type="password"
                placeholder=""
                {...register('password', {
                  required: 'This field is required',
                })}
                className="w-full h-[52px] px-4 py-2 rounded-[0.5rem] border border-solid border-gray-500 shadow-sm"
              />
              <div className="px-1 left-5 top-[-0.5rem] h-4 absolute bg-white-light flex items-center">
                <div className="font-sans text-base font-normal leading-none">
                  Password
                </div>
              </div>
              {errors.password && (
                <div className="pt-1 text-red-600 text-[12px] font-normal leading-4 tracking-tight">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="w-full flex justify-end  cursor-pointer underline decoration-primary-500">
              <div className="text-sm text-primary-500 font-normal font-roboto">
                Forgot your password?
              </div>
            </div>
            <div className="w-full flex justify-center">
              <PrimaryButton
                name="Login"
                buttonType="submit"
                customClass="text-3xl font-medium drop-shadow-[0_12px_12px_rgba(255,165,0,0.35)]"
              />
            </div>
            <div className="w-full flex justify-center gap-2">
              <span className="font-medium text-[16px] leading-6 text-center text-gray-500">
                Don’t have an account?
              </span>
              <span className="cursor-pointer font-bold text-[16px] leading-6 text-center text-primary-500">
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
