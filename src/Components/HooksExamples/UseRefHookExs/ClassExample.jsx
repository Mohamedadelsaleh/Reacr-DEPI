import React from "react";

class RefsExample extends React.Component {

    constructor(){
        super();
        this.hendRef = React.createRef();
    }

    componentDidMount(){
        this.hendRef.current.focus();
    }

    render() {
        return (
            <div>
                <label>E-mail: </label>
                <input type="text" ref={this.hendRef} />
            </div>
        )
    }
}

export default RefsExample;