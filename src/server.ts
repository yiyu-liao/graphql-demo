import { ApolloServer, gql } from 'apollo-server-koa';
import * as Koa from 'koa';
import { schema } from './schema'

export class App {

    private app: any;
    public port: any;
    
    constructor(private portGiven) {
        this.port = portGiven;
    }

    public startServer() {
        this.initServices().then(() => {
            this.initKoa()
        })

    }

    private initServices(): Promise<boolean> {
        return new Promise<boolean>((relove, reject) => {
            relove(true)
        })
    }

    private initKoa() {
        // const books = [
        //     {
        //         title: 'xxx',
        //         author: 'Mr.a'
        //     },
        //     {
        //         title: 'aaa',
        //         author: 'Mr.b'
        //     }

        // ];
        // const typeDefs = gql`
        //     type Book {
        //         title: String
        //         author: String
        //     }
        //     type Query {
        //         books: [Book]
        //     }
        // `;
        // const resolvers = {
        //     Query: {
        //         books: () => books
        //     }
        // }
        this.app = new Koa();

        const server = new ApolloServer({ schema });
        server.applyMiddleware({ app: this.app })

        this.app.listen({ port: this.port }, () =>
        console.log(`🚀 Server ready at http://localhost:${this.port}${server.graphqlPath}`),);
    }
}