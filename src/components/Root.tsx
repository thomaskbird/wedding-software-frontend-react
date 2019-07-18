import "./Root.scss";
import * as React from "react";
import { Countdown } from "src/components/partials/Countdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faBars,
);

/**
 * Props interface for {@link Root}.
 */
interface Props {}

/**
 * State interface for {@link Root}.
 */
interface State {
    password: string;
    showSite: boolean;
    showNav: boolean;
    showModal: boolean;
    modalImageUrl: string | undefined;
}

/**
 * Root is wrapped in the withRouter() Higher Order Component to allow for dynamic routing. This works by exposing the
 * "history" object that allows for pushing a new route to the browser history. Within Root, we are doing this through
 * the routePage() function and assigning it as a callback where needed.
 */
export class Root extends React.Component<Props, State> {
    /**
     * @inheritDoc
     */
    public constructor(props: Props, context?: any) {
        super(props, context);

        // Update the State with all the default values needed
        this.state = {
            password: "",
            showSite: false,
            showNav: false,
            showModal: false,
            modalImageUrl: undefined
        };
    }

    private galleryImageCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    /**
     * @inheritDoc
     */
    public render(): JSX.Element {
        return (
            <>
                {!this.state.showSite ? (
                    <>
                        <input type={"text"} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        <button type="button" onClick={() => this.checkPassword()}>Submit</button>
                    </>
                ): (undefined)}
                <div className={this.state.showSite ? "wrapper visible" : "wrapper"}>
                    <div className={"container container__hero"}>
                        <div className={"container__inner container__no-padding"}>
                            <div className={"navbar"}>
                                <Link className={"navbar__brand"} to={"/"}>
                                    Grace + Tom
                                </Link>
                                <div className={"navbar__wrapper"}>
                                    <div
                                        className={"navbar__mobile"}
                                        onClick={() => {
                                            this.setState({ showNav: !this.state.showNav });
                                        }}
                                    >
                                        <FontAwesomeIcon icon={"bars"} />
                                    </div>
                                    <div className={this.state.showNav ? "navbar__navigation open" : "navbar__navigation"}>
                                        <ul>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/"}>Home</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/venue"}>Venue</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/rsvp"}>RSVP</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/bridal-party"}>Bridal Party</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/accommodations"}>Accommodations</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/music"}>Music</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/directions"}>Directions</Link></li>
                                            <li><Link onClick={() => this.setState({ showNav: false })} to={"/contact"}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={"container__hero__headline"}>
                                <span>
                                    September 28th, 2019 at 3:30pm
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={"container container__venue"}>
                        <div className={"container__inner"}>
                            <div className={"column text--center"}>
                                <h2>Venue</h2>
                                <div className={"header__divider header__divider--white"} />

                                <p><b>Wedding & Reception at:</b><br/>
                                    Laurel Manor Banquet & Conference Center<br/>
                                    39000 Schoolcraft, Livonia, MI 48150</p>
                            </div>
                        </div>
                    </div>

                    <div className={"container container__meet-the-couple"}>
                        <div className={"container__inner"}>
                            <div className={"container__row"}>
                                <div className="column__full text--center">
                                    <h2>Meet the couple!</h2>
                                    <div className={"header__divider header__divider--grey"} />
                                    <p>Tom always said from day one, if that girl gives me a chance, "I'll make her mine forever!" He got that chance and now here we are counting days till we profess our love before family and friends. We're extremely excited to see and share with our family and friends the joy we both feel, the website contains alot of helpful information but if there is any other questions please feel to reach out to us personally!</p>
                                </div>
                            </div>
                            <div className={"container__row bride--groom"}>
                                <div className={"column text--center"}>
                                    <div className={"profile__image"}>
                                        <img src={"/public/img/bride.jpg"} />
                                    </div>
                                    <h2>Grace Choi</h2>
                                    <h4>The Bride</h4>
                                    <p>Grace was born in Toledo, Ohio, unfortunately. Haha, Just kidding, just a little Michigan vs Ohio humor. As many of you know Grace is an extremely loving person who shows it through her work as a teacher impacting those she interacts with on a daily basis.</p>
                                </div>
                                <div className={"column text--center"}>
                                    <div className={"profile__image"}>
                                        <img src={"/public/img/groom.jpg"} />
                                    </div>
                                    <h2>Thomas Bird</h2>
                                    <h4>The Groom</h4>
                                    <p>Thomas was born in Seoul, South Korea and adopted by the Bird family in Michigan where he has resided for most his life. He's an avid software programmer, designer, photography & video enthusiasts and loves hockey.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"container container__meet-the-bridal-party"}>
                        <div className={"container__inner"}>
                            <div className={"container__row"}>
                                <div className="column__full text--center">
                                    <h2>The bridal party!</h2>
                                    <div className={"header__divider header__divider--grey"} />
                                    <p>We, Thomas and Grace, are extremely lucky to have so many great individuals to share this occasion with. We couldn't be happier to have who we have standing beside us for this event and far beyond. Throughout their life they've been there by our sides, it's only fitting they be there by our sides for this special day!</p>
                                </div>
                            </div>
                            <div className={"container__row bridal"}>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/bridesmaid-james.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>The Man of Honor</h3>
                                            <h5>James Choi</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/groomsmen-kyle.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>The Best Man</h3>
                                            <h5>Kyle Lucas</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/bridesmaid-lauren.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>Bridesmaid</h3>
                                            <h5>Lauren Boraggina</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/groomsmen-joey.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>Groomsmen</h3>
                                            <h5>Joey Genovese</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/bridesmaid-mandy.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>Bridesmaid</h3>
                                            <h5>Mandy Phillips</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/groomsmen-stefan.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>Groomsmen</h3>
                                            <h5>Stefan Munck</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={"bridal__party"}>
                                    <div className={"container__row"}>
                                        <div className={"bridal__party--image"}>
                                            <img src={"/public/img/bridesmaid-lola.jpg"} />
                                        </div>
                                        <div className={"bridal__party--text"}>
                                            <h3>Bridesmaid</h3>
                                            <h5>Lola Massenberg</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={"container container__countdown text--center"}>
                        <div className={"container__inner"}>
                            <Countdown date={`2019-09-28T15:30:00`} />
                            <h2>The countdown has begun!</h2>
                            <h5>September 28th, 2019 at 3:30pm</h5>
                        </div>
                    </div>

                    <div className={"container container__map"}>
                        <iframe
                            className={"map__iframe"}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.1235813725502!2d-83.42844028454303!3d42.38251377918533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x679ffbad58d3347e!2sLaurel+Manor!5e0!3m2!1sen!2sus!4v1562639625129!5m2!1sen!2sus"
                            frameBorder="0"
                            allowFullScreen={true}
                        />
                    </div>

                    <div className={"container container__gallery"}>

                        {this.galleryImageCount.map((e: any, i: any) => (
                            <div className={"thumbnail"} key={i}>
                                <img
                                    src={`/public/gallery/image-${i+1}.jpg`}
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

                    </div>

                    <div className={"container container__footer"}>
                        <div className={"container__inner"}>
                            <div className={"column"}>
                                &copy; 2019 All Rights Reserved
                            </div>
                            <div className={"column"}>

                            </div>
                            <div className={"column"}>

                            </div>
                        </div>
                    </div>

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
                        <img src={`/public/gallery/${this.state.modalImageUrl}`}/>
                    </div>
                </div>
            </>
        );
    }

    private checkPassword(): void {
        if(this.state.password === "seoul1984") {
            this.setState({ showSite: true });
        }
    }
}
