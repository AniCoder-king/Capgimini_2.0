import Carausal from "./Carausal";
import SecondComponent from "./SecondComponent";

function Home() {
    return (<>

        <Carausal />
        <div className="m-5">
            <SecondComponent />
        </div>

    </>)
}
export default Home;