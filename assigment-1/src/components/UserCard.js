import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img className="user-avatar" src={user.avatar} alt={user.first_name} />
      <h3 className="user-name">{`${user.first_name} ${user.last_name}`}</h3>
      <p className="user-email">{user.email}</p>
    </div>
  );
};

export default UserCard;
