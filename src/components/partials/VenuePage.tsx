import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {

}

export class VenuePage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public componentDidMount(): void {
        analyticsSend("/p/venue");
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h1>Venue</h1>
            </Containers>
        );
    }
}
