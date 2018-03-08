import { connect } from 'react-redux';
import List from '../components/List';
import { getOnsens } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
});

const mapDispatchToState = dispatch => ({
  getOnsensData: () => dispatch(getOnsens()),
});

export default connect(mapStateToProps, mapDispatchToState)(List);
