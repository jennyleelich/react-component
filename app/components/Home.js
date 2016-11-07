
import React from "react";
class Home extends React.Component {
    render(){
    	console.log(this.props);
        return(
            <div>
            	<p>in a new component! </p>  
            	<p> Your name is {this.props.name}, your age is {this.props.age}</p>
            	<p>user name is {this.props.user.name}</p>
            	<p>the hobbies</p>
            	<ul>
            		{this.props.user.hobbies.map(function(item,i){return <li key={i}>{item}</li>},this.props.user.hobbies)}
            	</ul>
            </div>
        )
    }
    
}

Home.propTypes = {
	name:React.PropTypes.string,
	age:React.PropTypes.number,
	user:React.PropTypes.object
}
export default Home