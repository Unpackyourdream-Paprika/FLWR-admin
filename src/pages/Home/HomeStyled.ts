import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-left: 26px;
  padding-right: 56px;
  padding-bottom: 100px;
`;

export const HomeTopBanner = styled.div`
  grid-column: span 4;
  width: 100%;
  background: #fff;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;

  span {
    display: inline-block;
    font-size: 10px;
    line-height: 14px;
    padding: 2px 8px;
    color: #fff;
    margin-right: 8px;
    vertical-align: middle;
    background: #1088ed;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 17px;
    opacity: 0.6;
  }

  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    line-height: 17px;
    opacity: 0.6;
    padding-left: 8px;
  }
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const HomeDelivery = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HomeDeliveryInner = styled.div`
  height: calc(100% + 20px);
  display: flex;
  flex-wrap: wrap;
  margin: -10px 0;
  justify-content: space-between;
`;

export const HomeDeliveryInnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  small {
    font-size: 12px;
    color: #999;
  }
`;

export const HomeDeliveryInnerCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  gap: 16px;
`;

// export const HomeDeliveryInnerBottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 16px;
//   padding-top: 12px;
//   border-top: 1px solid #f0f0f0;
// `;

export const DeliveryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const DeliveryItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DeliveryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #00c851;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeliveryLabel = styled.span`
  font-size: 12px;
  color: #666;
  text-align: center;
  white-space: nowrap;
`;

export const DeliveryCount = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const HomeDeliveryInnerBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fafafa;
  padding: 12px 16px;
  border-radius: 4px;
`;

export const BottomItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  span:first-child {
    font-size: 12px;
    color: #666;
  }

  span:last-child {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }
`;

export const Divider = styled.span`
  color: #ddd;
  font-size: 12px;
  margin: 0 8px;
`;

export const HomeMoney = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HomeMoneyInnerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  small {
    font-size: 12px;
    color: #999;
  }
`;

export const HomeMoneyInnerCenter = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

export const MoneySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MoneySectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 13px;
    font-weight: 500;
    color: #333;
  }
`;

export const InfoIcon = styled.span`
  font-size: 12px;
  color: #999;
  cursor: pointer;
`;

export const DateInfo = styled.span`
  font-size: 11px;
  color: #666;
  margin-left: auto;
`;

export const MoneyAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  .label {
    font-size: 11px;
    color: #666;
  }

  .amount {
    font-size: 18px;
    font-weight: 600;
    color: #1088ed;

    .unit {
      font-size: 14px;
      font-weight: normal;
      color: #333;
    }
  }
`;

export const HomeMoneyInnerBottom = styled.div`
  width: 100%;
  padding: 16px 20px;
  /* border-top: 1px solid #f0f0f0; */
  background: #fafafa;
`;

export const EmergencyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 12px;
    color: #666;
  }

  .amount {
    font-size: 14px;
    font-weight: 600;
    color: #333;

    .unit {
      font-size: 12px;
      font-weight: normal;
    }
  }
`;

export const HomeCancel = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HomeDelay = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HomeNoComment = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HomeProduct = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0px;

  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

// export const InfoIcon = styled.span`
//   font-size: 12px;
//   color: #999;
//   cursor: pointer;
// `;

export const TimeStamp = styled.span`
  font-size: 11px;
  color: #999;
  margin-left: auto;
`;

export const RefreshIcon = styled.span`
  font-size: 14px;
  color: #999;
  cursor: pointer;
  margin-left: 4px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  span:first-child {
    text-align: left;
    font-size: 12px;
    color: #666;
    flex: 1;
  }

  .number {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    min-width: 20px;
    text-align: right;
  }

  /* 미답변 문의에서 아이콘이 중간에 있는 경우 처리 */
  ${InfoIcon} {
    flex: none;
  }
`;

export const HomeStoreCheck = styled.div`
  grid-column: span 4;
  width: 100%;
  background: rgb(34, 45, 52);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const StoreCheckHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;

  span {
    color: white;
    font-size: 18px;
    font-weight: 700;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const CheckTopWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StoreChartIcon = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const CheckExpandButton = styled.button<{ isExpanded: boolean }>`
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  outline: none;

  /* 포커스 시에도 아웃라인 제거 */
  &:focus {
    outline: none;
  }

  /* 클릭 시 활성 상태 스타일 */
  &:active {
    outline: none;
  }
