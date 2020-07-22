import React from 'react';
import PropTypes from 'prop-types'

function ProfileComponent(props) {
return (
    <div>
       <button
        className="btn btn-primary"
        onClick={() => props.handelName(props.fullName)}
      >
        Alert name of profile
      </button>
      <div>{props.children}</div>

      <hr />
      <ul>
        <p className="clp"> Full Name : {props.fullName}</p>
        <hr />
        <p className="clp"> Profession :{props.profession}</p>
        <hr />
        <p className="clp"> Bio :{props.bio}</p> <hr/>
      </ul>
    </div>
  );
 }
ProfileComponent.defaultProps = {
    fullName: "Name",
    Bio:"bio"
    
   
  };

ProfileComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string,
    bio: PropTypes.string.isRequired
};

export default ProfileComponent;

