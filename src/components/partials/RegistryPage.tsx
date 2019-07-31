import * as React from "react";
import { Containers } from "src/components/partials/structural/Containers";
import { analyticsSend } from "src/components/Helpers";

interface Props {

}

interface State {

}

export class RegistryPage extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {};
    }

    public componentDidMount(): void {
        analyticsSend("/p/registry");
    }

    public render(): JSX.Element {
        return (
            <Containers>
                <h2>Registry</h2>
                <p>We're so glad that you are able to join us and celebrate, honestly thats enough by itself but if you do decide to get us something we have created three registrys to make it easy</p>

                <ul>
                    <li><a target={"_blank"} href={"https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547146583?eventType=Wedding"}>Bed Bath & Beyond</a></li>
                    <li><a target={"_blank"} href={"http://www.target.com/gift-registry/gift/graceandtom"}>Target</a></li>
                    <li><a target={"_blank"} href={"https://www.amazon.com/wedding/share/graceandtom  "}>Amazon</a></li>
                </ul>
            </Containers>
        );
    }
}
