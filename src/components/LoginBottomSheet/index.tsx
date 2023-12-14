import Image from 'next/image';
import styled from '@emotion/styled';

import {
  BottomSheet,
  type BottomSheetProps as LoginBottomSheetProps,
  Stack,
  Text,
} from '../common';
import { CloseIcon } from '../common/Icons';

const LoginBottomSheet = ({ isShowing, onClickOutside }: LoginBottomSheetProps) => {
  return (
    <BottomSheet isShowing={isShowing} onClickOutside={onClickOutside}>
      <StyledLoginBottomSheetHeader>
        <span style={{ width: '32px', height: '32px' }} />
        <Text color="white" styleType="h4">
          로그인
        </Text>
        <CloseIcon onClick={onClickOutside} width={32} height={32} cursor="pointer" />
      </StyledLoginBottomSheetHeader>
      <Stack direction="vertical" spacing={12} style={{ width: '100%' }}>
        <StyledGoogleLoginButton>
          <Image
            src="/icons/google.svg"
            width={32}
            height={32}
            style={{ position: 'absolute', left: 12 }}
            alt="Google Icon"
          />
          <Text color="gray700" styleType="h4">
            구글 로그인
          </Text>
        </StyledGoogleLoginButton>
        <StyledKakaoLoginButton>
          <Image
            src="/icons/kakao.svg"
            width={32}
            height={32}
            style={{ position: 'absolute', left: 12 }}
            alt="Kakao Icon"
          />
          <Text color="gray700" styleType="h4">
            카카오 로그인
          </Text>
        </StyledKakaoLoginButton>
      </Stack>
    </BottomSheet>
  );
};

export default LoginBottomSheet;

const StyledLoginBottomSheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 60px;
  width: 100%;
`;

const StyledGoogleLoginButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const StyledKakaoLoginButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray900};
  background-color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
`;
