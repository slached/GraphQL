import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// pages
import Clients from "./Pages/Clients";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";

// layouts
import Master from "./Layouts/Master";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Master/>}>
        <Route index element={<Landing/>}/>
        <Route path={"clients"} element={<Clients/>}/>
        <Route path={"projects"} element={<Projects/>}/>
    </Route>
))

export default function App() {
    return <RouterProvider router={router}/>
}
