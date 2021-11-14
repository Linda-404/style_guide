import logoImage from '../images/logo_spaces.png';

function logo() {
    return(
        <>
            <h1>Logo</h1>
            
            <div className="container">
                <div className="logo-big-display">
                    <div className="logo-big-container">
                        <img src={logoImage} alt={"logo"} className="logo-big"/>
                    </div>
                    <div className="padding-container">
                        <div className="logo-padding"></div>
                        <p>Padding</p>
                    </div>
                    <h3>Logo guideline:</h3>
                    <p>For logo display always use 1em padding to create space</p>
                    <p>Location: In header, top left</p>
                    <p>Padding: 1em</p>
                    <p>width: 200px</p>
                </div>
            </div>

            <div className="container">
                <div className="logo-small-display">
                    <h3>Note: Don´t go below 120px, as the details get to small:</h3>
                    <div className="logo-small-container">
                        <img src={logoImage} alt={"logo"} className="logo-small"/>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default logo