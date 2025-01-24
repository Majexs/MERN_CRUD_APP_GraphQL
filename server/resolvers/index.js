import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user";
import transactionResolver from "./transaction";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;