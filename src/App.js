import Cart from "./Cart";
import Chart from "./Chart";
import Footer from "./footer";
import Main from "./Main";
import Navbar from "./Navbar";
import Price from "./price";
import Questions from "./questions";
import Support from "./support";


function App() {
  return (
    <div className="app">
      <div className="container">

      
      <Navbar />
      <Main />
      <Cart />
      <Chart />
      <Support />
      <Price />
      <Questions />


      </div>
      <Footer />

    </div>
  );
}

export default App;
