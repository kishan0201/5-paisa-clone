import React from 'react';

const Dashboard = (props) => {
    return (
        <div>
            <p>Welcome {props.data.name}</p>
            <p>ClientId - {props.data.clientID}</p>
        </div>
    )
}

export default Dashboard;