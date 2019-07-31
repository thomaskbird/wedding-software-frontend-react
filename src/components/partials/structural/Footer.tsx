import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { Navigation } from "src/components/partials/structural/Navigation";
import { Link } from "react-router-dom";

interface Props {

}

interface State {

}

export class Footer extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__footer"}
            >
                <div className={"container__row"}>
                    <div className={"column"}>
                        <Link className={"navbar__brand"} to={"/"}>
                            Grace + Tom
                        </Link>
                    </div>
                    <div className={"column"}>
                        <h6>Navigation</h6>

                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/p/big-day"}>The Big Day</Link></li>
                            <li><Link to={"/p/venue"}>Venue</Link></li>
                            <li><Link to={"/p/rsvp"}>RSVP</Link></li>
                            <li><Link to={"/p/bridal-party"}>Bridal Party</Link></li>
                            <li><Link to={"/p/accommodations"}>Accommodations</Link></li>
                            <li><Link to={"/p/music"}>Music</Link></li>
                            <li><Link to={"/p/registry"}>Registry</Link></li>
                            <li><Link to={"/p/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className={"column"}>
                        <h6>Registry</h6>

                        <ul>
                            <li><a target={"_blank"} href={"https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547146583?eventType=Wedding"}>Bed Bath & Beyond</a></li>
                            <li><a target={"_blank"} href={"http://www.target.com/gift-registry/gift/graceandtom"}>Target</a></li>
                            <li><a target={"_blank"} href={"https://www.amazon.com/wedding/share/graceandtom  "}>Amazon</a></li>
                        </ul>
                    </div>
                </div>
            </Containers>
        );
    }
}
