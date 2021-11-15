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
                <div className="w-9/12 mt-20 text-custom">
                    <p className="text-custom text-3xl font-OpenSans-Lt">Hola,
                        <span className="text-primary font-OpenSans-Rg"> Rassmir</span>
                    </p>
                    <p className="mt-4 text-sm">Valida que los datos sean correctos.</p>
                    <div className="mt-8">
                        <p className="font-OpenSans-Lt">Datos personales del titular</p>
                        <div className="mt-4 pr-pdr">
                            <div className="flex">
                                <div className="w-2/12 relative">
                                    <select
                                        className="block appearance-none w-full border border-gray-200 text-custom py-4 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>DNI</option>
                                        <option>CEX</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-700">
                                        <svg className="fill-current h-5 w-5 text-primary"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <input
                                        className="block w-full text-gray-700 border border-gray-200 rounded-r py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city" type="text" placeholder="Nro de Documento"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <input
                                    className="block w-full text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text" placeholder="Nombres"/>
                            </div>
                            <div className="mt-4">
                                <input
                                    className="block w-full text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="text" placeholder="Apellido Paterno"/>
                            </div>
                            <div className="mt-4">
                                <input
                                    className="block w-full text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="date" placeholder="Fecha De Nacimiento"/>
                            </div>
                            <div className="mt-4">
                                <p className="font-OpenSans-Lt">Genero</p>
                                <ul className="mt-2">
                                    <li className="flex items-center">
                                        <input className="mr-2 leading-tight w-5 h-5" type="radio" name="genero"/>
                                        <p>Masculino</p>
                                    </li>
                                    <li className="flex items-center mt-3">
                                        <input className="mr-2 leading-tight w-5 h-5" type="radio" name="genero"/>
                                        <p>Femenino</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10">
                                <p className="font-OpenSans-Lt">¿A quién vamos a asegurar?</p>
                                <ul className="mt-2">
                                    <li className="flex items-center">
                                        <input className="mr-2 leading-tight w-5 h-5" type="radio" name="seguro"/>
                                        <p>Solo a mi</p>
                                    </li>
                                    <li className="flex items-center mt-3">
                                        <input className="mr-2 leading-tight w-5 h-5" type="radio" name="seguro"/>
                                        <p>A mí y a mi familia</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <button
                                    className="bg-custom4 text-custom3 font-bold py-4 px-8 rounded-lg uppercase"
                                    type="button">
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(Step2)
