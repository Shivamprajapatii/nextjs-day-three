import { ReactNode } from "react";

export default function({children} : {children: ReactNode}){
    return(
        <div>
            <h1>Header</h1>
            {children}
            <h1>Footer</h1>
        </div>
    )
}