import React from "react";;
import ReactDOM  from "react-dom";
import Developer from "./Developer";

class App extends React.Component {
    render() {
        const developer = new Developer('Adam', '2 year', 'front')
        return  <div>
                <h1>Первое реакт приложение на React</h1>
                <p>Hello, developer{developer.name}</p>
            </div>
        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));