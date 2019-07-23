import "./HomeView.scss";
import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { NavigationWrapper } from "src/components/partials/structural/NavigationWrapper";

import { VenuePage } from "src/components/partials/VenuePage";
import { RsvpPage } from "src/components/partials/RsvpPage";
import { BridalPartyPage } from "src/components/partials/BridalPartyPage";
import { AccommodationsPage } from "src/components/partials/AccommodationsPage";
import { MusicPage } from "src/components/partials/MusicPage";
import { ContactPage } from "src/components/partials/ContactPage";

/**
 * Props interface for {@link Root}.
 */
interface Props extends RouteComponentProps {}

/**
 * State interface for {@link Root}.
 */
interface State {
    showNav: boolean;
    currentPath: string | undefined;
}

export class PageView extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            showNav: false,
            // @ts-ignore
            currentPath: props.match.params.slug,
        };
    }

    public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(this.props.location && prevProps.location && this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                // @ts-ignore
                currentPath: this.props.match && this.props.match.params && this.props.match.params.slug
            });
        }
    }

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <div className={"wrapper"}>
                <NavigationWrapper
                    isPublic={true}
                    showNav={this.state.showNav}
                    onToggleNavigation={() => this.setState({ showNav: !this.state.showNav })}
                />

                <Switch>
                    <>
                        <Route
                            path={"/p/venue"}
                            component={VenuePage}
                        />
                        <Route
                            path={"/p/rsvp/:identifier?"}
                            component={RsvpPage}
                        />
                        <Route
                            path={"/p/bridal-party"}
                            component={BridalPartyPage}
                        />
                        <Route
                            path={"/p/accommodations"}
                            component={AccommodationsPage}
                        />
                        <Route
                            path={"/p/music"}
                            component={MusicPage}
                        />
                        <Route
                            path={"/p/contact"}
                            component={ContactPage}
                        />
                    </>
                </Switch>
            </div>
        );
    }
}
