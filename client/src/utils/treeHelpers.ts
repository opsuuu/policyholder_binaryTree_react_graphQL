import { Policyholders } from "@/graphql/types/generate";
import { TreeNode } from "@/types/common";


export function getNode(nodes: Policyholders[], code: string) {
  return nodes.find((n) => n.code === code);
}

export function buildTree(
  nodes: Policyholders[],
  targetCode: string
): TreeNode|null{
  const node = getNode(nodes, targetCode);
  if (!node) return null;

  const left =
    node.childs && node.childs.length > 0 && node.childs[0]
      ? [buildTree(nodes, node.childs[0])]
      : [];
  const right =
    node.childs && node.childs.length > 1 && node.childs[1]
      ? [buildTree(nodes, node.childs[1])]
      : [];

  return {
    code: node.code,
    name: node.name,
    registration_date: node.registration_date,
    introducer_code: node.introducer_code,
    parent: node.parent,
    childs: node.childs,
    left,
    right,
  };
}

export function getNodeBackgroundColor(node: TreeNode, rootCode: string){
  if (node.code === rootCode) return "#ffdf5d"; //主節點
  if (node.introducer_code === rootCode) return "#8FD04E"; // 直接介紹節點
  return "#E6E6E6"; // 間接介紹節點
};
