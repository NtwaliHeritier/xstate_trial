import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useMachine } from "@xstate/react";
import { appMachine, MachineContext } from "../state";
import Home from "../home";
import PrivateRoute from "../privateRoute";
import Login from "../login";

function App() {
 const [currentMachine, sendToMachine] = useMachine(appMachine);
  return (
    <MachineContext.Provider value={[currentMachine, sendToMachine]}>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={
                        <PrivateRoute machine={currentMachine}>
                            <Home/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    </MachineContext.Provider> 
  );
}

export default App;
