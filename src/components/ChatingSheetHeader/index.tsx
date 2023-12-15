import { colors } from '@/styles';
import styled from '@emotion/styled';

import { Text } from '../common';
import { PeopleIcon } from '../common/Icons';

type ChatingSheetHeaderProps = {
  title: string;
  userOfNumber: number;
};

export const ChatingSheetHeader = ({ title, userOfNumber }: ChatingSheetHeaderProps) => {
  return (
    <StyledChatingSheetHeader>
      <StyledHandle />
      <StyledChatingSheetHeaderContent>
        <Text
          color="white"
          styleType="h4"
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            wordBreak: 'break-word',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Text>
        <ChatUserCounter>
          <PeopleIcon color={colors.gray400} width={20} height={20} />
          <Text color="gray400" styleType="p2">
            {userOfNumber}
          </Text>
        </ChatUserCounter>
      </StyledChatingSheetHeaderContent>
    </StyledChatingSheetHeader>
  );
};

const StyledChatingSheetHeader = styled.div`
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  width: 100%;
  max-width: 480px;
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
  justify-content: space-between;
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
