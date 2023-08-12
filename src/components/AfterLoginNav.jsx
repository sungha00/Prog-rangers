import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { navStyle, linkDefault } from '../styles/headerStyle';

const AfterLoginNav = () => {
  return (
    <div className="AfterLoginNav" css={navStyle}>
      <Link to="problems" css={linkDefault}>
        리뷰 보러가기
      </Link>
      <Link to="registerReview" css={linkDefault}>
        리뷰 쓰러가기
      </Link>
      <Link to="mypage" css={linkDefault}>
        마이페이지
      </Link>
    </div>
  );
};

export default AfterLoginNav;
