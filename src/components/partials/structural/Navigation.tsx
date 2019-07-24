import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface NavigationProps {
    showNav: boolean;
    onToggleNavigation(): void;
}

interface State {

}

export class Navigation extends React.Component<NavigationProps, State> {
    constructor(props: NavigationProps, context:any) {
        super(props, context);

        this.state = {
            showNav: false
        };
    }

    public render(): JSX.Element {
        return (
            <div className={"navbar"}>
                <Link className={"navbar__brand"} to={"/"}>
                    Grace + Tom
                </Link>
                <div className={"navbar__wrapper"}>
                    <div
                        className={"navbar__mobile"}
                        onClick={() => this.props.onToggleNavigation()}
                    >
                        <FontAwesomeIcon icon={"bars"} />
                    </div>
                    <div className={this.props.showNav ? "navbar__navigation open" : "navbar__navigation"}>
                        <ul>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/"}>Home</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/venue"}>Venue</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/rsvp"}>RSVP</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/bridal-party"}>Bridal Party</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/accommodations"}>Accommodations</Link></li>
                            {/* <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/music"}>Music</Link></li> */}
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/p/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
