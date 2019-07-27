import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {

}

export class AccommodationsPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public componentDidMount(): void {
        analyticsSend("/p/accommodations");
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__AccommodationsPage"}
            >
                <h2>Accommodations</h2>
                <p>We know some of you are travelling a long ways to be here for this special day, we have group rates booked with the following vendor, all you have to do is call and give them our name during the booking process!</p>

                <div className={"container__row"}>
                    <div className={"column column--flex-2"}>

                        <h6 className={"text--no-margin"}><a target="_blank" href={"https://www.marriott.com/events/start.mi?id=1564087156903&key=GRP"}>Courtyard by Marriott Detroit Livonia</a></h6>
                        <p className={"text--no-margin"}>17200 N Laurel Park Dr, Livonia, MI 48152</p>
                        <p>To book via the web go to the website, just follow this link: <a target="_blank" href={"https://www.marriott.com/events/start.mi?id=1564087156903&key=GRP"}>Courtyard by Marriott Detroit Livonia</a> and follow the onscreen instructions, the rate is good from 2019-09-25 - 2019-09-30.</p>
                        <p>Please book by <b>September 6th, 2019</b> to receive the group rate of $109. Just call this number 734-462-2000 and supply them with group <b>Choi Bird Wedding Room Block</b>, group rate includes free shuttle service to & from the venue.</p>

                        <hr/>

                        <p>You may also try this source <a target={"_blank"} href={"https://www.hotwire.com/hotels/results/Novi%252C%2520Michigan%252C%2520United%2520States%2520of%2520America/09-28-2019/09-29-2019/1/2/0"}>Hotwire</a> which as of 2019-07-23 had rooms for $77/per night. With this source you get a guaranteed star rating and area at a highly discounted rate, you won't know the exact hotel though until you've booked the room. Please note: You will not have the free shuttle service using this option to and from the venue.</p>
                    </div>

                    <div className={"AccommodationsPage__map column"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d377048.31128737406!2d-83.68128792117335!3d42.41304725278242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bd04df29f9d57e8!2sCourtyard+by+Marriott+Detroit+Livonia!5e0!3m2!1sen!2sus!4v1563895431230!5m2!1sen!2sus"
                        />
                    </div>
                </div>
            </Containers>
        );
    }
}
