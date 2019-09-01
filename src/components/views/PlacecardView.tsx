import * as React from "react";
import "./PlacecardView.scss";
import { axiosInstance } from "src/components/Root";
import * as _ from "lodash";
import { User } from "src/types/interfaces";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {
    guests: User[];
}

export class PlacecardView extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            guests: [],
        };
    }

    public componentDidMount(): void {
        this.refreshGuestList();
        analyticsSend("/admin/placecards");
    }

    private tables = [
        "Unassigned",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Head"
    ];

    public render(): JSX.Element {
        return (
            <div className="wrapper">
                {this.state.guests.length && this.state.guests.map((user) => (
                    <div className="placecard">
                        <div className="placecard__sign">
                            <p>{user.first_name} {user.last_name}</p>

                            <h2>
                                {user.table_number !== 0 ? "Table" : ""}
                                {this.tables[user.table_number]}
                            </h2>
                        </div>
                        <div className="placecard__sign">
                            <p>{user.first_name} {user.last_name}</p>

                            <h2>
                                {user.table_number !== 0 ? "Table" : ""}
                                {this.tables[user.table_number]}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    private refreshGuestList(): void {
        axiosInstance.get(`/guest-list`).then(response => {
            console.log("response", response.data);

            const guests = _.filter(response.data.guests, (user) => {
                return user.rsvp === "yes" && user.table_number !== 11;
            });

            this.setState({
                guests: guests,
            });
        });
    }
}
