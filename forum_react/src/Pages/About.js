import React from 'react'
import { useParams } from 'react-router'

const About = () => {
    const msg = useParams()
    console.log(msg)

    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default About
