import React, { Component } from 'react'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { dataUser: {} }
    }
    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        await fetch('http://127.0.0.1:3456')
            .then((resp) => resp.json())
            .then((dataJson) => this.setState({ dataUser: dataJson }))
            .catch((err) => console.log(err))
    }
    render() {
        const { name, thirdname } = this.state.dataUser
        return (
            <div>
                <div>
                    Hello {name} {thirdname}
                </div>
            </div>
        )
    }
}
export default App
