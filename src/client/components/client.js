import React from 'react';
import { withRouter } from 'react-router-dom';
import { UserProviderContext } from './userProvider';


class Client extends React.Component {

    // static contextType: UserProviderContext;

    // static propTypes = {
    //     props: Pro
    //     history: PropTypes.object.isRequired,
    // }

    render() {
        return (
            <div>
                <h4>Hi man!</h4>
            </div>
        );
    }
}

Client.contextType = UserProviderContext;


export default withRouter(Client);