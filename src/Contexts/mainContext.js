import React from "react";

    const AdelContext = React.createContext();

    const ContextProvider = AdelContext.Provider;
    const ContextConsumer = AdelContext.Consumer;

export {ContextProvider , ContextConsumer};