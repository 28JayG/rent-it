import { Route } from "react-router";
import "./App.css";
import ContactBanner from "./components/contact-banner/contact-banner.component";
import Header from "./components/header/header.component";
import Search from "./pages/search/search.component";

function App() {
  return (
    <div>
      <div >
        <ContactBanner />
        <Header />
      </div>
      <div className='header-clearence'/>
      <Route path="/" component={Search} />
    </div>
  );
}

export default App;
