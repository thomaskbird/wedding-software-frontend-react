enum YesNo {
    yes = "yes",
    no = "no"
}

interface Timestamps {
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface User extends Timestamps {
    id: number;
    parent_id: number;
    account_id: number;
    type_id: number;
    first_name: string;
    last_name: string;
    title: string;
    description: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    email: string;
    profile_image: string;
    bridal_party_order: number;
    plus_one: YesNo;
    plus_one_name: string;
    rsvp_source: string;
    rsvp: YesNo;
    rsvp_at: string;
    created_at: string;
    updated_at: string;
}

export interface Song extends Timestamps {
    id: number;
    account_id: number;
    song: string;
    artist: string;
    approved_at: string;
}
