import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        {/* Title  */}
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>

        {/* Slider Section  */}
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};
export default FlavorSection;
