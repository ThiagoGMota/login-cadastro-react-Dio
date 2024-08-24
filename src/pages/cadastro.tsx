/* import EstruturaLogCad from "../componentes/estruturaLoginCad"
import Footer from "../componentes/footer"
import Button from "../componentes/form/button"
import Input from "../componentes/form/input"
import Label from "../componentes/form/label"

const Cadastro: React.FC = () => {

	
	return(
		<>
		<EstruturaLogCad
			topContent={
				<>
				<h1 className="text-center text-xl text-white p-3">Cadastro</h1>
				<p>Para criar uma conta, preencha os campos abaixo.</p>
				<form action="">
					<div className="form_group pt-6">
						<Label PlaceholderValue="Nome Completo" htmlforValue="name" />
						<Input idValue="name" placeholder="Digite seu nome aqui" type="text"/>
					</div>
					<div className="form_group pt-6">
						<Label PlaceholderValue="Email" htmlforValue="email" />
						<Input idValue="email" placeholder="Digite seu email aqui" type="email"/>
					</div>
					<div className="form_group pt-6">
						<Label PlaceholderValue="Telefone" htmlforValue="telefone" />
						<Input idValue="telefone" placeholder="Digite seu telefone aqui" type="tel"/>
					</div>
					<div className="form_group pt-6">
						<Label PlaceholderValue="Senha" htmlforValue="password" />
						<Input idValue="password" placeholder="Digite sua senha aqui" type="password"/>
					</div>
					<div className="form_group pt-6">
						<Label PlaceholderValue="Confirme sua Senha" htmlforValue="password" />
						<Input idValue="password" placeholder="Digite sua senha aqui" type="password"/>
					</div>
					<div className="form_group flex justify-evenly items-baseline pt-3 pb-10 ">
						<input type="checkbox" name="confirmo" id="confirmo" className="border-4 border-red-600" required/>
						<Label  PlaceholderValue="Confirmo que li e aceito os termos de uso e a política de privacidade" htmlforValue="confirmo" />
					</div>
					<Button type="submit" value="Cadastrar"/>
				</form>
				</>
			}
			bottomContent={
				<>
				<Footer/>
				</>
			}
		/>
		</>
		
	)
}
export default Cadastro */




import React, { useState } from 'react';
import EstruturaLogCad from "../componentes/estruturaLoginCad";
import Footer from "../componentes/footer";
import Button from "../componentes/form/button";
import Input from "../componentes/form/input";
import Label from "../componentes/form/label";

const Cadastro: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        // Se as senhas coincidirem, você pode prosseguir com o envio do formulário
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        setErro(''); // Limpa a mensagem de erro
        console.log('Cadastro realizado com sucesso!');
        // Resetar os campos se necessário
    };

    return (
        <>
            <EstruturaLogCad
                topContent={
                    <>
                        <h1 className="text-center text-xl text-white p-3">Cadastro</h1>
                        <p>Para criar uma conta, preencha os campos abaixo.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form_group pt-6">
                                <Label PlaceholderValue="Nome Completo" htmlforValue="name" />
                                <Input idValue="name" placeholder="Digite seu nome aqui" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="form_group pt-6">
                                <Label PlaceholderValue="Email" htmlforValue="email" />
                                <Input idValue="email" placeholder="Digite seu email aqui" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form_group pt-6">
                                <Label PlaceholderValue="Telefone" htmlforValue="telefone" />
                                <Input idValue="telefone" placeholder="Digite seu telefone aqui" type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </div>
                            <div className="form_group pt-6">
                                <Label PlaceholderValue="Senha" htmlforValue="password" />
                                <Input idValue="password" placeholder="Digite sua senha aqui" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <div className="form_group pt-6">
                                <Label PlaceholderValue="Confirme sua Senha" htmlforValue="confirmPassword" />
                                <Input idValue="confirmPassword" placeholder="Confirme sua senha aqui" type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                            </div>
                            {erro && <p className="text-red-500">{erro}</p>} {/* Mensagem de erro */}
                            <div className="form_group flex justify-evenly items-baseline pt-3 pb-10 ">
                                <input type="checkbox" name="confirmo" id="confirmo" className="border-4 border-red-600" required />
                                <Label PlaceholderValue="Confirmo que li e aceito os termos de uso e a política de privacidade" htmlforValue="confirmo" />
                            </div>
                            <Button type="submit" value="Cadastrar" />
                        </form>
                    </>
                }
                bottomContent={
                    <>
                        <Footer />
                    </>
                }
            />
        </>
    );
};

export default Cadastro;