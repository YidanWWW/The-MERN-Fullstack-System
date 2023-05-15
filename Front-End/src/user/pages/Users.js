import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Jude',
            image: 'https://images.pexels.com/photos/705310/pexels-photo-705310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            places: 3
        }
    ];


    return <UsersList items={USERS} />;
};

export default Users;