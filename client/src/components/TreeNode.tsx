import { useState } from "react";
import { usePolicyholder } from "../hooks/usePolicyholder.hook";
import { TreeNodeProps } from "../types/common";
import { getNodeBackgroundColor } from "../utils/treeHelpers";
import { Card } from "antd";

const TreeNode = ({
  node,
  rootCode,
  level,
  className,
  hasParent,
  parentHasRight,
}: TreeNodeProps) => {
  const { setPolicyholder } = usePolicyholder();

  if (!node || level > 4) {
    return null;
  }

  const handleClick = () => {
    setPolicyholder(node);
  };

  const hasLeftChildren = node.left && node.left.length > 0;
  const hasRightChildren = node.right && node.right.length > 0;
  const hasChildren = hasLeftChildren || hasRightChildren;

  return (
    <>
      <div
        className={`tree-node relative flex flex-col items-center mx-5 ${className ? className : ""} level-${level} ${
          parentHasRight ? "parent-has-right" : ""
        }`}
      >
        <div>
          <Card
            title={
              <div
                onClick={handleClick}
                className="underline decoration-1 text-sky-600 cursor-pointer"
              >
                {node.code}
              </div>
            }
            hoverable={true}
            style={{
              width: 200,
              backgroundColor: getNodeBackgroundColor(node, rootCode),
            }}
            className={`border-2 border-slate-950  p-2.5 my-5 text-center z-10 font-roboto ${hasParent ? "has-parent" : ""}`}
          >
            <p>{node.name}</p>
            <p>{node.registration_date}</p>
          </Card>
        </div>
        <div
          className={`node-children flex justify-around w-full relative ${hasChildren ? "has-children" : ""}`}
        >
          {hasLeftChildren &&
            node.left.map((child) => {
              if (child === null) return null;
              return (
                <TreeNode
                  key={child.code}
                  node={child}
                  level={level + 1}
                  rootCode={rootCode}
                  className="left-node"
                  parentHasRight={hasRightChildren}
                  hasParent={true}
                />
              );
            })}
          {hasRightChildren &&
            node.right.map((child) => {
              if (child === null) return null;
              return (
                <TreeNode
                  key={child.code}
                  node={child}
                  level={level + 1}
                  rootCode={rootCode}
                  className="right-node"
                  hasParent={true}
                  parentHasRight={false}
                />
              );
            })}
        </div>
        {hasLeftChildren && <div className="node-children::after"></div>}
        {hasRightChildren && <div className="node-children::after"></div>}
      </div>
    </>
  );
};

export default TreeNode;
