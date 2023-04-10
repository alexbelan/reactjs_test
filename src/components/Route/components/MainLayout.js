import React from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom"
import MainPage from "./MainPage";

const MainLayout = () => {
    const outlet = useOutlet()

    return (
        <>
            <nav className="route-nav">
                <ul>
                    <li>
                        <NavLink to='/' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }} >
                            Main page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/characters' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }} >
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/episode' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}>
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}>
                            Locations
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                {outlet === null && <MainPage />}
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout