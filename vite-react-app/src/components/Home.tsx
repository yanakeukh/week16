import "./home.css"
import Form from "./Form";
import Gallery from "./Gallery";

export default function Home() {
    return( 
        <div>
            <div className="homepage">
                <div className="homepage-main">
                    <h1>HOME</h1> 
                        <Form/>
                        <Gallery/>
                </div>  
            </div>
        </div>
)
}