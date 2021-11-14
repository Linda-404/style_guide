import productImage1 from '../images/wall.jpg';
import productImage2 from '../images/lamp.jpg';
import productImage3 from '../images/vase.jpg';
import productImage4 from '../images/wall_decor.jpg';

function imagery() {
    return (
        <>
            <h1>Imagery</h1>

            <h2>With our images we focus on texture and contrast</h2>

            <p>We want the costumer to almost feel the images so they can visualize the product in real life.</p>

            <div className="container">
                <h3>Texture and contrast examples:</h3>
                <div className="imagery-display">
                    <img src={productImage1} alt={"item"} className="image"/>
                    <img src={productImage2} alt={"item"} className="image"/>
                    <img src={productImage3} alt={"item"} className="image"/>
                    <img src={productImage4} alt={"item"} className="image"/>
                </div>
            </div>

            <div className="container">
                <h3>Widths:</h3>
                <p>Product card image: 200px</p>
                <h3>Image dimentions:</h3>
                <p>Product card image: 700x700px</p>
                <p>Other use (as news/sale): 700x450px</p>
            </div>
            <div>
                <h3>Note: Always keep image sizes below 200kb for optimal loading time.</h3>
            </div>
        </>
    )
}

export default imagery