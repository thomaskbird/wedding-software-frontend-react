interface Timestamps {
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

interface User extends Timestamps {
    account_id: number;
    address_1: string;
    address_2: string;
    bridal_party_order: number;
    city: string;
    description: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    phone: string;
    profile_image: string;
    rsvp_at: string;
    state: string;
    title: string;
    type_id: number;
    updated_at: string;
    zip: number;
}

export { User };
