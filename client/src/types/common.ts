interface TreeNode {
  code: string;
  name: string;
  registration_date: string;
  introducer_code?: string | null;
  parent?: string | null ;
  children?: string[];
  left: TreeNode[]; // 左節點
  right: TreeNode[]; // 右節點
}

interface PolicyholdersContextType {
  policyholder: TreeNode | null;
  defaultRootCode: string;
  setPolicyholder: (node: TreeNode) => void;
  handleParentAsRoot: () => void;
}

interface TreeNodeProps {
  node: TreeNode;
  rootCode: string;
  level: number;
  className?: string;
  hasParent?: boolean;
  parentHasRight?: boolean;
}

export type { TreeNode, PolicyholdersContextType, TreeNodeProps };
