import "./HomeView.scss";
import * as React from "react";
import { axiosInstance } from "../Root";
import { Countdown } from "src/components/partials/Countdown";
import { Navigation } from "src/components/partials/structural/Navigation";
import { Containers } from "src/components/partials/structural/Containers";
import { User } from "src/types/interfaces";
import { analyticsSend } from "src/components/Helpers";
import { Footer } from "src/components/partials/structural/Footer";
import { Link } from "react-router-dom";

/**
 * Props interface for {@link Root}.
 */
interface Props {}

/**
 * State interface for {@link Root}.
 */
interface State {
    showNav: boolean;
    showModal: boolean;
    modalImageUrl: string | undefined;
    bridalParty: User[] | undefined;
    brideGroom: User[] | undefined;
}

export class HomeView extends React.Component<Props, State> {
    private galleryImageCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            showNav: false,
            showModal: false,
            modalImageUrl: undefined,
            bridalParty: undefined,
            brideGroom: undefined,
        };
    }

    public componentDidMount(): void {
        axiosInstance.get(`/page/home`).then(response => {
            this.setState({
                bridalParty: response.data.bridalParty,
                brideGroom: response.data.brideGroom
            });

            analyticsSend("/");
        });
    }

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <div className={"wrapper"}>
                <Containers
                    extraClasses={"container__hero"}
                    extraInnerClasses={"container__no-padding"}
                >
                    <Navigation
                        showNav={this.state.showNav}
                        onToggleNavigation={() => this.setState({ showNav: !this.state.showNav })}
                    />

                    <div className={"container__hero__headline"}>
                        <span>
                            September 28th, 2019 at 3:30pm
                        </span>
                    </div>
                </Containers>

                <Containers
                    extraClasses={"container__venue blue"}
                >
                    <div className={"column text--center"}>
                        <h2>Venue</h2>
                        <div className={"header__divider header__divider--white"} />

                        <p><b>Wedding & Reception at:</b><br/>
                            Laurel Manor Banquet & Conference Center<br/>
                            39000 Schoolcraft, Livonia, MI 48150</p>
                    </div>
                </Containers>

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

                <Containers
                    extraClasses={"container__countdown text--center"}
                >
                    <Countdown date={`2019-09-28T15:30:00`} />
                    <h2>The countdown has begun!</h2>
                    <h5>September 28th, 2019 at 3:30pm</h5>

                    <Link className={"btn btn__transparent btn__more-padding btn__rounded-corners"} to={"/p/rsvp"}>RSVP</Link>
                </Containers>

                <div className={"container container__map"}>
                    <iframe
                        className={"map__iframe"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.1235813725502!2d-83.42844028454303!3d42.38251377918533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x679ffbad58d3347e!2sLaurel+Manor!5e0!3m2!1sen!2sus!4v1562639625129!5m2!1sen!2sus"
                        frameBorder="0"
                        allowFullScreen={true}
                    />
                </div>

                <Containers
                    extraClasses={"container__gallery"}
                    hasInnerContainer={false}
                >
                    {this.galleryImageCount.map((e: any, i: any) => (
                        <div className={"thumbnail"} key={i}>
                            <img
                                src={`http://api.graceandtom.com/gallery/image-${i+1}.jpg`}
                                onClick={() => {
                                    this.setState({
                                        showModal: true,
                                        modalImageUrl: `image-${i+1}.jpg`
                                    });
                                }}
                            />
                        </div>
                    ))}

                    <div className={"gallery__text"}>
                        <h2>Gallery</h2>
                    </div>
                </Containers>

                <Footer/>

                <div
                    className={`${
                        this.state.showModal
                            ? "container container__image-modal text--center open"
                            : "container container__image-modal text--center"
                        }`}
                    onClick={() => {
                        this.setState({ showModal: false });
                    }}
                >
                    <img src={`http://api.graceandtom.com/gallery/${this.state.modalImageUrl}`}/>
                </div>
            </div>
        );
    }
}
