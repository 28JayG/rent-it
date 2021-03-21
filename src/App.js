import { Route } from "react-router";

import ContactBanner from "./components/contact-banner/contact-banner.component";
import Header from "./components/header/header.component";
import Purchase from "./pages/purchase/purchase.component";
import Search from "./pages/search/search.component";

import "./App.css";
import OrderConfirmation from "./pages/order-confirmation/order-confirmation.component";
import ProductView from "./pages/product-view/product-view.component";
import { AppRoutes } from "./constants/routes";

function App() {
  return (
    <div>
      <div>
        <ContactBanner />
        <Header />
      </div>
      <div className="header-clearence" />
      <Route path={AppRoutes.HOME} exact component={Search} />
      <Route path={AppRoutes.CART} component={Purchase} />
      <Route path={AppRoutes.ORDER_CONFIRMATION} component={OrderConfirmation} />
      <Route path="/items/:id" component={ProductView} />
    </div>
  );
}

export default App;
