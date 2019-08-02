import * as React from "react";
import "./TextInputToggler.scss";

interface Props {
    identifier: string;
    val?: string | null;
    onSubmit(val: string): void;
}

interface State {
    isEditing: boolean;
    val: string | undefined;
}

export class TextInputToggler extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            val: this.props.val !== null ? this.props.val : "",
            isEditing: false
        };
    }

    public render(): JSX.Element {
        return this.state.isEditing ? (
            <div className={"FormGroup FormGroup__toggler"}>
                <input
                    className={"FormGroup__input"}
                    type={"text"}
                    name={this.props.identifier}
                    id={this.props.identifier}
                    value={this.state.val}
                    placeholder={`Enter ${this.props.identifier}...`}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                    onChange={(e) => this.setState({ val: e.target.value })}
                />
            </div>
        ) : (
            <div className={"FormGroup__display"} onDoubleClick={() => this.setState({ isEditing: !this.state.isEditing})}>{this.props.val}</div>
        );
    }

    private handleKeyDown(e: any): void {
        if(e.keyCode === 13) {
            this.props.onSubmit(this.state.val!);
            this.setState({ isEditing: false });
        }
    }
}
