interface ButtonProps{
    type:"button"|"submit";
    value:string;
}

const Button:React.FC <ButtonProps>  = ({type,value}) => {
    return(
        <div className="btn">
            <input
                type={type}
                value={value}
                className="cursor-pointer bg-purple-900 p-4 w-44 rounded-lg hover:bg-green-500"
            />
        </div>
    )
}
export default Button