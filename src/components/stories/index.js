import React from 'react';
import { Link } from 'react-router-dom';

const Stories = ({stories, sendToMachine}) => {

    const selectStory = (story) => {
        sendToMachine("SELECT_STORY", {story})
    }

    return ( 
        <div>
            {
                stories.map(story => <div key={story.id}>
                    <a href="#" onClick={() => selectStory(story)}>
                        {story.title}
                        </a>
                </div>)
            }
        </div>
     );
}
 
export default Stories;