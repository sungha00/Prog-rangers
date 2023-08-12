import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { navStyle, linkDefault } from '../styles/headerStyle';

const BeforeLoginNav = () => {
  return (
    <div className="BeforeLoginNav" css={navStyle}>
      <Link to="/problems" css={linkDefault}>
        리뷰 보러가기
      </Link>
      <Link to="signIn" css={linkDefault}>
        로그인
      </Link>
      <Link to="signUp" css={linkDefault}>
        회원가입
      </Link>
    </div>
  );
};

export default BeforeLoginNav;
