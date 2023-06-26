import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const profileData = {
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
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desc}</p>
      <div onClick={()=>{navigate(-1)}}>뒤로가기</div>
    </div>
  );
};

export default Profile;
