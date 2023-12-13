import styled from '@emotion/styled';

import { BottomSheet, type BottomSheetProps as LoginBottomSheetProps } from '../common/BottomSheet';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';

const LoginBottomSheet = ({ isShowing, onClickOutside }: LoginBottomSheetProps) => {
  return (
    <BottomSheet isShowing={isShowing} onClickOutside={onClickOutside}>
      <StyledLoginBottomSheetHeader>
        <span style={{ width: '24px', height: '24px' }} />
        <Text color="white" styleType="body1">
          로그인
        </Text>
        <Icon onClick={onClickOutside} type="close" size={24} cursor="pointer" />
      </StyledLoginBottomSheetHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        <StyledGoogleLoginButton>
          <Icon
            type="google"
            size={32}
            cursor="pointer"
            style={{ position: 'absolute', left: '12px' }}
          />
          <Text color="gray700" styleType="h4">
            구글 로그인
          </Text>
        </StyledGoogleLoginButton>
        <StyledKakaoLoginButton>
          <Icon
            type="kakao"
            size={32}
            cursor="pointer"
            style={{ position: 'absolute', left: '12px' }}
          />
          <Text color="gray700" styleType="h4">
            카카오 로그인
          </Text>
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
