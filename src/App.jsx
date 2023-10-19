import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./views/Category";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Results from "./views/Results";
import NotFound from "./views/NotFound";
import Favorites from "./views/Favorites";
import StoreUrl from "./components/StoreUrl";
import NavigateBar from "./components/NavigateBar";
import Footer from "./components/Footer";
import './index.css'
import ComingSoon from "./views/ComingSoon";

function App() {
  return (
    <>
      <StoreUrl>      
        <BrowserRouter>
        <NavigateBar />
        <div className="min-h-screen py-6 bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryTypeName/:categoryGenderName"
              element={<Category />}
            />
            <Route path="/detail/:idDetail" element={<Detail />} />
            <Route path="/result/:searchResult" element={<Results />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/myFavorites" element={<Favorites />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
       
      </StoreUrl>
    </>
  );
}

export default App;
