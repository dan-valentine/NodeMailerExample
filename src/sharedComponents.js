import React from 'react';
import './sharedComponents.css'

export const Spinner = props => (
  <div className='spinner-container'>
    <h1>Sending...</h1>
    <div className={'spinner ' + props.className} style={props.style}/>
  </div>
);

export const Button =  props =>(
  <button className={'buttton ' + props.className} style={props.style} type={props.type}>
    {props.children}
  </button>
);


export const Form = props =>(
  <form {...props} className={'form ' + props.className} >
    {props.children}
  </form>
);
