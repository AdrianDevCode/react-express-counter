import React, {Component} from "react";
import axios from "axios";

class Counter extends Component {
    constructor() {
        super()
        this.state = {counter: 0}
    }

    componentWillMount(){
        axios.get("/counter")
        .then(res => {
            this.setState({counter: res.data.counter});
        });
        
    }

    clickHandleAdd() {
        axios.post("/counter/add")
        .then(res => {
            this.setState({counter: res.data.counter});
        });
    }
    clickHandleSubtract() {
        axios.post("/counter/subtract")
        .then(res => {
            this.setState({counter: res.data.counter});
        });
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <div>
                    <button onClick={this.clickHandleAdd.bind(this)}>ADD</button>
                    <button onClick={this.clickHandleSubtract.bind(this)}>SUBTRACT</button>
                </div>
            </div>
        )
    }
}

export default Counter;