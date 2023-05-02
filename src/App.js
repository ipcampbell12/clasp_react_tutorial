import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"

function App() {
    return (
        <Fragment>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="*" element={<Home />} />
            </Routes>
        </Fragment>

    );
}

export default App;