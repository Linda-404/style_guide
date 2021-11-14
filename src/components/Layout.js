
function layout() {
    return(
        <>
            <h1>Layout</h1>

            <div className="container">
                <h2>Homepage example:</h2>

                <h3>Large:</h3>
                <div className="layout-display">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-homepage__main">
                        <div className="layout-homepage__main__newsale">
                            <div className="layout-homepage__main__bigcard">content 1 of 2</div>
                            <div className="layout-homepage__main__bigcard">content 2 of 2</div>
                        </div>
                        <div className="layout-homepage__main__products">
                            <div className="layout-homepage__main__card" >content 1 of 3</div>
                            <div className="layout-homepage__main__card" >content 2 of 3</div>
                            <div className="layout-homepage__main__card">content 3 of 3</div>
                        </div>
                    </div>
                </div>
                
                <h3>Medium:</h3>
                <div className="layout-display__md">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-homepage__main">
                        <div className="layout-homepage__main__newsale">
                            <div className="layout-homepage__main__bigcard__md">content 1 of 2</div>
                            <div className="layout-homepage__main__bigcard__md">content 2 of 2</div>
                        </div>
                        <div className="layout-homepage__main__products">
                            <div className="layout-homepage__main__card__md">content 1 of 3</div>
                            <div className="layout-homepage__main__card__md">content 2 of 3</div>
                            <div className="layout-homepage__main__card__md">content 3 of 3</div>
                        </div>
                    </div>
                </div>

                <h3>Small:</h3>
                <div className="layout-display__xs">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-homepage__main">
                        <div className="layout-homepage__main__newsale__xs">
                            <div className="layout-homepage__main__bigcard__xs">content 1 of 2</div>
                            <div className="layout-homepage__main__bigcard__xs">content 2 of 2</div>
                        </div>
                        <div className="layout-homepage__main__products__xs">
                            <div className="layout-homepage__main__card__xs">content 1 of 3</div>
                            <div className="layout-homepage__main__card__xs">content 2 of 3</div>
                            <div className="layout-homepage__main__card__xs">content 3 of 3</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Productpage example:</h2>

                <h3>Large:</h3>
                <div className="layout-display">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-productpage__main">
                        <div className="layout-productpage__main__card">content 1</div>
                        <div className="layout-productpage__main__card">content 2</div>
                        <div className="layout-productpage__main__card">content 3</div>
                        <div className="layout-productpage__main__card">content 4</div>
                        <div className="layout-productpage__main__card">content 5</div>
                        <div className="layout-productpage__main__card">content 6</div>
                    </div>
                </div>

                <h3>Medium:</h3>
                <div className="layout-display__md">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-productpage__main">
                        <div className="layout-productpage__main__card">content 1</div>
                        <div className="layout-productpage__main__card">content 2</div>
                        <div className="layout-productpage__main__card">content 3</div>
                        <div className="layout-productpage__main__card">content 4</div>
                        <div className="layout-productpage__main__card">content 5</div>
                        <div className="layout-productpage__main__card">content 6</div>
                    </div>
                </div>

                <h3>Small:</h3>
                <div className="layout-display__xs">
                    <div className="layout-header">
                        <h3>Header</h3>
                    </div>
                    <div className="layout-productpage__main">
                        <div className="layout-productpage__main__card">content 1</div>
                        <div className="layout-productpage__main__card">content 2</div>
                        <div className="layout-productpage__main__card">content 3</div>
                        <div className="layout-productpage__main__card">content 4</div>
                        <div className="layout-productpage__main__card">content 5</div>
                        <div className="layout-productpage__main__card">content 6</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2>Layout guidelines:</h2>
                <div className="layout-guidelines-container">
                    <div>
                        <h3>Home page:</h3>
                        <p>Content margin: 1em</p>
                        <p>Content max-width (1 of 2): 600px</p>
                        <p>Content max-height(1 of 2): 300px</p>
                        <p>Content max-width (1 of 3): 400px</p>
                        <p>Content max-height(1 of 3): 250px</p>
                    </div>
                    <div>
                        <h3>Product page:</h3>
                        <p>Content margin: 1em</p>
                        <p>Content max-width: 200px</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default layout