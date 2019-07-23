import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";

interface Props {

}

interface State {

}

export class Footer extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__footer"}
            >
                <div className={"column"}>
                    &copy; 2019 All Rights Reserved
                </div>
                <div className={"column"}>

                </div>
                <div className={"column"}>

                </div>
            </Containers>
        );
    }
}
