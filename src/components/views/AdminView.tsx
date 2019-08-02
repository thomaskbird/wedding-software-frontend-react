import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { NavigationWrapper } from "src/components/partials/structural/NavigationWrapper";
import { AdminGuestList } from "src/components/partials/AdminGuestList";
import { Footer } from "src/components/partials/structural/Footer";
import { Containers } from "src/components/partials/structural/Containers";
import { paz } from "src/mocks/a";

interface Props extends RouteComponentProps {

}

interface State {
    showNav: boolean;
    currentPath: string | undefined;
    showAdmin: boolean;
    showErrors: boolean;
    pass: string;
}

export class AdminView extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            showNav: false,
            currentPath: undefined,
            showAdmin: false,
            showErrors: false,
            pass: "",
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

                {this.state.showAdmin ? (
                    <Switch>
                        <>
                            <Route
                                path={"/admin/guest-list"}
                                component={AdminGuestList}
                            />
                        </>
                    </Switch>
                ) : (
                    <Containers>
                        <form onSubmit={(e) => this.submit(e)}>
                            {this.state.showErrors ? (
                                <p style={{ color: "#ca6666" }}>Wrong password</p>
                            ) : (undefined)}
                            <div className={"container__row"}>
                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"pass"}>Password:</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"password"}
                                        name={"pass"}
                                        id={"pass"}
                                        value={this.state.pass}
                                        placeholder={"Enter password..."}
                                        onChange={(e) => this.setState({ pass: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type={"submit"} className={"btn btn__primary"}>Submit</button>
                        </form>
                    </Containers>
                )}

                <Footer />
            </div>
        );
    }

    private submit(e: any): void {
        if(this.state.pass === paz) {
            this.setState({
                showAdmin: true,
                showErrors: false
            });
        } else {
            this.setState({ showErrors: true });
        }
        e.preventDefault();
    }
}
