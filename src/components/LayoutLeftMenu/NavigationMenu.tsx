import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import {
  NavMenuContainer,
  NavItemContainer,
  NavItemHeader,
  NavItemTitle,
  NavNotificationBadge,
  NavDropdownIcon,
  NavSubMenuContainer,
  NavSubMenuItem,
  NavSubItemBadge,
} from "./NavMenuStyles";
import type { NavMenuItem, NavSubItem } from "../../types/nav.types";

interface NavItemProps {
  item: NavMenuItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  activeSubItemId?: string;
}

export const NavItem = ({
  item,
  isOpen,
  onToggle,
  activeSubItemId,
}: NavItemProps) => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    if (item.subItems && item.subItems.length > 0) {
      // 서브메뉴가 있으면 토글
      onToggle(item.id);
    } else if (item.path) {
      // 단일 페이지면 바로 이동
      navigate(item.path);
    }
  };

  const handleSubItemClick = (subItem: NavSubItem) => {
    navigate(subItem.path);
  };

  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isActiveMain = Boolean(
    item.path && window.location.pathname === item.path
  );

  return (
    <NavItemContainer style={{ position: "relative" }}>
      <NavItemHeader
        isOpen={isOpen}
        isActive={isActiveMain}
        onClick={handleHeaderClick}
      >
        <NavItemTitle>
          <span>{item.title}</span>
          {item.notificationCount && item.notificationCount > 0 && (
            <NavNotificationBadge>
              {item.notificationCount > 99 ? "N" : item.notificationCount}
            </NavNotificationBadge>
          )}
        </NavItemTitle>
        {hasSubItems && (
          <NavDropdownIcon isOpen={isOpen}>
            <IoChevronDown size={14} />
          </NavDropdownIcon>
        )}
      </NavItemHeader>

      {hasSubItems && (
        <NavSubMenuContainer
          isOpen={isOpen}
          itemCount={item.subItems?.length || 0}
        >
          {item.subItems?.map((subItem) => (
            <NavSubMenuItem
              key={subItem.id}
              isActive={subItem.isActive || activeSubItemId === subItem.id}
              onClick={() => handleSubItemClick(subItem)}
            >
              {subItem.label}
              {/* 서브아이템에도 알림이 있다면 */}
              {/* {subItem.notificationCount && (
                <NavSubItemBadge>{subItem.notificationCount}</NavSubItemBadge>
              )} */}
            </NavSubMenuItem>
          ))}
        </NavSubMenuContainer>
      )}
    </NavItemContainer>
  );
};

interface NavigationMenuProps {
  menuData: NavMenuItem[];
  activeSubItemId?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  menuData,
  activeSubItemId,
}) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    // 하나만 열리도록 - 같은 메뉴면 닫고, 다른 메뉴면 교체
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <NavMenuContainer>
      {menuData.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isOpen={openMenuId === item.id}
          onToggle={handleToggle}
          activeSubItemId={activeSubItemId}
        />
      ))}
    </NavMenuContainer>
  );
};
