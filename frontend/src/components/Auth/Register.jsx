import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // const { password, ...rest } = data;

        localStorage.setItem("user", JSON.stringify(data));
        message.success("Kayıt başarılı.");
        navigate("/");
      } else {
        message.error("Kayıt başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-column">
      <h2>Kayıt Olun</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Kullanıcı Adı <span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChange}
              name="username"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email Adresiniz <span className="required">*</span>
            </span>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifreniz <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              required
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Kişisel verileriniz bu web sitesindeki deneyiminizi desteklemek,
            hesabınıza erişimi yönetmek ve{" "}
            <a href="#">Gizlilik Politikamızda</a> açıklanan diğer amaçlar için
            kullanılacaktır.
          </p>
          <button className="btn btn-sm">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
