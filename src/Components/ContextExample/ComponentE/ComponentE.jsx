import React from "react";
import CompF from "../ComponentF/ComponentF";
import { ContextConsumer } from "../../../Contexts/mainContext";


class CompE extends React.Component {

    render() {
        return (
            <div>
                    <ContextConsumer>
                        {
                            (hassan) => {
                                return(
                                    <h3>Component E hassan  ----- {hassan.name}</h3>
                                )
                            }
                        }
                    </ContextConsumer>
                <div>
                    <CompF />
                </div>
            </div>
        )
    }

}

export default CompE;