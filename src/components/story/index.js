import { useService } from "@xstate/react";

const Story = (props) => {
    const [storyService, sendToStory] = useService(props.selectedStory);
    const {story} = storyService.context;
    
    const handleBack = () => {
        
    }

    return ( 
        <div>
            <button onClick={handleBack}>Back</button>
            <h3>Title: {story.title}</h3>
            <h5>By: {story.by}</h5>
            <p>{story.url}</p>
        </div>
     );
}
 
export default Story;