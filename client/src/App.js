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
import EditProject from "./Pages/EditProject";
import EditClient from "./Pages/EditClient";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Master/>}>
        <Route index element={<Landing/>}/>
        <Route path={"clients"} element={<Clients/>}/>
        <Route path={"projects"} element={<Projects/>}/>
        <Route path={"createProject"} element={<CreateProject/>}/>
        <Route path={"createClient"} element={<CreateClient/>}/>
        <Route path={"editProject/:id"} element={<EditProject/>}/>
        <Route path={"editClient/:id"} element={<EditClient/>}/>
    </Route>
))

export default function App() {
    return <RouterProvider router={router}/>
}
