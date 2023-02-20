import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(email, password);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    // if (localStorage.getItem("token")) {
    //   return <Navigate to="/home" />;
    // }

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        alert("404 error");
      });
  };

  return (
    <>
      <section className="login">
        <Container>
          <div className="login_box">
            <div className="left">
              <div className="contact">
                <div action="">
                  <h3>SIGN IN</h3>
                  <input
                    type="text"
                    placeholder="USERNAME"
                    value={email}
                    onChange={handleEmail}
                  />
                  <input
                    placeholder="PASSWORD"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                  />
                  <button className="submit" onClick={handleApi}>
                    LET'S GO
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right-text">
                <h2>PROSHOPING</h2>
                <h5>WELCOME TO OUR WEBSITE</h5>
              </div>
              <div className="right-inductor">
                <img
                  src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
