import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default (requestedState, requestedActions) => {

    const mapStateToProps = requestedState 
    ? requestedState
    : null;

    const mapDispatchToProps = requestedActions 
    ? dispatch => bindActionCreators(requestedActions, dispatch)
    : null;

    return connect(mapStateToProps, mapDispatchToProps);
};