
function typography() {
    return(
        <>
            <h1>Typography</h1>

            <div>
                <div className="container">
                    <h2>Typeface</h2>
                    <div className="type-display">
                        <div>
                            <h3>Josefin sans:</h3>
                            <p>Headings / navigation / links</p>
                        </div>
                        <div>
                            <h3>Open sans:</h3>
                            <p>Body text</p>
                        </div>
                    </div>   
                </div>

                <div className="container">
                    <h2>Weight</h2>
                    <div className="type-display">
                        <div>
                            <h3>300:</h3>
                            <p>Heading (h1)</p>
                        </div>
                        <div>
                            <h3>400:</h3>
                            <p>Subheading (h2)</p>
                        </div>
                        <div>
                            <h3>500:</h3>
                            <p>Navigation (a)</p>
                        </div>
                    </div>
                </div>

                <div className="container" >
                    <h2>Typefacename example sizes and weight:</h2>
                    <div className="type-ex-display">
                        <h1>This is a heading</h1>
                        <h2>This is a subheading</h2>
                        <a>This is navigation text</a>
                        <p>This is body text</p>
                        <p>This is footer content text</p>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default typography