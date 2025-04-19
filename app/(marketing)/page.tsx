import Footer from "./_components/Footer";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

const MarketingPage = ()=> {

  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start gap-y-8 flex-1 px-6">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>    
  );
};

export default MarketingPage;
