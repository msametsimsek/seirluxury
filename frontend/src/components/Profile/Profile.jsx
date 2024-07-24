import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      message.error("Lütfen giriş yapın.");
      navigate("/login");
    } else {
      setUser(userData);
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <h2>Profil</h2>
      <div className="profile-info">
        <p><strong>İsim:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
