import React from "react";
import { Table } from "antd";
import {
  useGetPolicyholdersQuery,
  Policyholders,
} from "../graphql/types/generate";
import { usePolicyholder } from "../hooks/usePolicyholder.hook";
import { buildTree } from "../utils/treeHelpers";

const AntdTable = () => {
  const { data } = useGetPolicyholdersQuery();
  const { setPolicyholder } = usePolicyholder();

  const handleClick = (nodes: Policyholders[], code: string) => {
    const targetNode = buildTree(nodes, code);
    setPolicyholder(targetNode);
  };

  const columns = [
    {
      title: "保戶號碼",
      dataIndex: "code",
      key: "code",
      render: (text: string) => (
        <a
          className="text-sky-300"
          onClick={() =>
            handleClick(data?.policyholders as Policyholders[], text)
          }
        >
          {text}
        </a>
      ),
    },
    {
      title: "保戶者",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "加保日期",
      dataIndex: "registration_date",
      key: "registration_date",
    },
    {
      title: "介紹人編號",
      dataIndex: "introducer_code",
      key: "introducer_code",
    },
  ];
  return (
    <>
      <Table
        dataSource={data?.policyholders as Policyholders[]}
        columns={columns}
        rowKey="code"
      />
    </>
  );
};

export default AntdTable;
