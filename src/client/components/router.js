import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Client from './client';
// import Question from './Question';
// import Instruction from './Instruction';
// import Completed from './Completed';
// import ExecutionStore from '../stores/ExecutionStore';
// import AssessmentStore from '../stores/AssessmentStore';

// const questionStore = new ExecutionStore();

function Router() {
    return (
        <Switch>
            <Route exact path="/home" render={<Client />} />
            {/* <Route path="/exam/instruction" render={props => <Instruction {...props} store={new AssessmentStore()} />} />
            <Route path="/exam/completed" render={props => <Completed {...props} />} />
            <Route
                path="/exam/question/:questionIndex"
                render={(props) => {
                    const { match } = props;
                    const { questionIndex } = match.params;
                    return <Question {...props} index={Number(questionIndex)} store={questionStore} />;
                }}
            /> */}
        </Switch>
    );
}

Router.propTypes = {
    location: PropTypes.object.isRequired,
};

export default withRouter(Router);
