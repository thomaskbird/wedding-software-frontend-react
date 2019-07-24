import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend, isTruthy } from "src/components/Helpers";
import { axiosInstance } from "src/components/Root";

interface Props {

}

interface State {
    name: string | undefined;
    phone: string | undefined;
    email: string | undefined;
    subject: string | undefined;
    message: string | undefined;
    isErrors: boolean;
}

export class ContactPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            isErrors: false
        };
    }

    public componentDidMount(): void {
        analyticsSend("/p/contact");
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h2>Send us a message</h2>
                <p>If you need anymore information or we have missed putting anything up here on the website please feel free to send us a message and let us know. We greatly appreciate it, sometimes we miss things and would love to fix it!</p>

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
                                placeholder={"Enter your name..."}
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                        </div>

                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"phone"}>Phone</label>
                            <input
                                className={"FormGroup__input"}
                                type={"text"}
                                name={"phone"}
                                id={"phone"}
                                value={this.state.phone}
                                placeholder={"Enter your phone number..."}
                                onChange={(e) => this.setState({ phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={"container__row"}>
                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"email"}>Email</label>
                            <input
                                className={"FormGroup__input"}
                                type={"text"}
                                name={"email"}
                                id={"email"}
                                value={this.state.email}
                                placeholder={"Enter your email..."}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>

                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"subject"}>Subject</label>
                            <input
                                className={"FormGroup__input"}
                                type={"text"}
                                name={"subject"}
                                id={"subject"}
                                value={this.state.subject}
                                placeholder={"Enter your subject..."}
                                onChange={(e) => this.setState({ subject: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={"container__row"}>
                        <div className={"FormGroup"}>
                            <label className={"FormGroup__label"} htmlFor={"message"}>Message</label>
                            <textarea
                                className={"FormGroup__input"}
                                name={"message"}
                                id={"message"}
                                value={this.state.message}
                                placeholder={"Enter your message..."}
                                onChange={(e) => this.setState({ message: e.target.value })}
                            />
                        </div>
                    </div>

                    <button type={"submit"} className={"btn btn__primary"}>Send message</button>
                </form>
            </Containers>
        );
    }

    private submit(e: any): void {
        this.setState({ isErrors: false });
        if(isTruthy(this.state.name) && isTruthy(this.state.phone) && isTruthy(this.state.message)) {
            const dataForRequest = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                sub: this.state.subject,
                msg: this.state.message
            };

            axiosInstance
                .post(`/contact`, dataForRequest).then(response => {
                    console.log("response", response.data);
                    // this.setState({ isSubmitted: true });
                });
        } else {
            this.setState({ isErrors: true });
        }

        e.preventDefault();
    }
}
