import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend, isTruthy } from "src/components/Helpers";
import { axiosInstance } from "src/components/Root";
import { Link } from "react-router-dom";

interface Props {

}

interface SongRequest {
    artist: string;
    song: string;
}

interface State {
    artist: string;
    song: string;
    isErrors: boolean;
    isSubmitted: boolean;
    submittedData: SongRequest | undefined;
}

export class MusicPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            artist: "",
            song: "",
            isErrors: false,
            isSubmitted: false,
            submittedData: undefined,
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

                        {this.state.isErrors ? (
                            <div className={"rsvp__errors"}>
                                Uh oh, something went wrong, you may not have entered the required information or something might have happened on the backend please try again!
                            </div>
                        ): (undefined)}

                        {this.state.submittedData ? (
                            <div className={"rsvp__success"}>
                                Your song <b>{this.state.submittedData.song}</b> by <b>{this.state.submittedData.artist}</b> was successfully requested! You can request another!
                            </div>
                        ): (undefined)}

                        <h2>Music Request</h2>

                        <p>Have a favorite song, have a song that reminds you of some memory with us, request it hear. We'll do our best to make sure that the dj gets all requested songs but can't make any guarantees it'll be played.</p>

                        <form onSubmit={(e) => this.submit(e)}>
                            <div className={"container__row"}>
                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"name"}>Artist</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"text"}
                                        name={"artist"}
                                        id={"artist"}
                                        value={this.state.artist}
                                        placeholder={"Enter your artist..."}
                                        onChange={(e) => this.setState({ artist: e.target.value })}
                                    />
                                </div>

                                <div className={"FormGroup"}>
                                    <label className={"FormGroup__label"} htmlFor={"song"}>Song:</label>
                                    <input
                                        className={"FormGroup__input"}
                                        type={"text"}
                                        name={"song"}
                                        id={"song"}
                                        value={this.state.song}
                                        placeholder={"Enter song..."}
                                        onChange={(e) => this.setState({ song: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type={"submit"} className={"btn btn__primary"}>Request Song</button>
                        </form>
                    </div>
                </div>
            </Containers>
        );
    }

    private submit(e: any): void {
        this.setState({ isErrors: false });
        if(isTruthy(this.state.artist) && isTruthy(this.state.song)) {
            const dataForRequest = {
                artist: this.state.artist,
                song: this.state.song
            };

            axiosInstance
                .post(`/song-request`, dataForRequest).then(response => {
                console.log("response", response.data);
                this.setState({
                    isErrors: false,
                    isSubmitted: true,
                    artist: "",
                    song: "",
                    submittedData: {
                        artist: response.data.data.song.artist,
                        song: response.data.data.song.song
                    }
                });
            });
        } else {
            this.setState({ isErrors: true });
        }
        e.preventDefault();
    }
}
