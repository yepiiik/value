import React, { useState } from 'react'
import StoryInstance from './StoryInstance'
import style from './StorySection.module.css'

function StorySection() {
    const [storyInstanceList, setStoryInstanceList] = useState([
        {
            videoURL: 'https://videos.pexels.com/video-files/4974445/4974445-hd_1080_1920_30fps.mp4',
            title: 'Beach',
            musicURL: '',
            timeStamp: Date.now() + Math.random() * 1000
        },
        {
            videoURL: 'https://videos.pexels.com/video-files/20752414/20752414-uhd_1440_2560_60fps.mp4',
            title: 'Feel it',
            musicURL: '',
            timeStamp: Date.now() + Math.random() * 1000
        }
    ])

    return (
        <section className={style.StorySection}>
            {storyInstanceList.map((storyInstance, index) => (
                <StoryInstance data={storyInstance} key={index} active={index == 0}/>
            ))}
        </section>
    )
}

export default StorySection