import { GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString  } from 'graphql'
import { userRegisterSchema } from './userRegisterSchema'
import { register, login } from '../routes'


// Define the Query type
const queryType = new GraphQLObjectType({
    name: "Query",
    fields: {
        loginUser: {
            type: new GraphQLNonNull(userRegisterSchema.responseType),
            args: {
                input: { type: userRegisterSchema.UserInput }
            },
            async resolve(_, args) {
                // to do something you want
                const res = await login(args)
                return res;
            }
        }
        
    }
})


// // Define the mutation type
const mutationType = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        register: {
            type: new GraphQLNonNull(userRegisterSchema.responseType),
            args: {
                input: { type: userRegisterSchema.UserInput }
            },
            async resolve(_, args) {
                // to do something you want
                const res = await register(args)
                return res;
            }

        }
        
    }
})


export const schema = new GraphQLSchema({
    query: queryType,
    // mutation: mutationType
})
