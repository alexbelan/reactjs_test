import React, {Suspense, lazy} from "react";
// import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Category from "./components/Category";
// import MainLayout from "./components/MainLayout";
// import PostCharacter from "./components/PostCharacter";
// import PostEpisode from "./components/PostEpisode";
// import PostLocation from "./components/PostLocation";
// import ErrorPage from "./components/ErrorPage";
import { AuthProvider } from "./context/AuthProvider";
// import Login from "./components/Login";

const MainLayout = lazy(() => import('./components/MainLayout'))
const Category = lazy(() => import('./components/Category'))
const PostCharacter = lazy(() => import('./components/PostCharacter'))
const PostEpisode = lazy(() => import('./components/PostEpisode'))
const PostLocation = lazy(() => import('./components/PostLocation'))
const Login = lazy(() => import('./components/Login'))
const ErrorPage = lazy(() => import('./components/ErrorPage'))

const RouteTest = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route>
                        <Route path={'/'} element={<MainLayout />} >
                            <Route path={'/character'} element={<Category />}  />
                            <Route path={'/character/:id'} element={<PostCharacter />} />
                            <Route path={'/episode'} element={<Category />}  />
                            <Route path={'/episode/:id'} element={<PostEpisode />} />
                            <Route path={'/location'}    element={<Category />}  />
                            <Route path={'/location/:id'} element={<PostLocation />} />
                        </Route>
                        <Route path='/login' element={<Suspense fallback={'Loading...'}><Login/></Suspense> } />
                        <Route path='*' element={<Suspense fallback={'Loading...'}><ErrorPage /></Suspense>} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default RouteTest