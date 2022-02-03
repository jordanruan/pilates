import React from "react";

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsSchedule from '../../Components/Schedule/Schedule';
import ComponentsFooter from '../../Components/Footer/Footer';

export default function Schedule(){
    return(
        <div>
            <ComponentsHeader/>
            <ComponentsSchedule/>
            <ComponentsFooter/>
        </div>
    )
}