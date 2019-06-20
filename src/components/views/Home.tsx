import "./Home.scss";
import * as React from "react";

/**
 * Props interface for {@link Root}.
 */
interface Props {}

/**
 * State interface for {@link Root}.
 */
interface State {}

export class Home extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <div className={"Root"}>
                <h1>Boilerplate Root Element</h1>
            </div>
        );
    }
}
