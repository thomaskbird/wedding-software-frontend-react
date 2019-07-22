import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {

}

export class BridalPartyPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public componentDidMount(): void {
        analyticsSend("/p/bridal-party");
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h1>Bridal Party</h1>
            </Containers>
        );
    }
}
