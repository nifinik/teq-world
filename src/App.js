import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutus" Component={AboutUs} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="/services" Component={Services} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
