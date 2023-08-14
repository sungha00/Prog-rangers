/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  ButtonStyle,
  innerPageStyle,
  pageStyle,
  galleryContainerStyle,
} from '../styles/MainPage';
import Gallery from '../components/Home/Gallery';

const mockProblems = ['숫자 비교하기', '두 수의 곱', '두 수의 차'];
const mockSolutions = ['숫자 비교하기', '두 수의 곱', '두 수의 차'];

export default function Home() {
  return (
    <div css={pageStyle}>
      <div css={innerPageStyle}>
        <button css={ButtonStyle}>리뷰 쓰러 갈래요</button>
        <div css={galleryContainerStyle}>
          <Gallery title="추천풀이" Items={mockSolutions} />
          <Gallery title="많이 푼 문제" Items={mockProblems} />
        </div>
      </div>
    </div>
  );
}
