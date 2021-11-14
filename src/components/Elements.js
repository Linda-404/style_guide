import productImage from '../images/item_1.jpg';


function elements() {
    return(
        <>
            <h1>Element styling</h1>

            <div className="container">
                <h2>Form:</h2>
                <form>
                    <label for="firstName">First Name:</label> 
                    <input type="text" name="firstName" placeholder="First Name"></input>
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="lastName" placeholder="Last Name"></input>
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="example@gmail.com"></input>
                    <input type="submit" value="submit" className="btn"></input>
                </form>

                <div className="message-display">
                    <div>
                        <h3>Message:</h3>
                        <div className="message-container message">
                            <p>Message</p>
                        </div>    
                    </div>
                    <div>
                        <h3>Success message:</h3>
                        <div className="message-container success">
                            <p>Success!</p>
                        </div>    
                    </div>
                    <div>
                        <h3>Error message:</h3>
                        <div className="message-container error">
                            <p>Error!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Buttons:</h2>
                <div className="button-display">
                    <div>
                        <h3>CTA button:</h3>
                        <button>button</button>
                    </div>
                    <div>
                        <h3>Form button:</h3>
                        <input type="submit" value="submit" className="btn"></input>
                    </div>
                </div>
                <h3>Styling buttons:</h3>
                <p>Padding: 5px 30px 5px 30px</p>
                <p>Border: 4px solid</p>
                <p>Border radius: 2px</p>
            </div>

            <div className="container">
                <h2>Navigation:</h2>
                <div className="nav-display">
                    <a>Home</a>
                    <a>About</a>
                    <a>Products</a>
                    <a>Contact</a>
                </div>  
            </div>

            <div className="container">
                <h3>Note: CSS Effect for buttons and navigation: transition: 0.3s</h3>
            </div>

            <div className="container">
                <h2>Product card example:</h2>
                <div className="product-card-container">
                    <div className="product-card-display">
                        <div className="product-card">
                            <img src={productImage} alt={"item"} className="product-img"/>
                            <div className="product-info">
                                <h3>Product name</h3>
                                <p>Price: <span>$$$,-</span></p>
                                <p>In stock</p>
                                <button>More</button>
                            </div> 
                        </div>
                    </div>
                    <div className="product-card-guidelines">
                        <h3>Productcard guidelines:</h3>
                        <h3>Card:</h3>
                        <p>max-width: 200px</p>
                        <p>box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)</p>

                        <h3>Image:</h3>
                        <p>max-width: 200px</p>

                        <h3>Product info:</h3>
                        <p>Display: flex</p>
                        <p>Flex-direction: column</p>
                        <p>Padding: 0.5em</p>

                        <h3>Button:</h3>
                        <p>Align-self: center</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default elements