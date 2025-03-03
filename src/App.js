import './App.css';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { router } from "./Routes";


function App() {
    return (
        <Provider store={appStore}>
            <RouterProvider router={router} />
        </Provider>
        // <ParticleBackground/>
    );
}

export default App;
