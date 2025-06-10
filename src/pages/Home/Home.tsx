import { useState } from "react";
import {
  HomeWrapper,
  HomeTopBanner,
  HomeContainer,
  HomeDelivery,
  HomeMoney,
  HomeCancel,
  HomeDelay,
  HomeNoComment,
  HomeProduct,
  HomeStoreCheck,
  HomeTalkTalkStatus,
  HomeReviewRecent,
  HomeSellerGrade,
  HomeSellerPrice,
  HomeSellerTotal,
  HomeDeliveryInner,
  HomeDeliveryInnerTop,
  HomeDeliveryInnerCenter,
  HomeDeliveryInnerBottom,
  HomeMoneyInnerTop,
  HomeMoneyInnerCenter,
  BottomItem,
  DeliveryItem,
  DeliveryIcon,
  DeliveryLabel,
  DeliveryCount,
  Divider,
  DeliveryItemWrap,
  MoneySection,
  MoneySectionHeader,
  InfoIcon,
  MoneyAmount,
  DateInfo,
  HomeMoneyInnerBottom,
  EmergencyItem,
  CardHeader,
  TimeStamp,
  RefreshIcon,
  CardContent,
  CardItem,
  StoreCheckHeader,
  StoreChartIcon,
  CheckExpandButton,
  StoreCheckContent,
  StoreContentInner,
  CheckTopWrap,
  DateRange,
  StatusContent,
  StatusBadge,
  StatusContentWrap,
  StatusItem,
  MoreLink,
  ReviewContent,
  ReviewItem,
  UpdateInfo,
  GradeContent,
  GradeSection,
  GradeBadge,
  ServiceSection,
  ServiceBadge,
  ItemTextLeftWrap,
  ItemTextRightWrap,
  SectionHeader,
  EmptyChartArea,
  PerformanceContent,
  PerformanceGrid,
  PerformanceItem,
  ItemHeader,
  ItemValue,
  SecondRowGrid,
  SecondRowItem,
  HomeLeftBanner,
  HomeRightBanner,
  HomeLastLine,
  LastMenuItem,
  LastMenuText,
  LastDivider,
} from "./HomeStyled";

import ChartIcon from "/Home/chart-filled_white_lg.svg";
import CompletedIcon from "/Home/completed_white_sm.svg";
import ConfirmationIcon from "/Home/confirmation_white_sm.svg";
import NewOrderIcon from "/Home/new-order_white_sm.svg";
import DeliveryReadyIcon from "/Home/ready_white_sm.svg";
import DeliveryActionIcon from "/Home/shipping_white_sm.svg";

import BannerLeft from "/Home/bottom-banner.jpg";
import BannerRight from "/Home/bottom-banner2.png";

