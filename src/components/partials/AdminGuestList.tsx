import * as React from "react";
import "./AdminGuestList.scss";

import { axiosInstance } from "src/components/Root";
import { User } from "src/types/interfaces";
import { Containers } from "src/components/partials/structural/Containers";

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
                                    <th className={"GuestList__item--column"}>Plus one?</th>
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
                                    <td className={"GuestList__item--column"}>{guest.rsvp}</td>
                                    <td className={"GuestList__item--column"}>{guest.plus_one} - {guest.plus_one_name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Containers>
        )
    }
}
