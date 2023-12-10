import { FontCSS, ResetCSS, theme } from '@chitchat/styles';
import { css, Global } from '@emotion/react';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: WantedSansVariable;
    font-weight: normal;
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray900};
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={ResetCSS} />
      <Global styles={FontCSS} />
      <Global styles={globalStyle} />
    </>
  );
};
