import React, { useState } from 'react'
import TextSection from './sections/TextSection/TextSection';

function ProductEditor() {
    const [sectionList, setSectionList] = useState([
        {
            type: 'text',
            content: 'Hello, it is the text section'
        }
    ]);

    const sectionExample = {
        type: 'type',
        content: 'content'
    }
    const onAddSection = () => {
        setSectionList([...sectionList, sectionExample])
    }

    return (
        <div>
            <button onClick={onAddSection}>Add section</button>
            <main>
                {sectionList.map((section) => (
                    <TextSection state={section} />
                ))}
            </main>
        </div>
    )
}

export default ProductEditor