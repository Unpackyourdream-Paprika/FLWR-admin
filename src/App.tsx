import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/common/Layout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SettlementManagement from "./pages/SettlementManagement/SettlementManagement";
import CustomerInquiry from "./pages/CustomerInquiry/CustomerInquiry";
import ProductReview from "./pages/ProductReview/ProductReview";
import StoreInfo from "./pages/StoreInfo/StoreInfo";
import StoreDesign from "./pages/StoreDesign/StoreDesign";
import InventoryInquiry from "./pages/InventoryInquiry/InventoryInquiry";
import SalesInquiry from "./pages/SalesInquiry/SalesInquiry";
import ExchangeManagement from "./pages/ExchangeManagement/ExchangeManagement";
import InventoryManagement from "./pages/InventoryManagement/InventoryManagement";
import ReturnsManagement from "./pages/ReturnsManagement/ReturnsManagement";
import PurchaseHistory from "./pages/PurchaseHistory/PurchaseHistory";
import ShippingIntegration from "./pages/ShippingIntegration/ShippingIntegration";
import DeliveryManagement from "./pages/DeliveryManagement/DeliveryManagement";
import PurchaseConfirmation from "./pages/PurchaseConfirmation/PurchaseConfirmation";
import OrderSearch from "./pages/OrderSearch/OrderSearch";
import SeoulLogistics from "./pages/SeoulLogistics/SeoulLogistics";
import ProductManagement from "./pages/ProductManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 - Layout 없음 */}
        <Route path="/login" element={<Login />} />

        {/* 메인 애플리케이션 - Layout 있음 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* / */}
          <Route path="home" element={<Home />} /> {/* /home */}
          <Route path="about" element={<About />} /> {/* /about */}
          <Route path="sales/order-search" element={<OrderSearch />} />
          <Route path="sales/seoul-logistics" element={<SeoulLogistics />} />
          <Route
            path="product-management"
            element={<ProductManagement />}
          />
          <Route
            path="sales/purchase-confirmation"
            element={<PurchaseConfirmation />}
          />
          <Route
            path="sales/delivery-management"
            element={<DeliveryManagement />}
          />
          <Route
            path="sales/shipping-integration"
            element={<ShippingIntegration />}
          />
          <Route path="sales/purchase-history" element={<PurchaseHistory />} />
          <Route
            path="sales/returns-management"
            element={<ReturnsManagement />}
          />
          <Route
            path="sales/inventory-management"
            element={<InventoryManagement />}
          />
          <Route
            path="sales/exchange-management"
            element={<ExchangeManagement />}
          />
          <Route path="sales/sales-inquiry" element={<SalesInquiry />} />
          <Route
            path="sales/inventory-inquiry"
            element={<InventoryInquiry />}
          />
          {/* 정산관리 */}
          <Route
            path="settlement-management"
            element={<SettlementManagement />}
          />
          {/* 문의/리뷰관리 */}
          <Route path="inquiry/customer" element={<CustomerInquiry />} />
          <Route path="inquiry/review" element={<ProductReview />} />
          {/* 스토어관리 */}
          <Route path="store/info" element={<StoreInfo />} />
          <Route path="store/design" element={<StoreDesign />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
