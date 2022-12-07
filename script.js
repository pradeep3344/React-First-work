// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
// ReactDOM.render(<App />,document.getElementById("root"))       


function Navbar(){
    return (
        <nav>
            <img src="download.JPG" className="nav-icon" width="70px"></img>
                <h3 className="nav-logo-text">React Facts</h3>
                <h4 className="nav-title">Portfolio</h4>
        </nav>
    )
}

function Main(){
    return (
        <main>
            <h1 className="main--title">Candidate Details:--</h1>
            <ul className="main--facts">
                <li>He is pradeep</li>
                <li>22 Year's old lad</li>
                <li>There is alot of fire in him,but ryt now destiny wants him to be at someother place</li>
                <li>But be grateful of this and be happy</li>
                <li>But someday he is gonna make his parents and family proud</li>
            </ul>

        </main>
    )
}

function App(){
    return(
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)