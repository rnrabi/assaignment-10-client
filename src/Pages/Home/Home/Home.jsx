import ArtCraftCategory from "../ArtCraftCategory";
import Banner from "../Banner";
import CraftItem from "../CraftItem";
import Galary from "../Galary";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItem></CraftItem>
            <ArtCraftCategory></ArtCraftCategory>
            <Galary></Galary>
        </div>
    );
};

export default Home;