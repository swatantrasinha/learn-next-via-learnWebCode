import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import "./styles/global.css";



const App = (props) => {
    const {Component, pageProps} = props;
    return (
        <>
           <Header/>
            <main>
                <>
                    <h1>This is main area and Landing Page will display here </h1>
                    <Component {...pageProps} />
                </>
            </main>
            <Footer/>
        </>
    )
}

export default App
