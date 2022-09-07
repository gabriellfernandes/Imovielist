import { Link } from "react-router-dom";

export default function LadingPage (){
    return (
        <div>
            <h1>Pagina Inicial que encaminha  para o login ou o registro</h1>
            <Link to={"/login"}>Logar</Link>
            <Link to={"/register"}>Registro</Link>
        </div>
    )
}