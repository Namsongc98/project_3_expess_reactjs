
import Footer from "./DefaultLayout/Footer/Footer";
import Header from "./DefaultLayout/Header/Header";

function DefaultLayout ({children}) {
    return ( 
        <div>
                <Header/>
                <div>
                    {children}
                </div>
                <Footer/>
        </div>
     );
}

export default DefaultLayout ;