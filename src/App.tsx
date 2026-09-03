import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// const Home = lazy(() => import("./pages/Home/Home"));
// const About = lazy(() => import("./pages/About/About"));
// const Projects = lazy(() => import("./pages/Sectors/Projects"));
// const ProductsProduction = lazy(
//   () => import("./pages/ProductsProduction/ProductsProduction")
// );
// const QualityCertificates = lazy(
//   () => import("./pages/QualityCertificates/QualityCertificates")
// );
// const Marketing = lazy(
//   () => import("./pages/Marketing/Marketing")
// );
// const Contact = lazy(
//   () => import("./pages/Contact/Contact")
// );

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            {/*
            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/products"
              element={<ProductsProduction />}
            />

            <Route
              path="/quality-certificates"
              element={<QualityCertificates />}
            />

            <Route
              path="/marketing"
              element={<Marketing />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />
            */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}