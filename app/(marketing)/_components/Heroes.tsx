import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col justify-center items-center]">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px]md:h-[400px]">
          <Image
            src="/document.svg"
            alt="document"
            className="dark:hidden object-contain"
            fill
          />
          <Image
            src="/document-dark.svg"
            alt="document"
            className="hidden dark:block object-contain"
            fill
          />
        </div>
        <div className="relative w-[400px] h-[400px] py-10 hidden md:block">
          <Image
            src="/reading.svg"
            alt="reading"
            className="dark:hidden object-contain"
            fill
          />
          <Image
            src="/reading-dark.svg"
            alt="reading"
            className="hidden dark:block object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
