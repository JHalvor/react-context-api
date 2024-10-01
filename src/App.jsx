import { useEffect, useState, createContext  } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TwitterContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <TwitterContext.Provider
            value={{ 
                tweets: tweets, 
                setTweets: setTweets, 
                theme: theme, 
                setTheme: setTheme,
                user: user }}
            >
                <Header/>
                <Tweets/>
                <RightSide/>
            </TwitterContext.Provider>
        </div>
    )
    // return (
    //     <div className="container">
    //         <Header user={user} theme={theme} setTheme={setTheme} />
    //         <Tweets tweets={tweets} setTweets={setTweets} user={user} theme={theme}  />
    //         <RightSide theme={theme} />
    //     </div>
    // )
}

export { App };
