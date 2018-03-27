import { combineReducers } from 'redux';
import onsenForm from './onsenForm';
import onsenList from './onsenList';
import onsenMap from './onsenMap';

export default combineReducers({
  onsenForm,
  onsenList,
  onsenMap,
});
