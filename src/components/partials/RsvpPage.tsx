import * as React from "react";

import { axiosInstance } from "../Root";
import { Containers } from "src/components/partials/structural/Containers";
import { Link, RouteComponentProps } from "react-router-dom";
import { CustomSelect, CustomSelectItem } from "src/components/partials/CustomSelect";
import { analyticsSend, isTruthy } from "src/components/Helpers";

interface Props extends RouteComponentProps {

}

interface State {
    name: string | undefined;
    identifier: string | undefined;
    identifierDisabled: boolean;
    coming: CustomSelectItem;
    comingList: CustomSelectItem[];
    plusOne: CustomSelectItem;
    plusOneList: CustomSelectItem[];
    plusOneName?: string;
    isSubmitted: boolean;
    isErrors: boolean;
}

export class RsvpPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            name: "",
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
            ],
            plusOneName: "",
            isSubmitted: false,
            isErrors: false,
        };
    }

    public componentDidMount(): void {
        analyticsSend("/p/rsvp");
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
                {this.state.isErrors ? (
                    <div className={"rsvp__errors"}>
                        Uh oh, something went wrong, you may not have entered the required information or something might have happened on the backend please try again!
                    </div>
                ): (undefined)}

                {this.state.isSubmitted ? (
                    <div className={"rsvp__success"}>
                        {this.state.coming.val === "yes" ? (
                            <>
                                <h2>Awesome we're so excited to hear your coming!</h2>
                                <p>Thanks for taking the time to let us know you can make it, if you have time stop bye the <Link to={"/p/music"}>music page</Link> and request some songs! If you're needing accommodations for the night of the event there is a hotel right around the corner that has group pricing set up for us, just checkout the <Link to={"/p/accommodations"}>Accommodations page</Link> for more information.</p>
                            </>
                        ) : (
                            <>
                                <h2>We're sorry to hear your not able to make it.</h2>
                                <p>We hoped you could make it, but we understand life can be busy. If things change you can always come back here and update us!</p>
                            </>
                        )}
                    </div>
                ): (
                    <>
                        <h2>RSVP</h2>

                        <p>We're so excited to take the next step in our journey together, as our special guests who mean so much to us we're extremely excited to see and celebrate together. Do us a favor and use the form below to let us know whether you'll be attending and if you'll be having a plus one, Thanks!</p>
                        <p>Afterwards go checkout our <Link to={"/p/music"}>music page</Link>, where you can request songs to be played during the reception!</p>

                        <form onSubmit={(e) => this.submit(e)}>
                            <div className={"container__row"}>
                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"name"}>Name</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"text"}
                                        name={"name"}
                                        id={"name"}
                                        value={this.state.name}
                                        placeholder={"Enter your name... (optional)"}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </div>

                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"identifier"}>Phone</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"text"}
                                        name={"identifier"}
                                        id={"identifier"}
                                        disabled={this.state.identifierDisabled}
                                        value={this.state.identifier}
                                        placeholder={"Enter your phone number..."}
                                        onChange={(e) => this.setState({ identifier: e.target.value })}
                                    />
                                </div>
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

                            {this.state.plusOne.val === "yes" && this.state.coming.val === "yes" ? (
                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"plusOneName"}>Plus one's name</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"text"}
                                        name={"plusOneName"}
                                        id={"plusOneName"}
                                        value={this.state.plusOneName}
                                        placeholder={"Enter plus one's name..."}
                                        onChange={(e) => this.setState({ plusOneName: e.target.value })}
                                    />
                                </div>
                            ) : (undefined)}

                            <button type={"submit"} className={"btn btn__primary"}>RSVP</button>
                        </form>
                    </>
                )}
            </Containers>
        );
    }

    private submit(e: any): void {
        this.setState({ isErrors: false });
        if(isTruthy(this.state.identifier) && isTruthy(this.state.coming)) {
            const dataForRequest = {
                name: this.state.name,
                phone: this.state.identifier,
                coming: this.state.coming.val,
                plusOne: this.state.plusOne.val,
                plusOneName: this.state.plusOneName,
            };

            axiosInstance
                .post(`/rsvp-respond`, dataForRequest).then(response => {
                    console.log("response", response.data);
                    this.setState({ isSubmitted: true });
                });
        } else {
            this.setState({ isErrors: true });
        }
        e.preventDefault();
    }
}
