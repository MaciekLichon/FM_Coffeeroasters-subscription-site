import Container from './components/utils/Container/Container';
import NavBar from './components/fixed/NavBar/NavBar';
import Footer from './components/fixed/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CoffeePlan from './pages/CoffeePlan/CoffeePlan';

import {Routes, Route} from "react-router-dom";


// leave how it works and go to footer now

const App = () => {
    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/plan" element={<CoffeePlan />} />
            </Routes>
            <Footer />
        </Container>
    );
};

export default App;
