import styled from '@emotion/styled';

import ChatingSheetHeader from './ChatingSheetHeader';

const ChatingSheet = () => {
  return (
    <StyledChatingSheet>
      <ChatingSheetHeader />
    </StyledChatingSheet>
  );
};

export default ChatingSheet;

const StyledChatingSheet = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 480px;
  width: 100%;
`;
