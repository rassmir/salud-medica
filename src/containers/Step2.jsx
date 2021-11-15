import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Base from "../assets/img/Base.png"
const Step2 = () => {
    return (
        <Fragment>
           <div className="flex gap-52">
               <div className="w-3/12">
                   <img src={Base} alt="" className="h-bg lg:h-bgLg"/>
               </div>
               <div className="w-9/12 mt-20">
                   <p className="text-custom text-3xl font-OpenSans-Lt">Hola,
                       <span className="text-primary font-OpenSans-Rg"> Rassmir</span>
                   </p>
               </div>
           </div>
        </Fragment>
    )
}
export default withRouter(Step2)
