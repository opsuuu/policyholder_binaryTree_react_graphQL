import { FaUsers } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import BinaryTree from "../components/BinaryTree";

interface HomeProps {
  bar: string;
  children: React.ReactNode;
}

const Home = (props: HomeProps) => {
  const { bar, children } = props;

  return (
    <div className="container mx-auto">
      <header className="pt-8 px-5 text-3xl font-medium flex items-center  gap-2.5  border-slate-700">
        <FaUsers /> 保戶關係查詢系統
      </header>
      <SearchBar />
      <BinaryTree />
    </div>
  );
};

export default Home;
