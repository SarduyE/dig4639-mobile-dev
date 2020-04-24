import React from 'react';
import './index.css'


class Profile extends React.Component {

  render() {
    return (
      <div className="count">
         <h2> Contact Count:</h2>
        { 
        this.props.profile.map((value, index) => {return <p className ="listcount" key={index}> {value.name}, {value.count}</p> ;
        })
       }
      </div>
    );
  }
}

export default Profile;