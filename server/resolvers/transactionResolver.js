import Transaction from '../models/transactionModel.js';

const transactionResolver = {
    Query: {
        transactions: async (_, context) => {
            try {
                if (!context.getUser()) {throw new Error("Unauthorized")};
                const userId = await context.getUser()._id;
                const transactions = await Transaction.find({userId});
                return transactions;
            } catch(err) {
                console.error("Error getting transactions", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        transaction: async (_, {transactionId},) => {
            try {
                const transaction = await Transaction.findById(transactionId);
                return transaction;
            } catch(err) {
                console.error("Error getting transaction", err);
                throw new Error(err.message || "Internal server error");
            }
        },

        // TODO => ADD CATEGORYSTATISTICS QUERY

    },
    Mutation: {
        createTransaction: async(_,{input},context) => {
            try {
                const newTransaction = new Transaction({
                    ...input,
                    userId:context.getUser()._id
                })
                await newTransaction.save();
                return newTransaction;
            } catch(err) {
                console.error("Error creating transaction", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        updateTransaction: async(_,{input}) => {
            try {
                const updatedTransaction = await Transaction.findByIdAndUpdate(input.transactionId,input,{new:true});
                return updatedTransaction;
            } catch(err) {
                console.error("Error updating transaction", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        deleteTransaction: async(_,{transactionId}) => {
            try {
                const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
                return deletedTransaction;
            } catch(err) {
                console.error("Error deleting transaction", err);
                throw new Error(err.message || "Internal server error");
            }
        },
    },

    // TODO => ADD USER/TRANSACTION RELATION

};

export default transactionResolver;