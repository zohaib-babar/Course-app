import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Features from "./components/Features"
import Team from "./components/Team"

export default function ResumePage() {
  return (
      <div className="bg-gray-950">
        <Navbar />
        <Banner />
        <Team />
        <Features />
        <Footer />
      </div>
  );
}
