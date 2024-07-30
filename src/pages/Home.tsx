import Navbar from "../components/molecules/Navbar";
import AboutUs from "./AboutUs";
import Academics from "./Academics";
import Admissions from "./Admissions";
import ContactUs from "./ContactUs";
import Faculty from "./Faculty";
import Landing from "./Landing";
import Students from "./Students";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Landing />
      <AboutUs />
      <Academics />
      <Admissions />
      <Students />
      <Faculty />
      <ContactUs />
    </div>
  );
}

export default Home;
