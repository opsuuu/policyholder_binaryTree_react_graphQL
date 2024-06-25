import React, { useContext, useState, useEffect, useMemo } from "react";
import {
  Policyholders,
  useGetPolicyholdersQuery,
} from "../graphql/types/generate";
import { TreeNode, PolicyholdersContextType } from "../types/common";
import { buildTree } from "../utils/treeHelpers";

export const PolicyholderContext =
  React.createContext<PolicyholdersContextType | null>(null);

export const PolicyholderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [policyholder, setPolicyholder] = useState<TreeNode | null>(null);
  const defaultRootCode = "0000000001";

  const { data } = useGetPolicyholdersQuery();

  const treeNodes = useMemo(() => {
    if (data && data?.policyholders) {
      return buildTree(data?.policyholders as Policyholders[], defaultRootCode);
    }
    return null;
  }, [data?.policyholders, defaultRootCode]);

  useEffect(() => {
    setPolicyholder(treeNodes);
  }, [treeNodes]);

  function handleParentAsRoot() {
    if (policyholder && policyholder.parent) {
      const parentNode = buildTree(
        data?.policyholders as Policyholders[],
        policyholder?.parent
      );
      if (parentNode) {
        setPolicyholder(parentNode);
      }
    }
  }

  return (
    <PolicyholderContext.Provider
      value={{
        policyholder,
        defaultRootCode,
        setPolicyholder,
        handleParentAsRoot,
      }}
    >
      {children}
    </PolicyholderContext.Provider>
  );
};
