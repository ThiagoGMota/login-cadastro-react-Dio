interface InputProps {
    type: 'text' | 'email' | 'password' | 'number'|'tel';
    placeholder: string;
    idValue:string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input:React.FC <InputProps> = ({ type, placeholder,idValue,value,onChange }) => {
    return (
        <div className="p-1.5 w-full">
            <input
                className="text-gray-200 border-b-2 backdrop-brightness-75 bg-transparent w-full pl-1 p-2 text-lg"
                type={type}
                placeholder={placeholder} 
                id={idValue}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
/* import React, { useState } from 'react';

interface InputProps {
    type: 'text' | 'email' | 'password' | 'number';
    placeholder: string;
    idValue: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, idValue }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="relative p-1.5 w-full">
            <input
                className="text-gray-200 border-b-2 backdrop-brightness-75 bg-transparent w-full pl-1 p-2 text-lg"
                type={type === 'password' && !isPasswordVisible ? 'password' : 'text'} // Alterna entre 'password' e 'text'
                placeholder={placeholder}
                id={idValue}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    aria-label={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'} // Acessibilidade
                >
                    {isPasswordVisible ? (
                        <i className="fas fa-eye-slash"></i> // Ícone para ocultar
                    ) : (
                        <i className="fas fa-eye"></i> // Ícone para mostrar
                    )}
                </button>
            )}
        </div>
    );
};

export default Input; */