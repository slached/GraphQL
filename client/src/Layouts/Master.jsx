import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

export default function Master(props) {
    return (
        <div>
            <div className={"flex gap-4"}>
                <NavLink style={({isActive, isPending, isTransitioning}) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }} to={"/clients"}>Clients</NavLink>
                <NavLink style={({isActive, isPending, isTransitioning}) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }} to={"/projects"}>Projects</NavLink>
            </div>
            <Outlet/>
        </div>
    );
}
