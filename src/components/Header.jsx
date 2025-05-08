import { TbCloudComputing } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 shadow-lg">
      <div className="flex items-center gap-4">
        <TbCloudComputing className="text-white text-5xl" />
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          Emelieze's IQ CHECK <span>🧠</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
