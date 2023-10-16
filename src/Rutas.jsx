import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Form } from './Form.jsx';
import { Registro } from './Registro.jsx';

export function Rutas() {
    return (
    <div>
        <Switch>
            <Route path="/Form" component={Form} />
            <Route path="/Registro" component={Registro} />
        </Switch>
    </div>
);
}

export default Rutas;





