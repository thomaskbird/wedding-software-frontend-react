
export interface TimelineItem {
    id: number;
    slug: string;
    title: string;
    description: string;
    time: string;
}

export const TimelineMock = [
    {
        id: 1,
        slug: "doors-open",
        title: "Doors Open",
        description: "Doors will open on the second floor of Laurel Manor in the ceremony room",
        time: "2:30pm"
    },
    {
        id: 2,
        slug: "seating-last-call",
        title: "Seating Last Call",
        description: "We respectfully request that everyone be seated by no later than 3:45pm so the ceremony can start promptly at 4:00pm",
        time: "3:15pm"
    },
    {
        id: 3,
        slug: "ceremony-begins",
        title: "Ceremony Begins",
        description: "This is it, this is the moment they've been waiting for to profess their love in front of friends and family",
        time: "3:30pm"
    },
    {
        id: 4,
        slug: "cocktail-hour-begins",
        title: "Cocktail Hour Begins",
        description: "Time to get social, doors are open downstairs in the Oak room where the reception will be held. Have a few drinks, eat hors d'oeuvres, get to know some new people before the wedding parties entrance!",
        time: "4:00pm"
    },
    {
        id: 5,
        slug: "bridal-party-entrance",
        title: "Bridal Party Entrance",
        description: "",
        time: "5:20pm"
    },
    {
        id: 6,
        slug: "cake-cutting",
        title: "Cake Cutting",
        description: "It's to get messy, cutting of the cake, three tiers of cake each layer a different flavor!",
        time: "5:30pm"
    },
    {
        id: 7,
        slug: "toasts",
        title: "Toasts",
        description: "Both the Best Man & Man of Honor would like to give a few words right before a short blessing will be given before dinner",
        time: "5:30pm"
    },
    {
        id: 8,
        slug: "dinner",
        title: "Dinner",
        description: "We hope you brought your appetites! Dinner will be buffet style with three different entrees to select from!",
        time: "5:45pm"
    },
    {
        id: 9,
        slug: "cake-served",
        title: "Cake Served",
        description: "Quite possibly the only reason the bride said yes to getting married, all jokes aside the cake has three flavors hopefully something for everyone!",
        time: "6:45pm"
    },
    {
        id: 10,
        slug: "dances",
        title: "Dances",
        description: "A very special moment for any bride, that one unforgettable dance that friends and family will never forget!",
        time: "7:15pm"
    },
    {
        id: 11,
        slug: "late-night-snacks",
        title: "Late Night Snacks",
        description: "Pizza for all those late night snackers is served",
        time: "8:30pm"
    },
    {
        id: 12,
        slug: "closing-time",
        title: "Closing Time",
        description: "We hope you all will have had a great time, enjoying and celebrating in the joy we have found in each other but all good things must come to an end!",
        time: "9:30pm"
    }
];
