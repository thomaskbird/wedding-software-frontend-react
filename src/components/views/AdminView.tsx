import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { NavigationWrapper } from "src/components/partials/structural/NavigationWrapper";
import { VenuePage } from "src/components/partials/VenuePage";
import { RsvpPage } from "src/components/partials/RsvpPage";
import { BridalPartyPage } from "src/components/partials/BridalPartyPage";
import { AccommodationsPage } from "src/components/partials/AccommodationsPage";
import { MusicPage } from "src/components/partials/MusicPage";
import { ContactPage } from "src/components/partials/ContactPage";
import { AdminGuestList } from "src/components/partials/AdminGuestList";

interface Props extends RouteComponentProps {

}

interface State {
    showNav: boolean;
    currentPath: string | undefined;
}

export class AdminView extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            showNav: false,
            currentPath: undefined
        };
    }

    public componentDidMount(): void {
        // @ts-ignore
        this.setState({ currentPath: this.props.match.params.slug });
    }

    public render(): JSX.Element {
        return (
            <div className={"wrapper"}>
                <NavigationWrapper
                    showNav={this.state.showNav}
                    onToggleNavigation={() => this.setState({ showNav: !this.state.showNav })}
                    isPublic={false}
                />

                <Switch>
                    <>
                        <Route
                            path={"/admin/guest-list"}
                            component={AdminGuestList}
                        />
                    </>
                </Switch>
            </div>
        );
    }
}
