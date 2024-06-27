import { DashboardLayout } from "../components/Layout";

function Profile() {
  return (
    <DashboardLayout>
      <main className="profile">
        <form className="profileForm">
          <div>
            <h1 id="login_title">profile</h1>
          </div>
          <div className="profileFlex">
            <div>
              <label htmlFor="inputFirstName">성&nbsp;</label>
              <input
                type="text"
                className="profileInput"
                id="inputFirstName"
                placeholder="박"
                disabled
              />
              <label htmlFor="inputLastName">&nbsp;이름&nbsp;</label>
              <input
                type="password"
                className="profileInput"
                id="inputLastName"
                placeholder="이슬"
                disabled
              />
            </div>
            <label htmlFor="inputEmail">이메일&nbsp;</label>
            <input
              type="email"
              className="textfield"
              id="inputEmail"
              placeholder="email@anver.com"
              disabled
            />
            <label htmlFor="inputPhone">연락처&nbsp;</label>
            <input
              type="tel"
              className="textfield"
              id="inputPhone"
              placeholder="010-0000-0000"
              disabled
            />
            <label htmlFor="inputAddress">주소&nbsp;</label>
            <input
              type="text"
              className="textfield"
              id="inputAddress"
              placeholder="경기도 수원시"
              disabled
            />
          </div>
        </form>
      </main>
    </DashboardLayout>
  );
}

export default Profile;
