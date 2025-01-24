import {users} from '../seeds/data.js'
const userResolver = {
    Query: {
        users: () => {
            return users
        }
    },
    Mutation: {

    }
}

export default userResolver;