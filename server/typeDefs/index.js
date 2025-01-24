import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user";
import transactionTypeDef from "./transaction";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;