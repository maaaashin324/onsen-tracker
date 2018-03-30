import { connect } from 'react-redux';
import Heading from '../components/Heading';
import { filterDistrict } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  activateFilterDistrict: district => dispatch(filterDistrict(district)),
});

export default connect(null, mapDispatchToProps)(Heading);
