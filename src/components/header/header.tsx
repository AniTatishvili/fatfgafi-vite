import { Navigation } from "../../components/navigation";
import { Logotype } from "../../shared/logotype";
import { HeaderSearchBtn } from "../../shared/buttons";
import { LanguageMenu } from "../../components/language-menu";

export const Header = () => {
  return (
    <header className="w-full bg-[#4f9eb2] transition duration-[500ms] shadow-[0_2px_4px_#00000026]">
      <div className="mx-auto flex w-full md:max-w-[80%] max-w-[90%] lg:flex-col flex-row justify-center lg:pb-0 pb-[16px] gap-4">
        <div className="w-full flex flex-row justify-between">
          <Logotype />
          <div className="hidden lg:flex flex flex-row items-center justify-end h-fit py-5 gap-8">
            <HeaderSearchBtn />
            <LanguageMenu />
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
