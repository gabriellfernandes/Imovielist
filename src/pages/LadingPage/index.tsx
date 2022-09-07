import { Link } from "react-router-dom";
import { DivLanding } from "../../style/landingPage/landingPage";
import loginSVG from "../../style/images/loginSVG.svg";
import registerSVG from "../../style/images/registerSVG.svg";

export default function LadingPage() {
  return (
    <DivLanding>
      <h1>Best movie review site</h1>

      <div className="conteiner">
        <div className="divForm">
          <img src={loginSVG} alt="ticket icon" />
          <h2>If you already have an account</h2>
          <Link className="button" to={"/login"}>
            Log in
          </Link>
        </div>

        <div className="divForm">
          <img src={registerSVG} alt="" />
          <h2>If you don't have an account, register</h2>
          <Link className="button" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </DivLanding>
  );
}
