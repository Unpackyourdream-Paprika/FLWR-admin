import styled from "styled-components";

// 메인 푸터 컨테이너
export const SellerFooter = styled.footer`
  padding-left: 210px;
  transition: all 0.4s;
  background-color: #f8f9fa;
  width: 100%;
`;

// 푸터 내부 컨테이너
export const InnerFooter = styled.div`
  padding: 35px 0 40px;
  border-top: 1px solid #dddfe0;
  font-size: 12px;
  color: #303236;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

// 푸터 링크 목록
export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// 푸터 링크 아이템
export const FooterLinkItem = styled.li`
  position: relative;

  &:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: -11px;
    color: #dddfe0;
  }
`;

// 푸터 링크
export const FooterLink = styled.a`
  color: #303236;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #00c73c;
    text-decoration: underline;
  }
`;

// 푸터 설명 텍스트
export const FooterDescription = styled.p`
  margin: 10px 0;
  line-height: 1.6;
  color: #666;
`;

// 푸터 정보 섹션
export const FooterInfoSection = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// 푸터 정보 아이템
export const FooterInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

// 푸터 정보 라벨
export const FooterInfoLabel = styled.span`
  font-weight: 600;
  color: #303236;
`;

// 푸터 정보 값
export const FooterInfoValue = styled.span`
  color: #666;
`;

// 주소 정보
export const FooterAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  line-height: 1.5;
`;

// 네이버 로고 및 저작권
export const FooterCopyright = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #999;
`;

// 네이버 로고
export const NaverLogo = styled.span`
  color: #00c73c;
  font-weight: bold;
  font-size: 14px;
`;

// 특수 링크 (고객센터 등)
export const SpecialLink = styled.a`
  color: #00c73c;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

// 녹색 인증 마크
export const CertificationMark = styled.span`
  background-color: #00c73c;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
`;
