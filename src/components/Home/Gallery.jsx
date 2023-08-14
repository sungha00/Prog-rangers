import React from 'react';
/** @jsxImportSource @emotion/react */
import {
  HeadingStyle,
  textStyle,
  codeBlockStyle,
  galleryStyle,
} from '../../styles/MainPage';

export default function Gallery({ title, Items }) {
  return (
    <section>
      <h3 css={HeadingStyle}>{title}</h3>
      <ul css={galleryStyle}>
        {Items.map((item) => (
          <li key={item}>
            <p css={textStyle}>{item}</p>
            <div css={codeBlockStyle}></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
