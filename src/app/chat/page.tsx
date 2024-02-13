'use client';

import { MainHeader } from '@/components/common';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const ChatPage = () => {
  return (
    <StyledChatPage>
      <MainHeader />

      <StyledSwiper>
        <SwiperSlide>메인 페이지</SwiperSlide>
        <SwiperSlide>
          <StyledSwiper
            onSlideNextTransitionEnd={swiper => {
              swiper.slideTo(0, 0, false);
            }}
          >
            <SwiperSlide>채팅 페이지</SwiperSlide>
            <SwiperSlide>애니메이션용 페이지</SwiperSlide>
          </StyledSwiper>
        </SwiperSlide>
      </StyledSwiper>
    </StyledChatPage>
  );
};

export default ChatPage;

const StyledChatPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`;
