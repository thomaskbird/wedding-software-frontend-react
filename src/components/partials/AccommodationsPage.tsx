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
                    <div className={"column--flex-2"}>

                        <h6 className={"text--no-margin"}><a target="_blank" href={"https://www.marriott.com/hotels/travel/detlv-courtyard-detroit-livonia"}>Courtyard by Marriott Detroit Livonia</a></h6>
                        <p className={"text--no-margin"}>17200 N Laurel Park Dr, Livonia, MI 48152</p>
                    </div>

                    <div className={"AccommodationsPage__map column"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11782.781041886334!2d-83.418637!3d42.4129338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bd04df29f9d57e8!2sCourtyard+by+Marriott+Detroit+Livonia!5e0!3m2!1sen!2sus!4v1563831236197!5m2!1sen!2sus"
                        />
                    </div>
                </div>
            </Containers>
        );
    }
}
