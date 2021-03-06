import {connect} from 'react-redux';
import SplashPage from './splashPage.jsx';
import {getBartStations} from '../util/map_util.js';
import {clearError} from '../util/session_api_util.js';

const mapStateToProps = state => {
  return {
    bart: state.entities.bart,
    attractions: state.entities.attraction
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBartStations: (budget, loc) => dispatch(getBartStations(budget, loc)),
    clearErrors :() => dispatch(clearError())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage);
