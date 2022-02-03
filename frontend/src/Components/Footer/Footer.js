import React from "react";
import { Content} from "rbx"; 
import 'rbx/index.css';
import './Footer.css';

export default function Footer(){                             

    return(
        <div className="margem-footer">
            <footer className="hero is-link is-small footer">
                <div className="hero-body">
                    <footer>
                        <Content textAlign="centered">
                            <p>
                            <strong>Saúde A+</strong>.
                            © Copyright 2016. Studio de Pilates - Todos os direitos reservados.
                            </p>
                        </Content>
                    </footer>
                </div>
            </footer>
        </div>
    )
}