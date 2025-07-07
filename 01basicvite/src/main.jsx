import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
        
    },
    childen: 'Click me to visit google'
}
function MyApp(){
    return(
        <div>
            <h1>custom react app</h1>
        </div>
    )
}
const AnotherElement=(
    <a href="https://google.com" target="_blank">Visit Google</a>

)
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

)
