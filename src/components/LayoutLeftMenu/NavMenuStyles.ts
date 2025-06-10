import styled from "styled-components";

// 전체 네비게이션 컨테이너
export const NavMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #475161;
`;

// 개별 네비게이션 아이템 컨테이너
export const NavItemContainer = styled.div`
  width: 100%;
`;

// 네비게이션 헤더 (메인 메뉴)
export const NavItemHeader = styled.div<{
  isOpen: boolean;
  isActive?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: ${(props) => (props.isActive ? "#4caf50" : "#414b5a")};
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background-color: ${(props) => (props.isActive ? "#4caf50" : "#4a5562")};
  }
`;

// 네비게이션 제목과 알림 영역
export const NavItemTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

// 알림 뱃지
export const NavNotificationBadge = styled.span`
  background-color: #ff4444;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

// 드롭다운 화살표 아이콘
export const NavDropdownIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: #ccc;
`;

// 서브메뉴 컨테이너 (absolute positioning)
export const NavSubMenuContainer = styled.div<{
  isOpen: boolean;
  itemCount: number;
}>`
  position: relative;

  height: ${(props) => (props.isOpen ? `${props.itemCount * 40 + 8}px` : "0")};
  overflow: hidden;
  transition: height 0.3s ease;
  background-color: #3a4349;
  z-index: 10;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 서브메뉴 아이템
export const NavSubMenuItem = styled.div<{ isActive?: boolean }>`
  padding: 12px;
  color: ${(props) => (props.isActive ? "#4caf50" : "#ccc")};
  cursor: pointer;
  font-size: 13px;
  display: flex;
  transition: all 0.2s ease;
  border-left: 3px solid
    ${(props) => (props.isActive ? "#4caf50" : "transparent")};
  background-color: ${(props) => (props.isActive ? "#2d3338" : "transparent")};

  &:hover {
    background-color: #2d3338;
    color: #fff;
    border-left-color: #4caf50;
  }
`;

// 서브메뉴 알림 뱃지
export const NavSubItemBadge = styled.span`
  background-color: #ff4444;
  color: white;
  font-size: 9px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 8px;
  margin-left: 8px;
  min-width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
