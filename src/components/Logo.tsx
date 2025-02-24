import LogoSVG from "../assets/images/logo.svg";
const Logo = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <img src={LogoSVG} alt="Logo" className="h-full" />
    </div>
  );
};

export default Logo;
