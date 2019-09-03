import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationProps } from "src/components/partials/structural/Navigation";

interface State {

}

export class AdminNavigation extends React.Component<NavigationProps, State> {
    constructor(props: NavigationProps, context:any) {
        super(props, context);

        this.state = {};
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
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/admin/guest-list"}>Guest List</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/admin/music-requested"}>Requested songs</Link></li>
                            <li><Link onClick={() => this.props.onToggleNavigation()} to={"/print/placecards"}>Placecards</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
