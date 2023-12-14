import { colors } from '@/styles';
import styled from '@emotion/styled';

import { Text } from '../common';
import { PeopleIcon } from '../common/Icons';

const ChatingSheetHeader = () => {
  return (
    <StyledChatingSheetHeader>
      <StyledHandle />
      <StyledChatingSheetHeaderContent>
        <Text color="white" styleType="h4">
          요즘 맨유 맨날 져서 감스트 리액션 보는 맛으로 사는 맹구면 개추 ㅋㅋㅋ
        </Text>
        <ChatUserCounter>
          <PeopleIcon color={colors.gray400} width={20} height={20} />
          <Text color="gray400" styleType="p2">
            8
          </Text>
        </ChatUserCounter>
      </StyledChatingSheetHeaderContent>
    </StyledChatingSheetHeader>
  );
};

export default ChatingSheetHeader;

const StyledChatingSheetHeader = styled.div`
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  width: 100%;
  padding-top: 12px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const StyledHandle = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.gray600};
  margin: 0 auto;
`;

const StyledChatingSheetHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px 16px;
  margin-top: 14px;
`;

const ChatUserCounter = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0px 10px 0px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;
