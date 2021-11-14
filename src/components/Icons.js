import logoIcon from '../images/icon_spaces.png';
import logoIcon2 from '../images/icon_spaces4.png';

function icons() {
    return(
        <>
            <h1>Icons</h1>

            <div className="container">
                <div className="icon-display">
                    <h2>Shopping icons:</h2>
                    <div className="icon-container">
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-cart-arrow-down"></i>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="icon-display">
                    <h2>Payment icons:</h2>
                    <div className="icon-container">
                        <i class="fab fa-paypal"></i>
                        <i class="fas fa-credit-card"></i>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="icon-display">
                    <h2>Shipping icons:</h2>
                    <div className="icon-container">
                        <i class="fas fa-shipping-fast"></i>
                        <i class="fas fa-dolly"></i>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="icon-display">
                    <h2>Brand icons:</h2>
                    <div className="icon-container">
                        <img src={logoIcon} alt={"logo icon"} className="brand-icon"/>
                        <img src={logoIcon2} alt={"logo icon"} className="brand-icon2"/>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default icons