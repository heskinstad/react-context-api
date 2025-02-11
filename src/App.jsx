import { useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import userImport from './assets/data/user.js'

import { createContext } from "react"
const MyContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(userImport);

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <MyContext.Provider value={ { user, tweets, setTweets } }>
                <Header theme={theme} setTheme={setTheme} />
                <Tweets theme={theme}  />
                <RightSide theme={theme} />
            </MyContext.Provider>
        </div>
    )
}

export { MyContext, App };
