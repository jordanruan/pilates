import React from "react";

import ComponentsModality from '../../Components/Modality/Modality';
import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';

export default function Modality(){
    return(
        <div>
            <ComponentsHeader/>
            <ComponentsModality/>
            <ComponentsFooter/>
        </div>
    )
}