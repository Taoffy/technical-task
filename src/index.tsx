import React from "react";
import ReactDOM from "react-dom/client";
import useMockAdapter from "src/api/useMockAdapter";

import {Provider} from "react-redux";
import {store} from "./redux/store";

import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const RootApp = () => {
    useMockAdapter();

    return <App />;
};

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RootApp />
        </Provider>
    </React.StrictMode>,
);
