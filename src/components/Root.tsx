import "./Root.scss";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { HomeView } from "src/components/views/HomeView";
import { PageView } from "src/components/views/PageView";

export const axiosInstance = axios.create({
    baseURL: `http://api.graceandtom.com/api`
});

library.add(
    faBars,
);

/**
 * Props interface for {@link Root}.
 */
interface Props {}

/**
 * State interface for {@link Root}.
 */
interface State {
}

/**
 * Root is wrapped in the withRouter() Higher Order Component to allow for dynamic routing. This works by exposing the
 * "history" object that allows for pushing a new route to the browser history. Within Root, we are doing this through
 * the routePage() function and assigning it as a callback where needed.
 */
export class Root extends React.Component<Props, State> {
    /**
     * @inheritDoc
     */
    public constructor(props: Props, context?: any) {
        super(props, context);

        this.state = {};
    }

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <Switch>
                <>
                    <Route
                        exact={true}
                        path={"/"}
                        component={HomeView}
                    />
                    <Route
                        path={"/p/:slug"}
                        component={PageView}
                    />
                </>
            </Switch>
        );
    }
}
