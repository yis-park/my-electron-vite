import React, { ChangeEvent } from "react";

interface RegisterState {
  email_writer: boolean;
}
class Register extends React.Component<{}, RegisterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email_writer: false,
    };
  }

  changeEmailSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const select = e.target.value;

    if (select === "write") {
      this.setState({ email_writer: true }, () => {
        console.log("email_write true:", this.state.email_writer);
      });
    } else {
      this.setState({ email_writer: false }, () => {
        console.log("email_write false:", this.state.email_writer);
      });
    }
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <h1>회원가입</h1>
          </div>
          <div className="register">
            <div>
              {/* 아이디 */}
              <div>
                <h5> 아이디 </h5>
                <input
                  type="text"
                  className="input-field"
                  maxLength={20}
                  name="register_id"
                  placeholder="7자 이상의 문자"
                  autoFocus
                />
                <button type="button" id="dupIdCheck">
                  중복확인
                </button>
              </div>

              {/* 비밀번호 */}
              <div>
                <h5> 비밀번호 </h5>
                <input
                  type="password"
                  className="input-field"
                  maxLength={15}
                  name="register_password"
                  placeholder="비밀번호"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <h5> 비밀번호 확인 </h5>
                <input
                  type="password"
                  className="input-field"
                  maxLength={15}
                  name="register_pswCheck"
                  placeholder="비밀번호 확인"
                />
              </div>

              {/* 이름 */}
              <div>
                <h5> 이름 </h5>
                <input
                  type="text"
                  className="input-field"
                  maxLength={10}
                  name="register_name"
                  placeholder="이름"
                />
              </div>

              {/* 생년월일 */}
              <div>
                <h5> 생년월일 </h5>
                <input
                  type="text"
                  className="input-field2"
                  maxLength={6}
                  name="register_birthday"
                />
                -&nbsp;
                <input
                  type="text"
                  className="input-field3"
                  maxLength={1}
                  name="register_sex"
                />
                ******
              </div>

              {/* 이메일 */}
              <div>
                <h5> 이메일 </h5>
                <input
                  type="text"
                  className="input-field2"
                  maxLength={15}
                  name="register_email"
                />
                &nbsp;@&nbsp;
                <select
                  name="register_email_select"
                  onChange={this.changeEmailSelect}
                >
                  <option value="gmail.com"> gmail.com </option>
                  <option value="naver.com"> naver.com </option>
                  <option value="write"> 직접 입력 </option>
                </select>
                {this.state.email_writer ? (
                  <div>
                    <input
                      type="text"
                      name="register_email_write"
                      maxLength={20}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <button className="button" type="submit" id="sbtn">
              가입하기
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
