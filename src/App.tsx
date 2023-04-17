import {Provider} from "react-redux";
import {store} from "./redux/store";

import {ForumPage} from "./components/pages/ForumPage";

function App() {
    return (
        <Provider store={store}>
            <ForumPage />
        </Provider>
    );
}

export default App;
