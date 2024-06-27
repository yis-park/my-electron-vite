import { NavLink } from "react-router-dom";
import { DashboardLayout } from "../components/Layout";

function Login() {
  return (
    <DashboardLayout>
      <main className="login">
        <form className="loginForm">
          <div>
            <h1 id="login_title">로그인</h1>
          </div>
          <div>
            <div className="input">
              <input
                type="text"
                className="textfield"
                id="userId"
                placeholder="아이디"
                autoFocus
              ></input>
              <input
                type="password"
                className="textfield"
                id="password"
                placeholder="비밀번호"
              ></input>
              <div className="link">
                <NavLink to="/">아이디 찾기</NavLink>
                <span>&nbsp;|&nbsp;</span>
                <NavLink to="/">비밀번호 찾기</NavLink>
                <span>&nbsp;|&nbsp;</span>
                <NavLink to="/login/register">회원가입</NavLink>
              </div>
              <button id="loginBut" className="button">
                Login
              </button>
            </div>
          </div>
        </form>
      </main>
    </DashboardLayout>
  );
}

export default Login;
