import React from "react";
import { ContextConsumer } from "../../../../Contexts/mainContext";

class CompF extends React.Component {

    render() {
        return (
            <div>
                <ContextConsumer>
                    {
                        (mohamed) => {
                            return (
                                <h6>Component F Mohamed Value ---- {mohamed.age}</h6>
                            )
                        }
                    }
                    
                
                </ContextConsumer>
            </div>
        )
    }

}

export default CompF;