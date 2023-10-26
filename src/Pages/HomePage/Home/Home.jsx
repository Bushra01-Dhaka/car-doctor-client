import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactStat from "../ContactStat/ContactStat";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <ContactStat></ContactStat>
           <Team></Team>
        </div>
    );
};

export default Home;