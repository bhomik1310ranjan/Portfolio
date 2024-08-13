import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
