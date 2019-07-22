import ReactGA from "react-ga";

export const isTruthy = (val: any): boolean => {
    return val !== undefined && val !== null && val !== "";
};

export const analyticsSend = (path: string) => {
    ReactGA.initialize("UA-40542612-16");
    ReactGA.pageview(path);
};
