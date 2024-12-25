import socket from 'socket.io-client';


let socketInstance = null;


export const initializeSocket = (projectId) => {//--> this function is used to initialize the socket connection

    socketInstance = socket(import.meta.env.VITE_API_URL, {
        auth: {
            token: localStorage.getItem('token')
        },
        query: {
            projectId
        }
    });

    return socketInstance;

}

export const receiveMessage = (eventName, cb) => {//--> this function is used to receive the message from the socket
    socketInstance.on(eventName, cb);
}

export const sendMessage = (eventName, data) => {//--> this function is used to send the message to the socket
    socketInstance.emit(eventName, data);
}