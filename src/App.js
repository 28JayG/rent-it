import { Route } from "react-router";

import ContactBanner from "./components/contact-banner/contact-banner.component";
import Header from "./components/header/header.component";
import Purchase from "./pages/purchase/purchase.component";
import Search from "./pages/search/search.component";

import "./App.css";
import OrderConfirmation from "./pages/order-confirmation/order-confirmation.component";

function App() {
  return (
    <div>
      <div>
        <ContactBanner />
        <Header />
      </div>
      <div className="header-clearence" />
      <Route path="/" exact component={Search} />
      <Route path="/order" component={Purchase} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
    </div>
  );
}

export default App;
