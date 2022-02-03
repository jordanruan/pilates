import React from "react";
import UserCard from "../Card/UserCard";

export default function List({users}){

    return(
        <div className="user-list">
            {users.map((user) => (
                <UserCard user={user}/>
            ))}
        </div>
    )
}