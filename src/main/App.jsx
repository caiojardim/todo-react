import Header from '../components/template/Header'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

import './App.css'

export default function (props) {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}