'use client';

import ExternalButton from '@/app/_components/button/ExternalButton';
import ExternalTextField from '@/app/_components/textField/ExternalTextField';
import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(
    () => {
      if (variant === 'LOGIN') {
        setVariant('REGISTER');
      } else {
        setVariant('LOGIN');
      }
    },
    [variant],
  );

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      
    }

    if (variant === 'LOGIN') {

    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <form
          className="
            space-y-6
          "
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <ExternalTextField
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}
          <ExternalTextField
              id="email"
              label="Email address"
              type="email"
              register={register}
              errors={errors}
            />
            <ExternalTextField
              id="password"
              label="Password"
              type="password"
              register={register}
              errors={errors}
            />
            <div>
              <ExternalButton
                disabled={isLoading}
                fullWidth
                type="submit"
              >
                {variant === 'LOGIN' ? 'Sign In' : 'Register'}
              </ExternalButton>
            </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div
              className="
                relative
                flex
                justify-center
                text-sm
              "
            >
              <span
                className="
                  bg-white
                  px-2
                  text-gray-500
                "
              >
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;