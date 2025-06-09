// types/navMenuTypes.ts

export interface NavSubItem {
  id: string;
  label: string;
  path: string;
  isActive?: boolean;
}

export interface NavMenuItem {
  id: string;
  title: string;
  path?: string; // 단일 페이지인 경우
  icon?: string;
  notificationCount?: number;
  subItems?: NavSubItem[];
  defaultOpen?: boolean;
}

// 전체 네비게이션 메뉴 데이터
export const NAV_MENU_DATA: NavMenuItem[] = [
  {
    id: "product-management",
    title: "상품관리",
    path: "/product-management",
  },
  {
    id: "sales-management",
    title: "판매관리",
    subItems: [
      {
        id: "order-integration",
        label: "주문통합검색",
        path: "/sales/order-search",
      },
      {
        id: "seoul-logistics",
        label: "서울 수량대기",
        path: "/sales/seoul-logistics",
        isActive: true, // 현재 활성화된 페이지
      },
      {
        id: "purchase-confirmation",
        label: "미결제 확인",
        path: "/sales/purchase-confirmation",
      },
      {
        id: "delivery-management",
        label: "발주(주문)확인/발송관리",
        path: "/sales/delivery-management",
      },
      {
        id: "shipping-integration",
        label: "배송현황 관리",
        path: "/sales/shipping-integration",
      },
      {
        id: "purchase-history",
        label: "구매현황 내역",
        path: "/sales/purchase-history",
      },
      {
        id: "returns-management",
        label: "취소 관리",
        path: "/sales/returns-management",
      },
      {
        id: "inventory-management",
        label: "반품 관리",
        path: "/sales/inventory-management",
      },
      {
        id: "exchange-management",
        label: "교환 관리",
        path: "/sales/exchange-management",
      },
      {
        id: "sales-inquiry",
        label: "판매상품 고객관리",
        path: "/sales/sales-inquiry",
      },
      {
        id: "inventory-inquiry",
        label: "발품업삼게어",
        path: "/sales/inventory-inquiry",
      },
    ],
  },
  {
    id: "settlement-management",
    title: "정산관리",
    path: "/settlement-management",
  },
  {
    id: "inquiry-review-management",
    title: "문의/리뷰관리",
    subItems: [
      {
        id: "customer-inquiry",
        label: "고객 문의",
        path: "/inquiry/customer",
      },
      {
        id: "product-review",
        label: "상품 리뷰",
        path: "/inquiry/review",
      },
    ],
  },
  {
    id: "store-management",
    title: "스토어관리",
    notificationCount: 5,
    subItems: [
      {
        id: "store-info",
        label: "스토어 정보",
        path: "/store/info",
      },
      {
        id: "store-design",
        label: "스토어 디자인",
        path: "/store/design",
      },
    ],
  },
];
