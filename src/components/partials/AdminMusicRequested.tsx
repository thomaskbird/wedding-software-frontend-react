import * as React from "react";
import "./AdminGuestList.scss";

import { axiosInstance } from "src/components/Root";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";
import { Song } from "src/types/interfaces";

interface Props {

}

interface State {
    songs: Song[] | undefined;
}

export class AdminMusicRequested extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            songs: undefined,
        };
    }

    public componentDidMount(): void {
        analyticsSend("/admin/music-requested");
        this.refreshSongs();
    }

    private refreshSongs(): void {
        axiosInstance.get(`/music-requested`).then(response => {
            this.setState({
                songs: response.data.data.songs
            });
        });
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <div className={"GuestList"}>
                    <table>
                        <thead>
                        <tr className={"GuestList__item GuestList__item--header"}>
                            <th className={"GuestList__item--column"}>ID:</th>
                            <th className={"GuestList__item--column"}>Artist:</th>
                            <th className={"GuestList__item--column"}>Song:</th>
                            <th className={"GuestList__item--column"}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!this.state.songs ? (
                            <tr className={"GuestList__item"}>
                                <td colSpan={3}>No records</td>
                            </tr>
                        ): (undefined)}
                        {this.state.songs && this.state.songs.map((song, i) => (
                            <tr className={"GuestList__item"} key={i}>
                                <td className={"GuestList__item--column"}>{i+1}</td>
                                <td className={"GuestList__item--column"}>{song.artist}</td>
                                <td className={"GuestList__item--column"}>{song.song}</td>
                                <td
                                    className={"GuestList__item--column"}
                                    onClick={() => {
                                        this.toggleApproval(song);
                                    }}
                                >
                                    {song.id}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Containers>
        );
    }

    private toggleApproval(song: Song): void {
        let val: string | null = null;
        switch(song.approved) {
            case null:
                val = "yes";
            break;
            case "yes":
                val = "no";
            break;
        }
        axiosInstance.get(`/toggle-approval/${song.id}/${val}`).then(response => {
            console.log("response", response);
            this.refreshSongs();
        });
    }
}
