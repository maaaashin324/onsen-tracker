import { combineReducers } from 'redux';
import onsenList from './onsenList';
import onsenForm from './onsenForm';

export default combineReducers({
  onsenList,
  onsenForm,
});
