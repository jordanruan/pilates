import React from "react";

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsClassSchedule from '../../Components/ClassSchedule/ClassSchedule';
import ComponentsFooter from '../../Components/Footer/Footer';

export default function ClassSchedule(){
    return(
        <div>
            <ComponentsHeader/>
            <ComponentsClassSchedule/>
            <ComponentsFooter/>
        </div>
    )
}