import { connect } from 'react-redux';
import Register from '../components/Register';
import { postOnsen } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
});

const mapDispatchToState = dispatch => ({
  postOnsenData: registeringOnsen => dispatch(postOnsen(registeringOnsen)),
});

export default connect(mapStateToProps, mapDispatchToState)(Register);
