import * as React from "react";

interface Props {
    onFilterData(key: string, val: any): void;
    currentVal: any;
}

interface State {

}

export class AdminGuestListFilters extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className={"filters"}>
                <div className="filters__column">
                    Filters
                </div>
                <div
                    className={`filters__column ${this.props.currentVal === "all" ? "active" : ""}`}
                    onClick={() => this.props.onFilterData("default", "all")}
                >
                    All
                </div>
                <div
                    className={`filters__column ${this.props.currentVal === "yes" ? "active" : ""}`}
                    onClick={() => this.props.onFilterData("rsvp", "yes")}
                >
                    Attending
                </div>
                <div
                    className={`filters__column ${this.props.currentVal === "no" ? "active" : ""}`}
                    onClick={() => this.props.onFilterData("rsvp", "no")}
                >
                    Not attending
                </div>
                <div
                    className={`filters__column ${this.props.currentVal === null ? "active" : ""}`}
                    onClick={() => this.props.onFilterData("rsvp", null)}
                >
                    Hasn't Responded
                </div>
            </div>
        );
    }
}
