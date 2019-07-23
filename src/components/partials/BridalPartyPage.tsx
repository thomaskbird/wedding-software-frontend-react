import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";
import { User } from "src/types/interfaces";
import { axiosInstance } from "src/components/Root";

interface Props {

}

interface State {
    bridalParty: User[] | undefined;
    brideGroom: User[] | undefined;
}

export class BridalPartyPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            bridalParty: undefined,
            brideGroom: undefined,
        };
    }

    public componentDidMount(): void {
        analyticsSend("/p/bridal-party");

        axiosInstance.get(`/page/home`).then(response => {
            this.setState({
                bridalParty: response.data.bridalParty,
                brideGroom: response.data.brideGroom
            });

            analyticsSend("/");
        });
    }

    public render(): JSX.Element {
        return (
            <>
                <Containers
                    extraClasses={"container__meet-the-couple"}
                >
                    <div className={"container__row"}>
                        <div className="column__full text--center">
                            <h2>Meet the couple!</h2>
                            <div className={"header__divider header__divider--grey"} />
                            <p>Tom always said from day one, if that girl gives me a chance, "I'll make her mine forever!" He got that chance and now here we are counting days till we profess our love before family and friends. We're extremely excited to see and share with our family and friends the joy we both feel, the website contains alot of helpful information but if there is any other questions please feel to reach out to us personally!</p>
                        </div>
                    </div>
                    <div className={"container__row bride--groom"}>
                        {this.state.brideGroom && this.state.brideGroom.map((user, i) => (
                            <div className={"column text--center"} key={i}>
                                <div className={"profile__image"}>
                                    <img src={`http://api.graceandtom.com${user.profile_image}`} />
                                </div>
                                <h2>{user.first_name} {user.last_name}</h2>
                                <h4>{user.title}</h4>
                                <p>{user.description}</p>
                            </div>
                        ))}
                    </div>
                </Containers>

                <Containers
                    extraClasses={"container__meet-the-bridal-party"}
                >
                    <div className={"container__row"}>
                        <div className="column__full text--center">
                            <h2>The bridal party!</h2>
                            <div className={"header__divider header__divider--grey"} />
                            <p>We, Thomas and Grace, are extremely lucky to have so many great individuals to share this occasion with. We couldn't be happier to have who we have standing beside us for this event and far beyond. Throughout their life they've been there by our sides, it's only fitting they be there by our sides for this special day!</p>
                        </div>
                    </div>
                    <div className={"container__row bridal"}>

                        {this.state.bridalParty && this.state.bridalParty.map((user, i) => (
                            <div className={"bridal__party"} key={i}>
                                <div className={"container__row"}>
                                    <div className={"bridal__party--image"}>
                                        <img src={`http://api.graceandtom.com${user.profile_image}`} />
                                    </div>
                                    <div className={"bridal__party--text"}>
                                        <h3>{user.title}</h3>
                                        <h5>{user.first_name} {user.last_name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </Containers>
            </>
        );
    }
}
