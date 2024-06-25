import { TreeNode } from "antd/es/tree-select";

interface TreeNode {
  code: string;
  name: string;
  registration_date: string;
  introducer_code?: string | null;
  parent?: string | null ;
  childs?: string[];
  left: (TreeNode|null)[] ; // 左節點
  right: (TreeNode|null)[]; // 右節點
}

interface PolicyholdersContextType {
  policyholder: TreeNode;
  defaultRootCode: string;
  setPolicyholder: (node: TreeNode | null) => void;
  handleParentAsRoot: () => void;
}

interface TreeNodeProps {
  node: TreeNode | null;
  rootCode: string;
  level: number;
  className?: string;
  hasParent?: boolean;
  parentHasRight?: boolean;
}


export type { TreeNode, PolicyholdersContextType, TreeNodeProps };
