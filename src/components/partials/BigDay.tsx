import * as React from "react";
import "./BigDay.scss";

import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";
import { TimelineMock, TimelineItem } from "src/mocks/Timeline";

interface Props {

}

interface State {
    timeline: TimelineItem[];
}

export class BigDay extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            timeline: TimelineMock
        };
    }

    public componentDidMount(): void {
        analyticsSend("/p/big-day");
    }

    public render(): JSX.Element {
        return (
            <Containers
                extraClasses={"container__big-day"}
            >
                <div className={"container__row"}>
                    <div className={"column column--flex-2"}>
                        <h2>Timeline of events</h2>

                        <p>As everybody knows when planning, not everything always goes according to plan, that being said we've tried to plan as best we can but some things may change. We'll try to keep this up to date as much as possible so that you can plan accordingly!</p>

                        {this.state.timeline.map(item => (
                            <div className={"timeline"} key={item.id}>
                                <div className={"timeline__time"}>
                                    <h5>{item.time} <span className={"timeline__time--title"}>{item.title}</span></h5>
                                </div>
                                <div className={"timeline__information"}>
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </Containers>
        );
    }
}
