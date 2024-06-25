import { Input } from "antd";
import { usePolicyholder } from "../hooks/usePolicyholder.hook";
import {
  useGetPolicyholdersQuery,
  Policyholders,
} from "../graphql/types/generate";
import { TreeNode } from "@/types/common";
import { buildTree } from "../utils/treeHelpers";
import { SearchProps } from "antd/es/input";
import { CloseOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchBar = () => {
  const { setPolicyholder, defaultRootCode } = usePolicyholder();
  const { data } = useGetPolicyholdersQuery();

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    if (value) {
      if (data?.policyholders) {
        const searchNode = buildTree(
          data.policyholders as Policyholders[],
          value
        );
        handleSearch(searchNode, value);
      }
    }
  };

  function handleSearch(searchNode: TreeNode | null, value: string) {
    const regex = /^[0-9]{10}$/;
    if (!value.match(regex)) {
      alert("請輸入10位數的保戶編號！");
      return;
    }
    if (!value) {
      alert("請輸入保戶編號！");
      return;
    }
    if (searchNode) {
      return setPolicyholder(searchNode);
    } else {
      alert("查無此保戶編號，請重新輸入。");
    }
  }

  const handleClear = () => {
    const defaultNode = buildTree(
      data?.policyholders as Policyholders[],
      defaultRootCode
    );
    setPolicyholder(defaultNode);
  };

  return (
    <>
      <div className="py-8 px-5 flex items-center justify-end">
      <Search
            placeholder="請輸入10位數的保戶編號"
            onSearch={onSearch}
            size="large"
            className="py-1.5 px-7"
            allowClear={{ clearIcon: <CloseOutlined onClick={handleClear} /> }}
            enterButton
          />
      </div>
    </>
  );
};

export default SearchBar;
