import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {

}

export class VenuePage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public componentDidMount(): void {
        analyticsSend("/p/venue");
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__venue"}
            >
                <div className={"container__row"}>
                    <div className={"column column--flex-2"}>

                        <img className={"image__decoration"} src={"http://api.graceandtom.com/img/ceremony-room.jpg"} />

                        <p>Laurel Manor is located in Livonia, MI, it's conveniently close to the <a target="_blank" href="https://www.google.com/maps/place/Detroit+Metropolitan+Wayne+County+Airport/@42.2161762,-83.3575729,17z/data=!3m1!4b1!4m5!3m4!1s0x883b4f5ddaf0b305:0x2341c0cf25bf98fb!8m2!3d42.2161722!4d-83.3553842">Detroit Metro Airport</a> only a 20min drive from the venue. Both the ceremony and reception will be held there, the ceremony room is upstairs and for the reception we will be downstairs in the Maple Room.</p>

                        <p>Doors will be open for seating at 2:30pm we ask that everyone please be seated by no later than 3:45pm. Right in the middle of the building is an elevator which you can also use to get up and down between the venues. The venue will be open for our use until 9:30pm, any personal items will need to be cleared out by then from all spaces, additionally any forgotten items will be disposed of by the venue staff if not claimed by the end of the night.</p>
                    </div>

                    <div className={"AccommodationsPage__map column"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377231.1527214925!2d-83.67139325244706!3d42.38262457525431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x679ffbad58d3347e!2sLaurel+Manor!5e0!3m2!1sen!2sus!4v1563895321053!5m2!1sen!2sus"
                        />

                        <h6>Laurel Manor Banquet & Conference Center</h6>
                        <p className={"text--no-margin"}>39000 Schoolcraft, Livonia, MI 48150</p>
                    </div>
                </div>
            </Containers>
        );
    }
}
