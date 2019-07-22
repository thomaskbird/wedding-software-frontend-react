import * as React from "react";
import "./CustomSelect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CustomSelectItem {
    val: string | number;
    text: string;
}

interface Props {
    onChange(newVal: CustomSelectItem): void;
    selected: CustomSelectItem | undefined;
    list: CustomSelectItem[];
}

interface State {
    isOpen: boolean;
}

export class CustomSelect extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            isOpen: false
        };
    }

    public render(): JSX.Element {
        return (
            <div className={"CustomSelect"}>
                <input type={"hidden"} name={"CustomSelect"} id={"CustomSelect"} value={this.props.selected && this.props.selected.val || ""} />
                <div className={"CustomSelect__dropdown-wrapper"}>
                    <div
                        className={"CustomSelect__dropdown-wrapper--trigger"}
                        onClick={() => this.setState({ isOpen: !this.state.isOpen})}
                    >
                        <span className={"CustomSelect__dropdown-wrapper--trigger--text"}>{this.props.selected && this.props.selected.text || ""}</span>
                        <span className={"CustomSelect__dropdown-wrapper--trigger--icon"}>
                            <FontAwesomeIcon
                                icon={this.state.isOpen ? "chevron-up" : "chevron-down"}
                            />
                        </span>
                    </div>
                    <div className={this.state.isOpen ? "CustomSelect__dropdown-wrapper--list open" : "CustomSelect__dropdown-wrapper--list"}>
                        {this.props.list.map((item, i) => (
                            <div
                                key={i}
                                className={"CustomSelect__dropdown-wrapper--list-item"}
                                onClick={() => {
                                    this.setState({ isOpen: !this.state.isOpen });
                                    this.props.onChange(item);
                                }}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