import LastChat from "/Home/chat-fill.svg";
import LastManual from "/Home/list-fill.svg";
import LastTip from "/Home/post-fill.svg";
import LastShop from "/Home/shop-fill.svg";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeTopBanner>
          <span>[일반]</span>
          <p>
            발송기간 경과로 인한 발주해제 처리된 주문의 취소요청 자동 취소완료
            처리 안내
          </p>
          <small>2025.06.01</small>
        </HomeTopBanner>
        <HomeDelivery>
          <HomeDeliveryInner>
            <HomeDeliveryInnerTop>
              <h4>주문 · 배송</h4>
              <small>13:03 기준</small>
            </HomeDeliveryInnerTop>

            <HomeDeliveryInnerCenter>
              <DeliveryItem>
                <DeliveryIcon>
                  <img src={NewOrderIcon} alt="" />
                </DeliveryIcon>
                <DeliveryItemWrap>
                  <DeliveryLabel>신규주문</DeliveryLabel>
                  <DeliveryCount>0</DeliveryCount>
                </DeliveryItemWrap>
              </DeliveryItem>

              <DeliveryItem>
                <DeliveryIcon>
                  <img src={DeliveryReadyIcon} alt="" />
                </DeliveryIcon>
                <DeliveryItemWrap>
                  <DeliveryLabel>배송주문</DeliveryLabel>
                  <DeliveryCount>27</DeliveryCount>
                </DeliveryItemWrap>
              </DeliveryItem>

              <DeliveryItem>
                <DeliveryIcon>
                  <img src={DeliveryActionIcon} alt="" />
                </DeliveryIcon>
                <DeliveryItemWrap>
                  <DeliveryLabel>배송중</DeliveryLabel>
                  <DeliveryCount>24</DeliveryCount>
                </DeliveryItemWrap>
              </DeliveryItem>

              <DeliveryItem>
                <DeliveryIcon>
                  <img src={CompletedIcon} alt="" />
                </DeliveryIcon>
                <DeliveryItemWrap>
                  <DeliveryLabel>배송완료</DeliveryLabel>
                  <DeliveryCount>34</DeliveryCount>
                </DeliveryItemWrap>
              </DeliveryItem>

              <DeliveryItem>
                <DeliveryIcon>
                  <img src={ConfirmationIcon} alt="" />
                </DeliveryIcon>
                <DeliveryItemWrap>
                  <DeliveryLabel>구매확정</DeliveryLabel>
                  <DeliveryCount>30</DeliveryCount>
                </DeliveryItemWrap>
              </DeliveryItem>
            </HomeDeliveryInnerCenter>

            <HomeDeliveryInnerBottom>
              <BottomItem>
                <span>오늘출발</span>
                <span>0</span>
              </BottomItem>

              <Divider>|</Divider>

              <BottomItem>
                <span>예약구매</span>
                <span>0</span>
              </BottomItem>

              <Divider>|</Divider>

              <BottomItem>
                <span>정기구독</span>
                <span>0</span>
              </BottomItem>

              <Divider>|</Divider>

              <BottomItem>
                <span>도착보장</span>
                <span>0</span>
              </BottomItem>
            </HomeDeliveryInnerBottom>
          </HomeDeliveryInner>
        </HomeDelivery>
        <HomeMoney>
          <HomeMoneyInnerTop>
            <h4>정산</h4>
            <small>14:38 기준</small>
          </HomeMoneyInnerTop>

          <HomeMoneyInnerCenter>
            <MoneySection>
              <MoneySectionHeader>
                <span>오늘정산</span>
                <InfoIcon>ⓘ</InfoIcon>
              </MoneySectionHeader>
              <MoneyAmount>
                <span className="label">정산금액</span>
                <span className="amount">
                  42,528<span className="unit">원</span>
                </span>
              </MoneyAmount>
            </MoneySection>

            <MoneySection>
              <MoneySectionHeader>
                <span>정산예정</span>
                <InfoIcon>ⓘ</InfoIcon>
                <DateInfo>06. 11. 예정</DateInfo>
              </MoneySectionHeader>
              <MoneyAmount>
                <span className="label">정산금액</span>
                <span className="amount">
                  89,127<span className="unit">원</span>
                </span>
              </MoneyAmount>
            </MoneySection>
          </HomeMoneyInnerCenter>

          <HomeMoneyInnerBottom>
            <EmergencyItem>
              <span>비즈월렛</span>
              <span className="amount">
                0<span className="unit">원</span>
              </span>
            </EmergencyItem>
          </HomeMoneyInnerBottom>
        </HomeMoney>
        <HomeCancel>
          <CardHeader>
            <h4>취소 · 반품 · 교환</h4>
            <InfoIcon>ⓘ</InfoIcon>
            <TimeStamp>14:38 기준</TimeStamp>
            <RefreshIcon>↻</RefreshIcon>
          </CardHeader>

          <CardContent>
            <CardItem>
              <span>취소요청</span>
              <span className="number">1</span>
            </CardItem>
            <CardItem>
              <span>반품요청</span>
              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>교환요청</span>
              <span className="number">0</span>
            </CardItem>
          </CardContent>
        </HomeCancel>

        <HomeDelay>
          <CardHeader>
            <h4>판매지연</h4>

            <TimeStamp>14:38 기준</TimeStamp>
            <RefreshIcon>↻</RefreshIcon>
          </CardHeader>

          <CardContent>
            <CardItem>
              <span>불출지연</span>
              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>취소지연</span>
              <span className="number">1</span>
            </CardItem>
            <CardItem>
              <span>반품지연</span>
              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>교환지연</span>
              <span className="number">0</span>
            </CardItem>
          </CardContent>
        </HomeDelay>

        <HomeNoComment>
          <CardHeader>
            <h4>미답변 문의</h4>

            <TimeStamp>14:38 기준</TimeStamp>
            <RefreshIcon>↻</RefreshIcon>
          </CardHeader>

          <CardContent>
            <CardItem>
              <span>상품 Q&A</span>

              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>주문교객문의</span>

              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>톡톡문의</span>

              <span className="number">0</span>
            </CardItem>
          </CardContent>
        </HomeNoComment>

        <HomeProduct>
          <CardHeader>
            <h4>상품</h4>

            <TimeStamp>14:38 기준</TimeStamp>
            <RefreshIcon>↻</RefreshIcon>
          </CardHeader>

          <CardContent>
            <CardItem>
              <span>판매중 상품</span>
              <span className="number">159</span>
            </CardItem>
            <CardItem>
              <span>품절 상품</span>
              <span className="number">0</span>
            </CardItem>
            <CardItem>
              <span>수정요청 상품</span>
              <span className="number">1</span>
            </CardItem>
          </CardContent>
        </HomeProduct>
        <HomeStoreCheck>
          <StoreCheckHeader onClick={toggleExpand}>
            <CheckTopWrap>
              <StoreChartIcon>
                <img src={ChartIcon} alt="chart icon" />
              </StoreChartIcon>
              <span>돈키니쿠님, 스토어 체크 결과를 확인하세요</span>
            </CheckTopWrap>
            <CheckExpandButton isExpanded={isExpanded}>▼</CheckExpandButton>
          </StoreCheckHeader>

          <StoreCheckContent isExpanded={isExpanded}>
            <StoreContentInner>
              <p>스토어 체크 결과가 여기에 표시됩니다.</p>
              <p>다양한 체크 항목들과 결과를 확인할 수 있습니다.</p>
              <div
                style={{
                  height: "400px",
                  background: "#f8f9fa",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <h3>체크 결과 상세</h3>
                <ul>
                  <li>상품 정보 완성도: 85%</li>
                  <li>배송 설정 상태: 완료</li>
                  <li>정산 정보 등록: 완료</li>
                  <li>고객 응대 현황: 양호</li>
                </ul>
              </div>
            </StoreContentInner>
          </StoreCheckContent>
        </HomeStoreCheck>
        <HomeTalkTalkStatus>
          <CardHeader>
            <h4>톡톡 응대 현황</h4>
            <InfoIcon>ⓘ</InfoIcon>
            <DateRange>최근 1주일 통계(2025.06.03~2025.06.09)</DateRange>
          </CardHeader>

          <StatusContent>
            <StatusBadge className="complete">
              <span>상담 응답률</span>
              <span className="percentage">100%</span>
            </StatusBadge>

            <StatusContentWrap>
              <ItemTextLeftWrap>
                <StatusItem>
                  <span className="label">상담 수</span>
                  <span className="value">2건</span>
                </StatusItem>
                <StatusItem>
                  <span className="label">봇 응대 / 상담률</span>
                  <span className="value">-건 / -%</span>
                </StatusItem>
              </ItemTextLeftWrap>
              <ItemTextRightWrap>
                <StatusItem>
                  <span className="label">상담이 들어오는 시간대</span>
                  <span className="value">3시</span>
                </StatusItem>
                <StatusItem>
                  <span className="label">가장 많은 상담 분야</span>
                  <span className="value">평균배송일</span>
                </StatusItem>
              </ItemTextRightWrap>
            </StatusContentWrap>
          </StatusContent>
          <MoreLink>톡톡 관리하기 &gt;</MoreLink>
        </HomeTalkTalkStatus>

        <HomeReviewRecent>
          <CardHeader>
            <h4>리뷰 현황</h4>
            <InfoIcon>ⓘ</InfoIcon>
            <TimeStamp>15:00 기준</TimeStamp>
            <RefreshIcon>↻</RefreshIcon>
          </CardHeader>

          <ReviewContent>
            <ReviewItem>
              <span>새로 작성된 리뷰</span>
              <span className="count">10</span>
            </ReviewItem>
            <ReviewItem>
              <span>평점 낮은 리뷰</span>
              <span className="count">0</span>
            </ReviewItem>
            <ReviewItem>
              <span>발표 예정 리뷰 이벤트</span>
              <span className="count">0</span>
            </ReviewItem>
          </ReviewContent>
          <MoreLink>리뷰 관리하기 &gt;</MoreLink>
        </HomeReviewRecent>

        <HomeSellerGrade>
          <CardHeader>
            <h4>판매자 등급</h4>
            <UpdateInfo>매월 2일 업데이트</UpdateInfo>
          </CardHeader>

          <GradeContent>
            <GradeSection>
              <span className="label">판매자 등급</span>
              <InfoIcon>ⓘ</InfoIcon>
            </GradeSection>
            <GradeBadge className="excellent">
              <span>6월 판매자 등급</span>
              <span className="grade">씨앗</span>
            </GradeBadge>

            <ServiceSection>
              <span className="label">굿서비스</span>
              <InfoIcon>ⓘ</InfoIcon>
            </ServiceSection>
            <ServiceBadge className="normal">
              <span>6월 굿서비스 기준</span>
              <span className="status">일반족</span>
            </ServiceBadge>

            <MoreLink>판매자 등급 자세히 보기 &gt;</MoreLink>
          </GradeContent>
        </HomeSellerGrade>
        <HomeSellerPrice>
          <SectionHeader>
            <h4>결제금액</h4>
            <DateInfo>매일 오전 8시 업데이트</DateInfo>
          </SectionHeader>

          <EmptyChartArea>차트 영역 (빈 공간)</EmptyChartArea>
        </HomeSellerPrice>

        {/* 판매 성과 섹션 */}
        <HomeSellerTotal>
          <SectionHeader>
            <h4>판매 성과</h4>
            <DateInfo>매일 오전 8시 업데이트</DateInfo>
          </SectionHeader>

          <PerformanceContent>
            <PerformanceGrid>
              <PerformanceItem>
                <ItemHeader>
                  <span className="label">어제 유입수</span>
                  <span className="change positive">
                    지난주 (월) 대비 +88.6%
                  </span>
                </ItemHeader>
                <ItemValue>
                  <span className="number">264</span>
                  <span className="unit">건</span>
                </ItemValue>
              </PerformanceItem>

              <PerformanceItem>
                <ItemHeader>
                  <span className="label">어제 유입당 결제율</span>
                  <span className="change negative">
                    지난주 (월) 대비 -1.05%
                  </span>
                </ItemHeader>
                <ItemValue>
                  <span className="number">0.76</span>
                  <span className="unit">%</span>
                </ItemValue>
              </PerformanceItem>
            </PerformanceGrid>

            <SecondRowGrid>
              <SecondRowItem>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="label">어제 최고 유입 채널</span>
                  <span className="label-description">인스타그램</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <span className="value">62.9</span>
                  <span className="percent">%</span>
                </div>
              </SecondRowItem>

              <SecondRowItem>
                <div className="label-description-wrapper">
                  <span className="label">어제 최고 결제 기여 채널</span>
                  <span className="label-description">네이버가격비교-검색</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <span className="value">100</span>
                  <span className="percent">%</span>
                </div>
              </SecondRowItem>
            </SecondRowGrid>
          </PerformanceContent>
          <MoreLink>판매성과 자세히 보기 &gt;</MoreLink>
        </HomeSellerTotal>

        <HomeLeftBanner>
          <img src={BannerLeft} alt="" />
        </HomeLeftBanner>

        <HomeRightBanner>
          <img src={BannerRight} alt="" />
        </HomeRightBanner>

        <HomeLastLine>
          <LastMenuItem>
            <img src={LastManual} alt="" />
            <LastMenuText>스마트스토어센터 매뉴얼</LastMenuText>
          </LastMenuItem>

          <LastDivider />

          <LastMenuItem>
            <img src={LastTip} alt="" />
            <LastMenuText>판매 TIP</LastMenuText>
          </LastMenuItem>

          <LastDivider />

          <LastMenuItem>
            <img src={LastShop} alt="" />
            <LastMenuText>쇼핑파트너센터</LastMenuText>
          </LastMenuItem>

          <LastDivider />

          <LastMenuItem>
            <img src={LastChat} alt="" />
            <LastMenuText>통통파트너센터</LastMenuText>
          </LastMenuItem>
        </HomeLastLine>
      </HomeContainer>
    </HomeWrapper>
  );
}
