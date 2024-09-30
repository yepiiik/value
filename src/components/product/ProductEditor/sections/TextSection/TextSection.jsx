import React, { useRef } from 'react'

function TextSection({state}) {
    const sectionValueRef = useRef(state)

    const onInputHandler = (e) => {
        sectionValueRef.current = {...state, content: e.target.innerText}
        console.dir(sectionValueRef)
    }

    return (
        <section contentEditable onInput={onInputHandler}>{sectionValueRef.current.content}</section>
    )
}

export default TextSection