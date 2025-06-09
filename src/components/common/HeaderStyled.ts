import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  left: 0;
  will-change: transform;
  z-index: 1031;
  border: none;
  background-color: #2d3539;
`;

export const PcHeaderInner = styled.div`
  min-height: 55px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
`;

export const PcHeaderLeftContent = styled.div`
  position: relative;
  max-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  gap: 16px;
`;

export const PcHeaderLeftUlWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PcHeaderLeftLi = styled.li`
  display: inline-flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: "|";
    color: rgba(255, 255, 255, 0.3);
    margin: 0 8px;
    font-size: 16px;
    line-height: 1;
  }

  a {
    display: block;
    padding: 8px 0;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

export const PcHeaderRightContent = styled.ul`
  position: relative;
  max-height: 55px;
  color: #ffffff;
`;

export const PcHeaderRightLi = styled.li`
  font-size: 12px;

  a {
    color: #fff;
    padding: 18px 10px;
    line-height: 1.5;
    display: flex;
  }

  div {
    display: inline-block;
    margin-left: 4px;
    padding: 0 7px;
    border-radius: 20px;
    border: 1px solid #dedede;
    color: #fff;
    font-size: 10px;
  }
`;

export const PcHeaderRightLiLogout = styled.li`
  font-size: 12px;

  a {
    padding: 18px 10px;

    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;
