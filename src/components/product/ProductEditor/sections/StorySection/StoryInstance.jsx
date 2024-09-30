import React, { useEffect, useState } from 'react'
import style from './StoryInstance.module.css'

function StoryInstance({data, active}) {
    const [storyVideoStyles, setStoryVideoStyles] = useState([style.StoryVideoBlock])
    
    useEffect(() => {
        if (active) setStoryVideoStyles([...storyVideoStyles, style.ActiveStory])
    }, [active])

    return (
        <div className={style.StoryInstance}>
            <div className={storyVideoStyles.join(' ')}>
                <video
                    className={style.StoryVideo}
                    src={data.videoURL}
                />
            </div>
            <h3>{data.title}</h3>
            <audio src={data.musicURL} />
        </div>
    )
}

export default StoryInstance