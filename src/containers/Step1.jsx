import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Base from "../assets/img/Base.png"
import block from "../assets/img/block.png"
import mobile from "../assets/img/mobile.png"

const Step1 = (props) => {
    const next = () => {
        props.nextStep();
    };
    return (
        <Fragment>
            <div className="flex">
                <div className="w-7/12 flex">
                    <div className="w-6/12 bg-primary pl-32 text-white font-OpenSans-Rg pb-10">
                        <div className="pt-40 tracking-tighter">
                            <p className="text-5xl font-OpenSans-Lt">Seguro de</p>
                            <p className="text-5xl mt-3">Salud</p>
                        </div>
                        <div className="mt-10">
                            <ul>
                                <li className="flex items-center gap-2">
                                    <img src={block} alt="" className="w-5 h-5"/>
                                    <p className="font-OpenSans-Lt">Cómpralo de manera fácil y rápida</p>
                                </li>
                                <li className="flex items-center gap-2 mt-5">
                                    <img src={mobile} alt="" className="w-5 h-5"/>
                                    <p className="font-OpenSans-Lt">Cotiza y compra tu seguro 100% digital</p>
                                </li>
                                <li className="flex items-center gap-2 mt-5">
                                    <img src={block} alt="" className="w-5 h-5"/>
                                    <p className="font-OpenSans-Lt">Hasta S/.12 millones de cobertura anual</p>
                                </li>
                                <li className="flex items-center gap-2 mt-5">
                                    <img src={mobile} alt="" className="w-5 h-5"/>
                                    <p className="font-OpenSans-Lt">Más de 300 clínicas en todo el Perú</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-28">
                            <p className="font-OpenSans-Lt text-sm ">© 2021 ;y Company</p>
                        </div>
                    </div>
                    <div className="w-6/12">
                        <img src={Base} alt="" className="h-bg lg:h-bgLg"/>
                    </div>
                </div>
                <div className="w-5/12 pr-96">
                    <div className="pt-28 text-custom2">
                        <p className="text-custom text-3xl font-OpenSans-Lt">Obtén tu
                            <span className="text-primary font-OpenSans-Rg"> seguro ahora</span>
                        </p>
                        <p className="mt-2">Ingresa los datos para comenzar.</p>
                    </div>
                    <div className="flex mt-8">
                        <div className="w-4/12 relative">
                            <select
                                className="block appearance-none w-full border border-gray-200 text-custom py-4 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>DNI</option>
                                <option>CEX</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-gray-700">
                                <svg className="fill-current h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <input
                                className="block w-full text-gray-700 border border-gray-200 rounded-r py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city" type="text" placeholder="Nro de Documento"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <input
                            className="block w-full text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date" placeholder="Fecha de nacimiento"/>
                    </div>
                    <div className="mt-4">
                        <input
                            className="block w-full text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text" placeholder="Celular"/>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <div className="w-1/12">
                            <input className="mr-2 leading-tight w-5 h-5" type="checkbox"/>
                        </div>
                        <div className="w-11/12">
                            <p className="text-sm text-custom2 font-OpenSans-Lt">Acepto la
                                <a href="" className="underline font-OpenSans-Rg"> Política de Protección de Datos
                                    Personales y los Términos y Condiciones</a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <div className="w-1/12">
                            <input className="mr-2 leading-tight w-5 h-5" type="checkbox"/>
                        </div>
                        <div className="w-11/12">
                            <p className="text-sm text-custom2 font-OpenSans-Lt pr-2">Acepto la
                                <a href="" className="underline font-OpenSans-Rg"> Política de Envio de
                                    Comunicaciones Comerciales
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button
                            className="shadow bg-primary text-custom3 font-bold py-4 px-8 rounded-lg uppercase"
                            type="button"
                            onClick={()=>next()}
                        >
                            Comencemos
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(Step1)
