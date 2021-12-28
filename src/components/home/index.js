import React, {useContext, useEffect} from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { MachineContext } from '../state';
import Stories from '../stories';
import Story from '../story';

const Home = () => {
    const [currentMachine, sendToMachine] = useContext(MachineContext);
    const {error, stories, selectedStory} = currentMachine.context;
    const {pathname} = useLocation();
    const storyUrl = `/story/${selectedStory?.machine?.context?.story?.id}`

    useEffect(() => {
        sendToMachine('LOAD_STORIES')
    }, [])
    return ( 
        <div>
            {currentMachine.matches("list.loading") && <div>LOADING...</div>}
            {currentMachine.matches("list.fail") && <div>{error.toString()}</div>}
            {currentMachine.matches("list.success") && <Stories stories={stories} sendToMachine={sendToMachine}/>}
            <Routes>
                <Route path="/story/:id" element={<Story selectedStory={selectedStory}/>}/>
            </Routes>
            {currentMachine.matches('stories.selected') && pathname !== storyUrl && <Navigate to={storyUrl} />}
        </div>
     );
}
 
export default Home;