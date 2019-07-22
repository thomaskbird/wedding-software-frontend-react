import * as React from "react";

import { axiosInstance } from "../Root";
import { Containers } from "src/components/partials/structural/Containers";
import { Link, RouteComponentProps } from "react-router-dom";
import { CustomSelect, CustomSelectItem } from "src/components/partials/CustomSelect";
import { isTruthy } from "src/components/Helpers";

interface Props extends RouteComponentProps {

}

interface State {
    identifier: string | undefined;
    identifierDisabled: boolean;
    coming: CustomSelectItem;
    comingList: CustomSelectItem[];
    plusOne: CustomSelectItem;
    plusOneList: CustomSelectItem[];
}

export class RsvpPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            // @ts-ignore
            identifier: this.props.match && this.props.match.params && this.props.match.params.identifier && atob(this.props.match.params.identifier) || "",
            // @ts-ignore
            identifierDisabled: this.props.match && this.props.match.params && this.props.match.params.identifier && this.props.match.params.identifier ? true : false,
            coming: {
                val: "no",
                text: "No"
            },
            comingList: [
                {
                    val: "yes",
                    text: "Yes"
                },
                {
                    val: "no",
                    text: "No"
                }
            ],
            plusOne: {
                val: "no",
                text: "No"
            },
            plusOneList: [
                {
                    val: "yes",
                    text: "Yes"
                },
                {
                    val: "no",
                    text: "No"
                }
            ]
        };
    }

    public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(this.props.location && prevProps.location && this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                // @ts-ignore
                identifier: this.props.match && this.props.match.params && this.props.match.params.identifier && atob(this.props.match.params.identifier),
            });
        }
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h2>RSVP</h2>
                <p>{this.state.identifier === undefined ? "undefined" : this.state.identifier}</p>
                <p>We're so excited to take the next step in our journey together, as our special guests who mean so much to us we're extremely excited to see and celebrate together. Do us a favor and use the form below to let us know whether you'll be attending and if you'll be having a plus one, Thanks!</p>
                <p>Afterwards go checkout our <Link to={"/p/music"}>music page</Link>, where you can request songs to be played during the reception!</p>

                <form onSubmit={(e) => this.submit(e)}>
                    <div className={"FormGroup"}>
                        <label className={"FormGroup__label"} htmlFor={"identifier"}>Phone</label>
                        <input
                            className={"FormGroup__input"}
                            type={"text"}
                            name={"identifier"}
                            id={"identifier"}
                            disabled={this.state.identifierDisabled}
                            value={this.state.identifier}
                            onChange={(e) => this.setState({ identifier: e.target.value })}
                        />
                    </div>

                    <div className={"FormGroup"}>
                        <label className={"FormGroup__label"} htmlFor={"makeit"}>Are you going to be able to make it?</label>
                        <CustomSelect
                            onChange={(item) => this.setState({ coming: item })}
                            selected={this.state.coming}
                            list={this.state.comingList}
                        />
                    </div>

                    {this.state.coming.val === "yes" ? (
                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"plusOne"}>Do you have a plus one?</label>
                            <CustomSelect
                                onChange={(item) => this.setState({ plusOne: item })}
                                selected={this.state.plusOne}
                                list={this.state.plusOneList}
                            />
                        </div>
                    ) : (undefined)}

                    <button type={"submit"} className={"btn btn--primary"}>RSVP</button>
                </form>
            </Containers>
        );
    }

    private submit(e: any): void {
        if(isTruthy(this.state.identifier) && isTruthy(this.state.coming)) {
            const dataForRequest = {
                phone: this.state.identifier,
                coming: this.state.coming.val,
                plusOne: this.state.plusOne.val,
            };

            axiosInstance
                .post(`/rsvp-respond`, dataForRequest).then(response => {
                    console.log("response", response.data);
                });
        } else {
            console.log("failed");
        }

        e.preventDefault();
    }
}
