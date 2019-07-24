import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {
    query: string;
}

export class MusicPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            query: ""
        };
    }

    public componentDidMount(): void {
        analyticsSend("/p/music");
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__music"}
            >
                <div className={"container__row"}>
                    <div className={"MusicPage__map column"}>
                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"name"}>Search:</label>
                            <input
                                className={"FormGroup__input"}
                                type={"text"}
                                name={"search"}
                                id={"search"}
                                value={this.state.query}
                                placeholder={"Enter an artist or song..."}
                                onChange={(e) => this.setState({ query: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={"column column--flex-2"}>
                        <h4>Results...</h4>
                    </div>
                </div>
            </Containers>
        );
    }
}
