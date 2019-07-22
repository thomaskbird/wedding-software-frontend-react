import * as React from "react";
import { Navigation, NavigationProps } from "src/components/partials/structural/Navigation";

interface Props extends NavigationProps {

}

interface State {

}

export class NavigationWrapper extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className={"container container__hero inside"}>
                <div className={"container__inner container__no-padding"}>
                    <Navigation {...this.props} />
                </div>
            </div>
        );
    }
}
