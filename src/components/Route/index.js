import React from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Category from "./components/Category";
import MainLayout from "./components/MainLayout";
import PostCharacter from "./components/PostCharacter";
import PostEpisode from "./components/PostEpisode";
import PostLocation from "./components/PostLocation";
import ErrorPage from "./components/ErrorPage";

const RouteTest = () => {
    // PostCharacter
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path={'/'} element={<MainLayout />} >
                        <Route path={'/characters'} element={<Category />}  />
                        <Route path={'/characters/:id'} element={<PostCharacter />} / >
                        <Route path={'/episode'} element={<Category />}  />
                        <Route path={'/episode/:id'} element={<PostEpisode />} / >
                        <Route path={'/location'} element={<Category />}  />
                        <Route path={'/location/:id'} element={<PostLocation />} / >
                    </Route>
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RouteTest