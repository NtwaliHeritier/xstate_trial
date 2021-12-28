import React, {useRef, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { MachineContext } from '../state';

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();

    const [machine, sendToMachine] = useContext(MachineContext);
    const {error} = machine.context;

    const doLogin = () => {
        const username = userRef.current.value;
        const password = passRef.current.value;
        sendToMachine('LOGIN', {username, password})
    }
    return ( 
        <div>
            <div>
                <input type="text" placeholder="Username" ref={userRef}/>
            </div>
            <div>
                <input type="password" placeholder="Password" ref={passRef}/>
            </div>
            {machine.matches('auth.fail') && (
                <p>{error.toString()}</p>
            )}
            <div>
                <button onClick={doLogin}>Login</button>
            </div>

            {machine.matches('auth.success') && <Navigate to="/" />}
        </div>
     );
}
 
export default Login;