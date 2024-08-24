import EstruturaLogCad from "../componentes/estruturaLoginCad";
import Footer from "../componentes/footer";
import Button from "../componentes/form/button";
import Input from "../componentes/form/input";
import Label from "../componentes/form/label";

import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="container">
      <EstruturaLogCad
        topContent={
          <>
            <h1 className="text-center text-xl text-white p-3">Login</h1>
            <form className="">
              <div className="form-group  flex flex-col  p-3 items-start">
                <Label PlaceholderValue="Usuario" htmlforValue="email" />
                <Input idValue="email" placeholder="Usuario" type="email" />
              </div>
              <div className="form-group  flex flex-col  p-3 items-start">
                <Label PlaceholderValue="Senha" htmlforValue="password" />
                <Input idValue="password" placeholder="Senha" type="password" />
              </div>
              <Button type="submit" value="Entrar" />
            </form>
            <p className=" mt-6 justify-center">
              Não é cadastrado ainda?
              <Link to={"cadastro"} className="text-blue-500 pl-1">
                Clique aqui
              </Link>
            </p>
          </>
        }
        bottomContent={<Footer />}
      />
    </div>
  );
};
export default Login;
