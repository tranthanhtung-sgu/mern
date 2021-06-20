import LoginForm from "../auth/LoginForm"
import RegisterForm from "../auth/RegisterForm"

const Auth = ({authRoute}) => {
    let body
    body=(
        <>
        learnIt
       {authRoute === "login" && <LoginForm/>}
       {authRoute === "register" && <RegisterForm/>}

       </>
    )
    return (
      <div class="landing">
          <div class="dark-overlay">
              <div class="landing-inner">
                  <h1>LearnIt</h1>
                  <h4>keep track the what you are learning</h4>
                  {body}
              </div>
          </div>
      </div>
    )
}

export default Auth
