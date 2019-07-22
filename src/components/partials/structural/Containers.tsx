import * as React from "react";

interface Props {
    extraClasses?: string;
    extraInnerClasses?: string;
    hasInnerContainer?: boolean;
    children?: React.ReactNode;
}

const Containers = (props: Props) => {
    return props.hasInnerContainer ? (
        <div className={`container ${props.extraClasses ? props.extraClasses : ""}`}>
            <div className={`container__inner ${props.extraInnerClasses ? props.extraInnerClasses : ""}`}>
                {props.children}
            </div>
        </div>
    ) : (
        <div className={`container ${props.extraClasses ? props.extraClasses : ""}`}>
            {props.children}
        </div>
    );
};

Containers.defaultProps = {
    hasInnerContainer: true,
};

export { Containers };
