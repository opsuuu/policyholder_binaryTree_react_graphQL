import React from "react";
import { RiFlowChart } from "react-icons/ri";
import TreeNode from "./TreeNode";
import { usePolicyholder } from "../hooks/usePolicyholder.hook";
import { useGetPolicyholdersQuery } from "../graphql/types/generate";

import AntdTable from "./Table";

const BinaryTree: React.FC = () => {
  const { policyholder, handleParentAsRoot } = usePolicyholder();
  const { loading, error } = useGetPolicyholdersQuery();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <div className="text-xl font-medium flex items-center gap-1.5">
        <RiFlowChart /> 關係圖
      </div>
      <div className="flex justify-start items-center overflow-x-auto">
        <div className="inline-block">
          {policyholder ? (
            <TreeNode
              node={policyholder}
              rootCode={policyholder.code}
              level={1}
              hasParent={false}
              parentHasRight={false}
              className={undefined}
            />
          ) : (
            <div className="no-data-text">未選擇要查閱的投保人。</div>
          )}
        </div>

        {policyholder && policyholder.parent !== null && (
          <button className="previous-level-btn" onClick={handleParentAsRoot}>
            <span>上一層</span>
          </button>
        )}
      </div>
      <div className="mt-5">
        <div className="mb-3  text-3xl font-medium flex items-center  gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          保戶清單
        </div>
        <AntdTable />
      </div>
    </main>
  );
};

export default BinaryTree;
