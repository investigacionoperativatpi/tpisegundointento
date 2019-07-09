import React from 'react';
import './App.css';
import Inicio from '../src/pages/Inicio';
import { connect } from 'react-redux';
import { setVar, setRestrictions} from './store/actions';

function App() {
  return (
    <div className="App">
      <Inicio/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    var: state.var,
    restrictions: state.restrictions,
  }
  }
  
  const mapDispatchToProps = () => {
    return {
      setVar,
      setRestrictions
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
