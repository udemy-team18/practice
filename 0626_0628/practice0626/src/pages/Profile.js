import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const profileData = {
  yunie: {
    id: 1,
    name: "yueunkim",
    des: "리액트 공부",
  },
  herry: {
    id: 2,
    name: "minho",
    des: "hello",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = profileData[username];

  // console.log(useParams());
  // console.log(username);
  // console.log(navigate());
  console.log(profile);

  return (
    <div>
      <h3>
        {profile.name} : {username}는 어떤 사람?
      </h3>
      <p>{profile.des}</p>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
};

export default Profile;
