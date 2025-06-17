import { createBrowserRouter } from "react-router";
import App from "./App";
import Blagues from "./pages/blagues";


const router = createBrowserRouter([
    {element : <App />,
        children: [{path: "/", element: <Blagues />}]
    },
])

export default router