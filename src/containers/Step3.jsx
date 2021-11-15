import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Base from "../assets/img/Base.png";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import {FaHeart} from "react-icons/all";
import { Tab } from '@headlessui/react'

const Step3 = () => {
    return (
        <Fragment>
            <div className="flex gap-52">
                <div className="w-3/12">
                    <img src={Base} alt="" className="h-bg lg:h-bgLg"/>
                </div>
                <div className="w-9/12 mt-20 text-custom font-OpenSans-Rg">
                    <p className="text-custom text-3xl font-OpenSans-Lt">Elige,
                        <span className="text-primary"> tu protección</span>
                    </p>
                    <p className="mt-4 text-sm font-OpenSans-Lt">Selecciona tu plan de salud ideal</p>
                    <div className="mt-8">
                        <div className="mt-4 pr-pdr font-OpenSans-Rg">
                            <Tab.Group>
                                <Tab.List className="mt-4 flex gap-3">
                                    <Tab className="w-3/12">
                                        <div className="border-2 border-custom4 rounded-lg p-3.5">
                                            <div className="flex justify-end">
                                                <input type="radio" className="w-4 h-4" name="plan"/>
                                            </div>
                                            <div>
                                                <p className="uppercase text-12">Básico</p>
                                                <div className="flex gap-1">
                                                    <p className="text-12">
                                                        S/
                                                    </p>
                                                    <span className="font-bold text-3xl tracking-wide">160</span>
                                                </div>
                                                <p className="text-12">mensual</p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab className="w-3/12">
                                        <div className="border-2 border-custom4 rounded-lg p-3.5">
                                            <div className="flex justify-end">
                                                <input type="radio" className="w-4 h-4" name="plan"/>
                                            </div>
                                            <div>
                                                <p className="uppercase text-12">Básico</p>
                                                <div className="flex gap-1">
                                                    <p className="text-12">
                                                        S/
                                                    </p>
                                                    <span className="font-bold text-3xl tracking-wide">160</span>
                                                </div>
                                                <p className="text-12">mensual</p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab className="w-3/12">
                                        <div className="border-2 border-custom4 rounded-lg p-3.5">
                                            <div className="flex justify-end">
                                                <input type="radio" className="w-4 h-4" name="plan"/>
                                            </div>
                                            <div>
                                                <p className="uppercase text-12">Básico</p>
                                                <div className="flex gap-1">
                                                    <p className="text-12">
                                                        S/
                                                    </p>
                                                    <span className="font-bold text-3xl tracking-wide">160</span>
                                                </div>
                                                <p className="text-12">mensual</p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab className="w-3/12">
                                        <div className="border-2 border-custom4 rounded-lg p-3.5">
                                            <div className="flex justify-end">
                                                <input type="radio" className="w-4 h-4" name="plan"/>
                                            </div>
                                            <div>
                                                <p className="uppercase text-12">Básico</p>
                                                <div className="flex gap-1">
                                                    <p className="text-12">
                                                        S/
                                                    </p>
                                                    <span className="font-bold text-3xl tracking-wide">160</span>
                                                </div>
                                                <p className="text-12">mensual</p>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="mt-8">
                                            <div className="border-2 border-custom4 rounded-lg">
                                                <div className="bg-custom4 text-center py-2">
                                                    <p className="text-custom2 font-extrabold text-14">Cuentas con estos beneficios:</p>
                                                </div>
                                                <div className="flex py-6 px-8">
                                                    <div className="w-8/12">
                                                        <p>Cobertura máxima</p>
                                                        <p className="mt-2 text-3xl">S/1MM</p>
                                                        <div className="mt-2">
                                            <span
                                                className="uppercase text-12 bg-green-primary text-white rounded-xl py-0.5 px-3 tracking-wide">
                                                Plan Básico
                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-4/12 flex justify-end">
                                                        <img src={p1} className="w-20 h-20 mt-6" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <hr className="border-custom4 border w-w308"/>
                                                </div>
                                                <div className="px-8 py-8">
                                                    <ul>
                                                        <li className="flex items-center gap-3">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">Lima <span className="text-12">(zona de cobertura)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-6">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">+30 clínicas <span className="text-12">(en red afiliada)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Médico a domicilio</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Chequeos preventivos</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso nacional</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso internacional</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="mt-8">
                                            <div className="border-2 border-custom4 rounded-lg">
                                                <div className="bg-custom4 text-center py-2">
                                                    <p className="text-custom2 font-extrabold text-14">Cuentas con estos beneficios:</p>
                                                </div>
                                                <div className="flex py-6 px-8">
                                                    <div className="w-8/12">
                                                        <p>Cobertura máxima</p>
                                                        <p className="mt-2 text-3xl">S/5MM</p>
                                                        <div className="mt-2">
                                            <span
                                                className="uppercase text-12 bg-green-primary text-white rounded-xl py-0.5 px-3 tracking-wide">
                                                Plan Avanzado
                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-4/12 flex justify-end">
                                                        <img src={p2} className="w-20 h-16 mt-6" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <hr className="border-custom4 border w-w308"/>
                                                </div>
                                                <div className="px-8 py-8">
                                                    <ul>
                                                        <li className="flex items-center gap-3">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">Lima <span className="text-12">(zona de cobertura)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-6">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">+30 clínicas <span className="text-12">(en red afiliada)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-custom2">Médico a domicilio</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-custom2">Chequeos preventivos</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso nacional</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso internacional</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="mt-8">
                                            <div className="border-2 border-custom4 rounded-lg">
                                                <div className="bg-custom4 text-center py-2">
                                                    <p className="text-custom2 font-extrabold text-14">Cuentas con estos beneficios:</p>
                                                </div>
                                                <div className="flex py-6 px-8">
                                                    <div className="w-8/12">
                                                        <p>Cobertura máxima</p>
                                                        <p className="mt-2 text-4xl">S/1MM</p>
                                                        <div className="mt-2 pl-2">
                                            <span
                                                className="uppercase text-12 bg-green-primary text-white rounded-xl py-0.5 px-3 tracking-wide">
                                                Plan Básico
                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-4/12 flex justify-end">
                                                        <img src={p1} className="w-20 h-20 mt-6" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <hr className="border-custom4 border w-w308"/>
                                                </div>
                                                <div className="px-8 py-8">
                                                    <ul>
                                                        <li className="flex items-center gap-3">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">Lima <span className="text-12">(zona de cobertura)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-6">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">+30 clínicas <span className="text-12">(en red afiliada)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Médico a domicilio</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Chequeos preventivos</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso nacional</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso internacional</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="mt-8">
                                            <div className="border-2 border-custom4 rounded-lg">
                                                <div className="bg-custom4 text-center py-2">
                                                    <p className="text-custom2 font-extrabold text-14">Cuentas con estos beneficios:</p>
                                                </div>
                                                <div className="flex py-6 px-8">
                                                    <div className="w-8/12">
                                                        <p>Cobertura máxima</p>
                                                        <p className="mt-2 text-4xl">S/1MM</p>
                                                        <div className="mt-2 pl-2">
                                            <span
                                                className="uppercase text-12 bg-green-primary text-white rounded-xl py-0.5 px-3 tracking-wide">
                                                Plan Básico
                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-4/12 flex justify-end">
                                                        <img src={p1} className="w-20 h-20 mt-6" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <hr className="border-custom4 border w-w308"/>
                                                </div>
                                                <div className="px-8 py-8">
                                                    <ul>
                                                        <li className="flex items-center gap-3">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">Lima <span className="text-12">(zona de cobertura)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-6">
                                                            <FaHeart className="w-3.5 h-3.5 text-primary"/>
                                                            <p className="text-xl">+30 clínicas <span className="text-12">(en red afiliada)</span></p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Médico a domicilio</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Chequeos preventivos</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso nacional</p>
                                                        </li>
                                                        <li className="flex items-center gap-3 mt-5">
                                                            <FaHeart className="w-3.5 h-3.5 text-custom3"/>
                                                            <p className="text-custom3 line-through">Reembolso internacional</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                            <div className="mt-10">
                                <ul className="text-2xl">
                                    <li className="font-OpenSans-Lt text-custom">Revisa nuestros</li>
                                    <li className="text-primary">servicios y exclusiones</li>
                                </ul>
                            </div>
                            <div className="py-6">
                                <hr className="border-custom4 border"/>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <button
                                    className=" uppercase bg-primary text-white font-bold py-3 px-10 rounded-lg uppercase tracking-wide	"
                                    type="button">
                                    comprar plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(Step3)
