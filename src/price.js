import './price.css'
const Price = () => {
    return ( 
        <div className="price">
            <div className="price-header">
                <h1>An exceptional service, <span>at the right price</span></h1>
                <small>Start with our free plan and switch to premium as you grow</small>
            </div>
            <div className="free1">
                <h1>Free</h1>
                <h1>$ 0 <span>/m</span></h1>
                <p>Manage your business with a simple and efficient account</p>
                <button>Get Started</button>
                <img src="/img/creditcard.svg" alt=""/>
            </div>
            <div className="free2">
                <h1>Premium</h1>
                <h1>$ 10 <span>/m</span></h1>
                <p>Manage your business with a simple and efficient account</p>
                <button>Get Started</button>
                <img src="/img/creditcard.svg" alt=""/>
            </div>

        </div>
     );
}
 
export default Price;