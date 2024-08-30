import React, { Component } from "react";


class ConditionalRenderingEx extends Component {

        constructor() {
            super();
            this.state = {
                isLoggedIn: true,
            }
        }

    render() {

        /* 1- if / else 
        if(this.state.isLoggedIn){
            return (
                <section> You are Logged in </section>
            )
        }else{
            return (
                <section> You are still a Guest!</section>
            )
        }
        */


        // 2 - Element Variable
        // let signUpLoggIn;

        // if(this.state.isLoggedIn) {
        //     signUpLoggIn = <section> You are Logged in </section>;
        // }else{
        //     signUpLoggIn= <section> You are still a Guest!</section>;
        // }

       return(
        <div>
            {/*   
                // 3- Ternary Operator
                // (condtion) ? (true) : (false)
                // this.state.isLoggedIn ? (<section> You are Logged in </section>) : (<section> You are still a Guest!</section>)
            */}

            {/** 4- Short Circuit 
            {
                this.state.isLoggedIn && (<section> You are Logged in </section>)

            }
            {

                !this.state.isLoggedIn && (<section> You are still a Guest!</section>)
            }
                */}   
        </div>
       )

    }
}

export default ConditionalRenderingEx;