import AboutUsPage from "./pages/aboutUsPage";
import HeaderPage from "./pages/headerPage";
import MobilePage from "./pages/mobilePage";
import ProcessPage from "./pages/processPage";
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
