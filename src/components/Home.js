import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <p>Home</p>
                {this.props.loggedInStatus}
            </div>
        )
    }
}

export default Home