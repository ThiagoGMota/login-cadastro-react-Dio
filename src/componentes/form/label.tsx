interface LabelProps{
    htmlforValue:"email"|"number"|"password"|"text"|"name"|"telefone"|string;
    PlaceholderValue:string;
}

const Label:React.FC <LabelProps> = ({PlaceholderValue,htmlforValue}) => {
    return(
        <div className=" p-1.5  w-full text-left">
            <label
                htmlFor={htmlforValue}
                className="text-white w-full text-lg  "
            >{PlaceholderValue}</label>
        </div>
    )
}
export default Label