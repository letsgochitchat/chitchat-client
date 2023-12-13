import Image from 'next/image';
import { colors } from '@/styles';
import styled from '@emotion/styled';

import { BottomSheet, type BottomSheetProps as LoginBottomSheetProps } from '../common/BottomSheet';
import { IconClose } from '../common/Icons';

const LoginBottomSheet = ({ isShowing, onClickOutside }: LoginBottomSheetProps) => {
  return (
    <BottomSheet isShowing={isShowing} onClickOutside={onClickOutside}>
      <StyledLoginBottomSheetHeader>
        <span style={{ width: '24px', height: '24px' }} />
        {/* TODO: Text 컴포넌트 개발하면 변경 */}
        <span>로그인</span>
        <IconClose onClick={onClickOutside} color={colors.white} width="24px" height="24px" />
      </StyledLoginBottomSheetHeader>
      {/* TODO: Flex 컴포넌트 개발하면 변경 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        <StyledGoogleLoginButton>
          <Image
            src="/svg/google_icon.svg"
            width={32}
            height={32}
            style={{ position: 'absolute', left: '12px' }}
            alt="Google Icon"
          />
          {/* TODO: Text 컴포넌트 개발하면 변경 */}
          <span>구글 로그인</span>
        </StyledGoogleLoginButton>
        <StyledKakaoLoginButton>
          <Image
            src="/svg/kakao_icon.svg"
            width={32}
            height={32}
            style={{ position: 'absolute', left: '12px' }}
            alt="Kakao Icon"
          />
          {/* TODO: Text 컴포넌트 개발하면 변경 */}
          <span>카카오 로그인</span>
        </StyledKakaoLoginButton>
      </div>
    </BottomSheet>
  );
};

export default LoginBottomSheet;

const StyledLoginBottomSheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
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
`;
