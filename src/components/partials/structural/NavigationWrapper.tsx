import * as React from "react";
import { Navigation, NavigationProps } from "src/components/partials/structural/Navigation";
import { AdminNavigation } from "src/components/partials/structural/AdminNavigation";

interface Props extends NavigationProps {
    isPublic: boolean;
}

interface State {

}

export class NavigationWrapper extends React.Component<Props, State> {
    public static defaultProps = {
        isPublic: false
    };

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className={"container container__hero inside"}>
                <div className={"container__inner container__no-padding"}>
                    {this.props.isPublic ? (
                        <Navigation {...this.props} />
                    ) : (
                        <AdminNavigation {...this.props} />
                    )}
                </div>
            </div>
        );
    }
}
