import { connect } from 'react-redux';
import Register from '../components/Register';
import { postOnsen, toggleRegisterModal } from '../actions/index';

const mapStateToProps = state => ({
  onsens: state.onsenList.onsens,
  modalMessage: state.onsenForm.message,
  onToggleModal: state.onsenForm.onToggleModal,
});

const mapDispatchToState = dispatch => ({
  postOnsenData: registeringOnsen => dispatch(postOnsen(registeringOnsen)),
  toggleModal: () => dispatch(toggleRegisterModal()),
});

export default connect(mapStateToProps, mapDispatchToState)(Register);
