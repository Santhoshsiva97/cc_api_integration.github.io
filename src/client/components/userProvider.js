import React from 'react';
import { Progress } from 'antd';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';


export const UserProviderContext = React.createContext();



// @observer
class UserProvider extends React.Component {
    // static propTypes = {
    //     children: PropTypes.object.isRequired,
    // };

    constructor() {
        super();
        this.state = {};
    }

    // progressPercent = 0;

    componentDidMount() {
        console.log('componentDidMount::::::::::::::::UserProvider')
    }

    // renderIf = (condition, component) => {
    //     if (condition) {
    //         return component;
    //     }
    //     return null;
    // }

    render() {

        const { children } = this.props;

        console.log('this.prosp::::', this.props)
        // if (this.progressPercent <= 100) {
        //     this.progressPercent += 35;
        // }

        return (
            <div>
                <UserProviderContext.Provider>{children}</UserProviderContext.Provider>
            </div>
            // <div>
            //     {this.renderIf(status === 'LOADING', <div className="progress"><Progress type="circle" percent={this.progressPercent} /></div>)}
            //     {this.renderIf(status === 'COMPLETED',
            //         <UserProviderContext.Provider>
            //             {children}
            //         </UserProviderContext.Provider>)
            //     }
            //     {this.renderIf(status === 'ERROR', <div>{error}</div>)}
            // </div>
        );
    }
}

export default UserProvider;
