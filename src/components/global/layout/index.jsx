import Navbar from "./navbar";
import "./layout.css"

export default function Layout({children}){
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}