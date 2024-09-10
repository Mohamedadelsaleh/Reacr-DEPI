import React from "react";
import CompE from "./ComponentE/ComponentE";


class CompC extends React.Component {

    render() {
        return (
            <div>
                <h1>Component C</h1>
                <CompE/>
            </div>
        )
    }

}

export default CompC;