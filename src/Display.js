import React, { Component } from 'react';
import './Display.css';

class Display extends Component{
	render(){
		return(
			<div>
				<h3>My name is Muskan. Excited to work with React</h3>
				<p style={{color:'red'}}>{this.props.welcome}</p>
			</div>
		);	
	}
}

export default Display;