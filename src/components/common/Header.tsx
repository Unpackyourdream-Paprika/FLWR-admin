import {
  HeaderWrapper,
  PcHeaderInner,
  PcHeaderLeftContent,
  PcHeaderRightContent,
  PcHeaderLeftUlWrap,
  PcHeaderLeftLi,
  PcHeaderRightLi,
  PcHeaderRightLiLogout,
} from "./HeaderStyled";

import logoPc from "/Layout/Header/logo-pc.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <PcHeaderInner>
        <PcHeaderLeftContent>
          <img
            src={logoPc}
            style={{
              width: "140px",
            }}
          />
          <PcHeaderLeftUlWrap>
            <PcHeaderLeftLi>
              <a>쇼핑파트너센터</a>
            </PcHeaderLeftLi>
            <PcHeaderLeftLi>
              <a>커머스솔루션마켓</a>
            </PcHeaderLeftLi>
            <PcHeaderLeftLi>
              <a>네이버광고</a>
            </PcHeaderLeftLi>
          </PcHeaderLeftUlWrap>
        </PcHeaderLeftContent>

        <PcHeaderRightContent>
          <PcHeaderRightLi>
            <a>
              <p>UserEmail</p>
              <span style={{ paddingLeft: "4px" }}>님</span>
              <div>내정보</div>
            </a>
          </PcHeaderRightLi>
          <PcHeaderRightLiLogout>
            <a>로그아웃</a>
          </PcHeaderRightLiLogout>
        </PcHeaderRightContent>
      </PcHeaderInner>
    </HeaderWrapper>
  );
}
