import { BrowserRouter } from "react-router-dom";
import { About, Blog, Home, Navbar, Product, Footer } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Home />
        </div>
        <div>
          <Blog />
          <Product />
          <About />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
