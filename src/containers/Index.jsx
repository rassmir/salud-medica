import React, {Fragment, useState} from "react";
import {withRouter} from 'react-router-dom';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Final from "./Final";

const Index = () => {
    const [stepper, setSteeper] = useState({
        step: 1
    })
    const [user, setUser] = useState({
        numDocumento: '',
        fecNacimiento: '',
        telefono: '',
    });

    const nextStep = () => {
        setSteeper({
            step: stepper.step + 1
        });
    };

    const prevStep = () => {
        setSteeper({
            step: stepper.step - 1
        });
    };
    const onChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    //Destructuring
    const {step} = stepper
    //
    switch (step) {
        case 1:
            return (
                <Step1
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 2:
            return (
                <Step2
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <Step3
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 4:
            return (
                <Final/>
            );
        default:
            (console.log('Steeper Seguro de Salud'))
    }
}
export default withRouter(Index);
