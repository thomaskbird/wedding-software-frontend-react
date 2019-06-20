/**
 * Entry point for the PDS Web App
 * @module
 */
import "./index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Root } from "src/components/Root";

/**
 * Web App root path.
 * If available, the web app exists in a sub directory on the server.
 */
const webAppRootPath =
    process.env.WEB_APP_ROOT_PATH != null
        ? `/${process.env.WEB_APP_ROOT_PATH}`
        : "";

/**
 * Creates the Root component
 * @returns Root component
 */
function createAppElement(): JSX.Element {
    return (
        <BrowserRouter basename={webAppRootPath}>
            <Root />
        </BrowserRouter>
    );
}

ReactDOM.render(createAppElement(), document.getElementById("root"));
