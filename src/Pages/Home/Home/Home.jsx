import { Helmet } from "react-helmet-async";
import ArtCraftCategory from "../ArtCraftCategory";
import Banner from "../Banner";
import CraftItem from "../CraftItem";
import Galary from "../Galary";
import Painter from "../Painter";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ArtitryAvenue | Home</title>
            </Helmet>

            <Banner></Banner>
            <CraftItem></CraftItem>
            <ArtCraftCategory></ArtCraftCategory>
            <Galary></Galary>
            <Painter></Painter>
        </div>
    );
};

export default Home;