import ArtCraftCategory from "../ArtCraftCategory";
import Banner from "../Banner";
import CraftItem from "../CraftItem";
import Galary from "../Galary";
import Painter from "../Painter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItem></CraftItem>
            <ArtCraftCategory></ArtCraftCategory>
            <Galary></Galary>
            <Painter></Painter>
        </div>
    );
};

export default Home;