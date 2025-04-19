import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex items-center w-full px-4 py-1 z-50">
      <div className="w-[150px] hidden md:block">
        <Logo />
      </div>
      <div className="w-full flex justify-between items-ceneter gap-x-2 md:justify-end md:ml-auto text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
