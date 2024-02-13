import { post } from '@/libs/api/client';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type GoogleAuthMutationResponse = {
  accessToken: string;
  refreshToken: string;
};

export const GOOGLE_AUTH_MUTATION_KEY = 'googleAuth';

export const useGoogleAuthMutation = (
  options?: UseMutationOptions<GoogleAuthMutationResponse, AxiosError, string>
) => {
  return useMutation({
    mutationKey: [GOOGLE_AUTH_MUTATION_KEY],
    mutationFn: (code: string) => post<GoogleAuthMutationResponse>('/google', { code }),
    ...options,
  });
};
