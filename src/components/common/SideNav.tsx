import {
  SideNavWrapper,
  SideNavInner,
  SideNavInnerTopWrapper,
  SideNavInnerBottomWrapper,
  SideNavTopProfile,
  SideNavProfileWrap,
  SideNavProfileDetail,
  DropdownContainer,
  DropdownHeader,
  DropdownIcon,
  DropdownContent,
  DropdownWrapper,
  DropdownItem,
  DropdownActiveItem,
  SearchContainer,
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
} from "./SideNavStyled";
import { IoChevronDown, IoSearch } from "react-icons/io5";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

import DonkiFace from "/Layout/donki.jpg";
import { useState } from "react";
import { NavigationMenu } from "../LayoutLeftMenu/NavigationMenu";
import { NAV_MENU_DATA } from "../../types/nav.types";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 현재 선택된 아이템 상태
  const [selectedItem, setSelectedItem] = useState<string>("수취인명");
  const [searchValue, setSearchValue] = useState<string>(""); // 검색 상태 추가

  // 드롭다운 아이템 목록
  const dropdownItems = [
    "수취인명",
    "구매자명",
    "구매자업체",
    "구매자ID",
    "주문번호",
    "상품주문번호",
    "상품번호",
  ];

  // 드롭다운 헤더 클릭 - 열고/닫기
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 드롭다운 아이템 클릭 - 선택하고 닫기
  const handleItemClick = (item: string) => {
    setSelectedItem(item); // 선택된 아이템 업데이트
    setIsOpen(false); // 드롭다운 닫기
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <SideNavWrapper>
      <SideNavInner>
        <SideNavInnerTopWrapper>
          <SideNavTopProfile>
            <SideNavProfileWrap>
              <span>
                <img src={DonkiFace} />
              </span>
            </SideNavProfileWrap>
            <SideNavProfileDetail>
              <h4>돈키니쿠</h4>
              <p>통합 매니저</p>
            </SideNavProfileDetail>
          </SideNavTopProfile>

          <DropdownContainer>
            {/* 드롭다운 헤더 - 현재 선택된 아이템 표시 */}
            <DropdownHeader onClick={toggleDropdown} isOpen={isOpen}>
              <span>{selectedItem}</span>
              <DropdownIcon isOpen={isOpen}>
                <IoChevronDown size={12} />
              </DropdownIcon>
            </DropdownHeader>

            {/* 드롭다운 내용 */}
            <DropdownContent isOpen={isOpen}>
              <DropdownWrapper>
                {dropdownItems.map((item) => (
                  <div key={item}>
                    {/* 현재 선택된 아이템은 DropdownActiveItem 스타일 */}
                    {selectedItem === item ? (
                      <DropdownActiveItem onClick={() => handleItemClick(item)}>
                        {item}
                      </DropdownActiveItem>
                    ) : (
                      <DropdownItem onClick={() => handleItemClick(item)}>
                        {item}
                      </DropdownItem>
                    )}
                  </div>
                ))}
              </DropdownWrapper>
            </DropdownContent>
          </DropdownContainer>

          <SearchContainer>
            <SearchInputWrapper>
              <SearchIcon>
                <IoSearch />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="입력 후 검색하세요"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </SearchInputWrapper>
          </SearchContainer>
        </SideNavInnerTopWrapper>

        <SideNavInnerBottomWrapper>
          <NavigationMenu
            menuData={NAV_MENU_DATA}
            activeSubItemId="seoul-logistics" // 현재 활성화된 서브메뉴 ID
          />
        </SideNavInnerBottomWrapper>
      </SideNavInner>
    </SideNavWrapper>
  );
}
