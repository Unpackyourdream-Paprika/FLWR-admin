import styled from "styled-components";

export const SideNavWrapper = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 210px;
  width: 210px;
  margin-left: -210px;
  background-color: #475161;
  z-index: 1030;
  transition: all 0.4s;
  height: 100%;
`;

export const SideNavInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideNavInnerTopWrapper = styled.div`
  position: relative;
  /* height: 30%; */
`;

export const SideNavTopProfile = styled.div`
  padding: 30px 20px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const SideNavProfileWrap = styled.a`
  display: inline-block;
  text-decoration: none;

  span {
    display: block;
    cursor: pointer;
    color: inherit;
    width: 80px;
    height: 80px;
  }

  span img {
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    max-width: 100%;
    height: auto;
  }
`;

export const SideNavProfileDetail = styled.div`
  h4 {
    display: block;
    margin-bottom: 2px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    word-break: break-all;
  }

  p {
    font-size: 13px;
    color: #999;
  }
`;

export const SideNavInnerBottomWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  border-top: 1px solid hsla(0, 0%, 100%, 0.12);
`;

// 드롭다운

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 20px 4px 20px;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #414b5a;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s ease;
  padding: 8px 16px;
  &:hover {
    background-color: #4a5562;
  }

  span {
    font-weight: 500;
  }
`;

export const DropdownIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: #999;
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 46px;
  left: 20px;
  width: 170px;
  right: 0;
  height: ${(props) => (props.isOpen ? "250px" : "0")};
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 999;
  background-color: #414b5a;
`;

export const DropdownWrapper = styled.div`
  padding: 2px 12px 30px;
  background-color: #414b5a;
  font-size: 12px;
`;

// 드롭다운 아이템 컴포넌트
export const DropdownItem = styled.div`
  padding: 8px 0;
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 12px;

  &:hover {
    color: #4caf50;
    background-color: #292f38;
  }
`;

// 활성화된 아이템
export const DropdownActiveItem = styled(DropdownItem)`
  color: #4caf50;
  font-weight: 500;
`;

// 검색 컨테이너
export const SearchContainer = styled.div`
  width: 100%;
  padding: 0px 20px 20px 20px;
`;

// 검색 입력 wrapper
export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #414b5a;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

// 검색 아이콘
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: #999;
  font-size: 13px;
  cursor: pointer;
`;

// 검색 입력
export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 13px;
  width: 100%;

  &::placeholder {
    color: #999;
    font-size: 12px;
  }
`;
