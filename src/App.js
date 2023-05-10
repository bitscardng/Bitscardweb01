import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  Home,
  Navbar,
  Product,
  Footer,
  VirtualCard,
  CryptoCard,
  GlobalAcc,
  GiftCard,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-bg-white text-bg-black font">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/virtual-account" element={<VirtualCard />} />
          <Route path="/product/cryptocurrency" element={<CryptoCard />} />
          <Route path="/product/global-account" element={<GlobalAcc />} />
          <Route path="/product/gift-card" element={<GiftCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
