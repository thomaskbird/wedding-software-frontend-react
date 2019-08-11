import "./Root.scss";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { HomeView } from "src/components/views/HomeView";
import { PageView } from "src/components/views/PageView";
import { AdminView } from "src/components/views/AdminView";
import { scrollToTop } from "src/components/Helpers";

export const axiosInstance = axios.create({
    baseURL: `http://api.graceandtom.com/api`
});

library.add(
    faBars,
    faChevronDown,
    faChevronUp,
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

    public componentDidMount(): void {
        this.setPageTitle();
    }

    public componentDidUpdate(): void {
        this.setPageTitle();
    }

    private setPageTitle(): void {
        let title = "";

        switch(window.location.pathname) {
            case "/":
                title = "Home";
            break;
            case "/p/big-day":
                title = "Big Day";
            break;
            case "/p/venue":
                title = "Venue";
            break;
            case "/p/rsvp":
                title = "RSVP";
            break;
            case "/p/bridal-party":
                title = "Bridal Party";
            break;
            case "/p/accommodations":
                title = "Accommodations";
            break;
            case "/p/music":
                title = "Music Request";
            break;
            case "/p/registry":
                title = "Registry";
            break;
            case "/p/contact":
                title = "Contact";
            break;
            case "/admin/music-requested":
                title = "Requested music";
            break;
            case "/admin/guest-list":
                title = "Guest List";
            break;
        }

        document.title = `Grace & Tom | ${title}`;

        scrollToTop();
    }

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <Switch>
                <Route
                    exact={true}
                    path={"/"}
                    component={HomeView}
                />
                <Route
                    path={"/p/:slug"}
                    component={PageView}
                />
                <Route
                    path={"/admin/:slug"}
                    component={AdminView}
                />
            </Switch>
        );
    }
}
