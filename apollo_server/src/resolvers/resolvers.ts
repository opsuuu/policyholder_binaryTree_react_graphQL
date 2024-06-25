import policyholders from "../tempData";

export const resolvers = {
  Query: {
    policyholders: async (parent: any, args: any) => {
      return policyholders;
    },
    policyholder: async (parent: any, args: any) => {
      const searchCode = args.userInput.code;
      console.log(searchCode);
      const currentNode = policyholders.filter(node => node.code === searchCode )
      console.log(currentNode)
      return currentNode[0]
    },
  },
};
