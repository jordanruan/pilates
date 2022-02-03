import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../List/List';

export default function UsersList(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/user?_sort=id&_order=asc').then((response) => {
            setUsers(response.data);
        });
    },[]);

    return(
        <div>
            <List users={users}/>
        </div>
    )
}