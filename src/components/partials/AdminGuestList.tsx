import * as React from "react";
import "./AdminGuestList.scss";

import { axiosInstance } from "src/components/Root";
import { User } from "src/types/interfaces";
import { GuestMock } from "src/mocks/Guests";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {
    guests: User[];
}

export class AdminGuestList extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            guests: []
        };
    }

    public componentDidMount(): void {
        this.refreshGuestList();
        analyticsSend("/admin/guest-list");
    }

    private refreshGuestList(): void {
        axiosInstance.get(`/guest-list`).then(response => {
            console.log("response", response.data);
            this.setState({
                guests: response.data.guests,
            });
        });
    }
    public render(): JSX.Element {
        return (
            <Containers>
                <div className={"GuestList__wrapper"}>
                    <h2>Guest List</h2>
                    <div className={"GuestList"}>
                        <table>
                            <thead>
                                <tr className={"GuestList__item GuestList__item--header"}>
                                    <th className={"GuestList__item--column"}>ID:</th>
                                    <th className={"GuestList__item--column"}>Name:</th>
                                    <th className={"GuestList__item--column"}>City/State:</th>
                                    <th className={"GuestList__item--column"}>Email:</th>
                                    <th className={"GuestList__item--column"}>Phone:</th>
                                    <th className={"GuestList__item--column"}>Is coming?</th>
                                    <th className={"GuestList__item--column"}>+1?</th>
                                    <th className={"GuestList__item--column"}>+1 Name</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.guests.map((guest, i) => (
                                <tr className={"GuestList__item"} key={i}>
                                    <td className={"GuestList__item--column"}>{i+1}</td>
                                    <td className={"GuestList__item--column"}>{guest.first_name} {guest.last_name}</td>
                                    <td className={"GuestList__item--column"}>{guest.city}/{guest.state}</td>
                                    <td className={"GuestList__item--column"}>{guest.email}</td>
                                    <td className={"GuestList__item--column"}>{guest.phone}</td>
                                    <td
                                        className={"GuestList__item--column"}
                                        onClick={() => this.toggleRsvpInfo(guest.id, "rsvp", guest.rsvp)}
                                    >
                                        {guest.rsvp ? guest.rsvp : "Hasn't responded"}
                                    </td>
                                    <td
                                        className={"GuestList__item--column"}
                                        onClick={() => this.toggleRsvpInfo(guest.id, "plus_one", guest.rsvp)}
                                    >
                                        {guest.rsvp ? `${guest.plus_one}` : "Hasn't responded"}
                                    </td>
                                    <td className={"GuestList__item--column"}>{guest.rsvp ? `${guest.plus_one_name}` : "Hasn't responded"}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Containers>
        )
    }

    private toggleRsvpInfo(
        userId: number,
        key: string,
        currentVal: any
    ): void {
        let newVal: any;
        switch(currentVal) {
            case "yes":
                newVal = "no";
            break;
            case "no":
                newVal = null;
            break;
            default:
                newVal = "yes";
            break;
        }

        const dataForRequest = {
            userId: userId,
            key: key,
            val: newVal
        };

        axiosInstance
            .post(`/admin-toggle-rsvp`, dataForRequest).then(response => {
            console.log("response", response.data);
            this.refreshGuestList();
        });
    }
}
