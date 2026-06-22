import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import __Layout from './Layout.jsx';

export const PAGES = {
    "Home": Home,
    "Gallery": Gallery,
    "Services": Services,
    "About": About,
    "Booking": Booking,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};