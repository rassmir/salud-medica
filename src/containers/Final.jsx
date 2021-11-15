import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from "../components/Nav";
const Final = () => {
    const home = () => {
        window.location.reload()
    }
    return (
        <Fragment>
            <div className="flex">
                <div className="w-3/12">
                    <Nav/>
                </div>
                <div className="w-9/12 mt-60 text-custom ml-52 pr-pdr">
                    <hr className="border-custom4 border"/>
                    <div className="mt-6">
                        <p className="text-5xl font-OpenSans-Lt leading-tight">¡Gracias por <span
                            className="text-primary font-OpenSans-Rg">confiar en
                            nosotros!</span></p>
                    </div>
                    <div className="mt-5">
                        <p className="font-OpenSans-Lt">Queremos conocer mejor la salud de los asegurados. Un
                            asesor <span className="font-OpenSans-Rg">se
                            pondrá en contacto</span> contigo en las siguientes <span className="font-OpenSans-Rg">48 horas.</span>
                        </p>
                    </div>
                    <div className="flex justify-end mt-10">
                        <button
                            className="text-14 uppercase bg-primary text-white font-bold py-3 px-14 rounded-lg uppercase tracking-wider"
                            type="button"
                            onClick={() => home()}
                        >
                            ir a salud
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(Final)
