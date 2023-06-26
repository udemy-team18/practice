import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  ASJ: {
    id: 1,
    name: "안승지",
    desc: "아무 생각이 없습니다.",
  },
  안승지: {
    id: 2,
    name: "asj",
    desc: "아무 생각이 없습니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  console.log(username);
  console.log(useParams());
  console.log(useNavigate());
  return <div>
    <h3>{username}</h3>
  </div>;
};

export default Profile;
