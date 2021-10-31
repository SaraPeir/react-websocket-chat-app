import React, {useEffect} from 'react';
import { NavLink } from "react-router-dom";
import {io} from 'socket.io-client';

import '../../styles/commons/NavLink.scss'

export default (props) => {
    useEffect(() => {
        // const fetchData = async () => {
        //   const response = await fetch('http://localhost:5000/chats');
        //   console.log('response', response)
    
        //   const body = await response.json();
        //   console.log('body', body)
        // }
    
        // fetchData()

        var socket = io('http://localhost:5000');
        // Message from server
        socket.on('connect', () => {
            console.log(socket.id);
            socket.emit('joinRoom', { username: 'Sara', room: 'Sports', id: socket.id });

            socket.on('message', (data) => {
                console.log(data);
            })
        })

        socket.on('disconnect', () => {
            console.log("desconectado");
        })
      })

    return (
        <React.Fragment>
            <NavLink 
                exact to="/"
                activeStyle={{
                    fontWeight: "bold",
                    color: 'red',
                    padding: "20px",
                    margin: "20px"
                }}
                className="nav-link"
            >
                Submit
            </NavLink>
        </React.Fragment>
    )
}