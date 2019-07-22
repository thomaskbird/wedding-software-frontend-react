import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";

interface Props {

}

interface State {

}

export class MusicPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h1>Music Page</h1>
            </Containers>
        );
    }
}
