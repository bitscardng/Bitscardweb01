import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  Home,
  Navbar,
  Footer,
  VirtualCard,
  CryptoCard,
  GlobalAcc,
  GiftCard,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 font-semibold bg-bg-white text-bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
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
