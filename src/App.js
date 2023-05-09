import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Blog, Home, Navbar, Product, Footer, VirtualCard, CryptoCard, GlobalAcc } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-bg-white text-bg-black font">
        <div className="bg-center bg-no-repeat bg-cover  hero bg-bg-sec">
          <Navbar />
          {/* <Home /> */}
        </div>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/product/virtual-account"
            element={<VirtualCard/>}
          />
          <Route
            path="/product/buycrypto"
            element={<CryptoCard/>}
          />
          <Route
            path="/product/global-account"
            element={<GlobalAcc/>}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
