import { useState, useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { usePolicyholder } from "../hooks/usePolicyholder.hook";
import {
  useGetPolicyholdersQuery,
  Policyholders,
} from "../graphql/types/generate";
import { buildTree } from "../utils/treeHelpers";

const SearchBar = () => {
  const [searchCode, setSearchCode] = useState<string>("");
  const { setPolicyholder, defaultRootCode } = usePolicyholder();
  const { data } = useGetPolicyholdersQuery();

  const treeNodes = useMemo(() => {
    if (data && data?.policyholders) {
      return buildTree(data?.policyholders as Policyholders[], searchCode);
    }
    return null;
  }, [data?.policyholders, searchCode]);

  const handleSearch = () => {
    const regex = /^[0-9]{10}$/;
    if (!searchCode.match(regex)) {
      alert("請輸入10位數的保戶編號！");
      return;
    }
    if (!searchCode) {
      alert("請輸入保戶編號！");
      return;
    }
    if (treeNodes) {
      return setPolicyholder(treeNodes);
    } else {
      alert("查無此保戶編號，請重新輸入。");
    }
  };

  const handleClear = () => {
    if (!searchCode) return;
    setSearchCode("");
    const defaultNode = buildTree(
      data?.policyholders as Policyholders[],
      defaultRootCode
    );
    setPolicyholder(defaultNode);
  };

  return (
    <div className="searchContainer bg-gray-400 my-5 py-8 px-5 border-2 border-slate-700 flex items-center">
      <div className="relative">
        <label htmlFor="search" className="me-2.5 font-medium">
          保護編號
        </label>
        <input
          type="text"
          className="py-1.5 px-7"
          placeholder="請輸入保護編號"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
        />
        <IoClose className="absolute top-1/2 right-2.5 w-4 h-4 -translate-y-1/2	cursor-pointer  hover:text-orange-300" onClick={handleClear} />
      </div>
      <div className="submitBtn bg-sky-200 py-1.5 px-12 border border-sky-900 submitBtn ms-4  hover:bg-sky-300 hover:shadow-none" onClick={handleSearch}>
        查詢
      </div>
    </div>
  );
};

export default SearchBar;
