import AboutUsPage from "./components/landingPage/aboutUsPage";
import HeaderPage from "./components/landingPage/headerPage";
import MobilePage from "./components/landingPage/mobilePage";
import ProcessPage from "./components/landingPage/processPage";
export default function Page() {
  return (
    <div>
      <HeaderPage />
      <ProcessPage />
      <AboutUsPage />
      {/* <MobilePage /> */}
    </div>
  );
}