`;

export const StoreCheckContent = styled.div<{ isExpanded: boolean }>`
  height: ${(props) => (props.isExpanded ? "500px" : "0px")};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  background: white;
`;

export const StoreContentInner = styled.div`
  padding: 20px;
  height: 100%;

  p {
    margin: 0 0 16px 0;
    color: #666;
    font-size: 14px;
  }

  h3 {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding-left: 20px;

    li {
      margin-bottom: 8px;
      color: #555;
      font-size: 14px;
    }
  }
`;

export const HomeTalkTalkStatus = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HomeReviewRecent = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HomeSellerGrade = styled.div`
  grid-column: span 1;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HomeSellerPrice = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const HomeSellerTotal = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const DateRange = styled.span`
  font-size: 11px;
  color: #999;
  margin-left: auto;
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* flex: 1; */
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;

  &.complete {
    background: #e8f5e8;
    border: 1px solid #4caf50;
  }

  span:first-child {
    font-size: 12px;
    color: #333;
  }

  .percentage {
    font-size: 14px;
    font-weight: 600;
    color: #4caf50;
  }
`;

export const StatusContentWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const ItemTextLeftWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 16px;
  gap: 8px;
`;

export const ItemTextRightWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  gap: 8px;
`;

export const StatusItem = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: space-between;

  .label {
    font-size: 12px;
    color: #666;
  }

  .value {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
`;

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0px;
  flex: 1;
`;

export const ReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 12px;
    color: #666;
  }

  .count {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

export const GradeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GradeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .label {
    font-size: 12px;
    color: #666;
  }
`;

export const ServiceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .label {
    font-size: 12px;
    color: #666;
  }
`;

export const GradeBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 4px;

  &.excellent {
    background: #e3f2fd;
  }

  span:first-child {
    font-size: 11px;
    color: #666;
  }

  .grade {
    font-size: 14px;
    font-weight: 600;
    color: #1976d2;
  }
`;

export const ServiceBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 4px;

  &.normal {
    background: #fff3e0;
  }

  span:first-child {
    font-size: 11px;
    color: #666;
  }

  .status {
    font-size: 14px;
    font-weight: 600;
    color: #f57c00;
  }
`;

export const MoreLink = styled.a`
  font-size: 12px;
  color: #666;
  text-decoration: none;
  cursor: pointer;
  padding-top: 16px;
  margin-top: auto;

  &:hover {
    color: #333;
  }
`;

export const UpdateInfo = styled.span`
  font-size: 11px;
  color: #999;
  margin-left: auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
`;

export const EmptyChartArea = styled.div`
  width: 100%;
  height: 200px;
  background: #fafafa;
  border: 1px dashed #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
`;

export const PerformanceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const PerformanceItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-right: 20px;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: space-between; */

  .label {
    font-size: 13px;
    color: #000;
    font-weight: 700;
  }

  .change {
    font-size: 11px;

    &.positive {
      color: #ff4444;
    }

    &.negative {
      color: #4080ff;
    }
  }
`;

export const ItemValue = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;

  .number {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .unit {
    font-size: 14px;
    color: #666;
  }
`;

export const ItemSubtitle = styled.div`
  font-size: 11px;
  color: #999;
`;

export const SecondRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const SecondRowItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-right: 20px;
  align-items: flex-start;
  align-items: flex-start;
  justify-content: space-between;

  .label {
    font-size: 13px;
    color: #000;
    font-weight: 700;
    text-align: left;
  }

  .value {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .subtitle {
    font-size: 11px;
    color: #999;
  }

  .label-description {
    color: #00c444;
    text-align: left;
    font-size: 12px;
  }

  .percent {
    font-size: 12px;
  }

  .label-description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const HomeLeftBanner = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  aspect-ratio: 16/5;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const HomeRightBanner = styled.div`
  grid-column: span 2;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  aspect-ratio: 16/5;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const HomeLastLine = styled.div`
  grid-column: span 4;
  width: 100%;
  background: #fff;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LastMenuItem = styled.div`
  width: calc(100% / 4);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const MenuIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 아이콘 텍스트 스타일 */
  font-size: 14px;
  color: #fff;
  font-weight: 500;
`;

export const LastMenuText = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

export const LastDivider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
`;
