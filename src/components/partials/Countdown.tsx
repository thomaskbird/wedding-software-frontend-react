import * as React from "react";
import "./Countdown.scss";

interface Props {
    date?: any;
}

interface State {
    years: number;
    days: number;
    hours: number;
    min: number;
    sec: number;
}

/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

export class Countdown extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);

        this.state = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    public static defaultProps: Props = {};

    private interval: any;

    public componentDidMount(): void {
        // update every second
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);

            if(date) {
                this.setState({
                    years: date.years,
                    days: date.days,
                    hours: date.hours,
                    min: date.min,
                    sec: date.sec,
                })
            } else {
                this.stop();
            }
        }, 1000);
    }

    public componentWillUnmount(): void {
        this.stop();
    }

    private calculateCountdown(endDate: any): any {
        // @ts-ignore
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) {
            return false;
        }

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    private stop(): void {
        clearInterval(this.interval);
    }

    private addLeadingZeros(value: string): string {
        value = String(value);
        while (value.length < 2) {
            value = `0 ${value}`;
        }
        return value;
    }

    public render(): JSX.Element {

        return (
            <div className="Countdown">
                <div className="Countdown-col">
                      <span className="Countdown-col-element">
                          <strong>{this.addLeadingZeros(this.state.days as any as string)}</strong>
                          <span>{this.state.days === 1 ? "Day" : "Days"}</span>
                      </span>
                </div>

                <div className="Countdown-col">
                    <span className="Countdown-col-element">
                        <strong>{this.addLeadingZeros(this.state.hours as any as string)}</strong>
                        <span>Hours</span>
                    </span>
                </div>


                <div className="Countdown-col">
                      <span className="Countdown-col-element">
                            <strong>{this.addLeadingZeros(this.state.min as any as string)}</strong>
                            <span>Min</span>
                      </span>
                </div>

                <div className="Countdown-col">
                      <span className="Countdown-col-element">
                            <strong>{this.addLeadingZeros(this.state.sec as any as string)}</strong>
                            <span>Sec</span>
                      </span>
                </div>
            </div>
        );
    }
}

Countdown.defaultProps = {
    date: new Date()
};
