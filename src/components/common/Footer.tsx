import {
  SellerFooter,
  InnerFooter,
  FooterLinkList,
  FooterLinkItem,
  FooterLink,
  FooterDescription,
  FooterInfoSection,
  FooterInfoItem,
  FooterInfoLabel,
  FooterInfoValue,
  FooterAddress,
  FooterCopyright,
  NaverLogo,
  SpecialLink,
  CertificationMark,
} from "./FooterStyled";

export default function Footer() {
  return (
    <SellerFooter>
      <InnerFooter>
        {/* 상단 링크 메뉴 */}
        <FooterLinkList>
          <FooterLinkItem>
            <FooterLink href="#이용약관">이용약관</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#전자금융거래이용약관">
              전자금융거래 이용약관
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#개인정보처리방침">개인정보 처리방침</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#청소년보호정책">청소년 보호정책</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#책임의한계와법적고지">
              책임의 한계와 법적고지
            </FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterLink href="#안전거래가이드">안전거래가이드</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <SpecialLink href="#고객센터">고객센터</SpecialLink>
          </FooterLinkItem>
        </FooterLinkList>

        {/* 설명 텍스트 */}
        <FooterDescription>
          네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
          상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
        </FooterDescription>
        <FooterDescription>
          모든 판매자가 구매자의 안전에 대하여 당사는 곤여하지 않기 때문에
          거래에 대하여는 책임을 지지 않습니다.
        </FooterDescription>

        {/* 사업자 정보 */}
        <FooterInfoSection>
          <FooterInfoItem>
            <FooterInfoLabel>사업자등록번호:</FooterInfoLabel>
            <FooterInfoValue>220-81-62517</FooterInfoValue>
          </FooterInfoItem>
          <FooterInfoItem>
            <FooterInfoLabel>통신판매업신고번호:</FooterInfoLabel>
            <FooterInfoValue>제2006-경기성남-0692호</FooterInfoValue>
          </FooterInfoItem>
          <FooterInfoItem>
            <FooterInfoLabel>대표이사:</FooterInfoLabel>
            <FooterInfoValue>최수연</FooterInfoValue>
          </FooterInfoItem>
          <FooterInfoItem>
            <SpecialLink href="#사업자정보확인">사업자정보확인</SpecialLink>
          </FooterInfoItem>
        </FooterInfoSection>

        {/* 주소 정보 */}
        <FooterAddress>
          <FooterInfoItem>
            <FooterInfoLabel>주소:</FooterInfoLabel>
            <FooterInfoValue>
              경기도 성남시 분당구 정자일로 95, NAVER 1784, 13561
            </FooterInfoValue>
          </FooterInfoItem>
          <FooterInfoItem>
            <FooterInfoLabel>전화문의:</FooterInfoLabel>
            <FooterInfoValue>(전화 전 클릭)</FooterInfoValue>
          </FooterInfoItem>
        </FooterAddress>

        {/* 저작권 정보 */}
        <FooterCopyright>
          <NaverLogo>NAVER</NaverLogo>
          <span>Copyright © NAVER Corp. All rights reserved.</span>
        </FooterCopyright>
      </InnerFooter>
    </SellerFooter>
  );
}
