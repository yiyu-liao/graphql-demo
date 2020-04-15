import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

// user type
const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        id:  { type: GraphQLID },
        username: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }
});

// Data reponse of user
const DataResponse = new GraphQLObjectType({
    name: "DataResponse",
    fields: {
      success: { type: GraphQLBoolean }
    },
  });

const responseType = new GraphQLObjectType({
    name: "Response",
    fields: {
      code: { type: new GraphQLNonNull(GraphQLInt) },
      message: { type: new GraphQLNonNull(GraphQLString) },
      data: { type: new GraphQLNonNull(DataResponse) },
    },
  });

const UserInput = new GraphQLInputObjectType({
    name: "UserInputRegister",
    fields: {
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    }
});


export const userRegisterSchema = {
    userType,
    responseType,
    UserInput
}