import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";

interface Props {

}

interface State {

}

export class AccommodationsPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h1>Accommodations page</h1>
            </Containers>
        );
    }
}
