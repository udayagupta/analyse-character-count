import React from "react";
import Theme from "./Theme";

export const useTheme = () => {
    const context = React.useContext(Theme);
    
    return context;
}