import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// layouts
import Master from "./Layouts/Master";

// pages
import Clients from "./Pages/Clients";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import CreateProject from "./Pages/CreateProject";
import CreateClient from "./Pages/CreateClient";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Master/>}>
        <Route index element={<Landing/>}/>
        <Route path={"clients"} element={<Clients/>}/>
        <Route path={"projects"} element={<Projects/>}/>
        <Route path={"createProject"} element={<CreateProject/>}/>
        <Route path={"createClient"} element={<CreateClient/>}/>
    </Route>
))

export default function App() {
    return <RouterProvider router={router}/>
}
