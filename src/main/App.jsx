import Header from '../components/template/Header'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

import './App.css'

import { ReloadContextProvider } from '../components/contexts/ReloadContext'

export default function (props) {
    return (
        <div className="app">
            <ReloadContextProvider>
                <Header />
                    <Main />
                <Footer />
            </ReloadContextProvider> 
        </div>
    )
}