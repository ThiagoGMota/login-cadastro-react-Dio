import { ReactNode } from "react";
import Header from "./header";

interface EstruturaProps {
    topContent: ReactNode;  // Para o conteúdo do topo
    bottomContent: ReactNode; // Para o conteúdo do fundo
}

const EstruturaLogCad: React.FC<EstruturaProps> = ({ topContent, bottomContent }) => {
    return (
        <div className="bg-purple-950/80 rounded-xl p-5">
            
           {/*  <div className="top-content">
                {topContent}  
            </div> */}
            <div className="col-md-6 offset-md-3 backdrop-brightness-75 p-5">
            <Header />
                {topContent}  
            </div>
            <div className="bottom-content">
                {bottomContent}
            </div>
        </div>
    );
};

export default EstruturaLogCad;