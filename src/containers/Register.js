import { connect } from 'react-redux';
import List from '../components/List';
import { postOnsen } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
});

const mapDispatchToState = dispatch => ({
  postOnsenData: registeringOnsen => dispatch(postOnsen(registeringOnsen)),
});

export default connect(mapStateToProps, mapDispatchToState)(List);
