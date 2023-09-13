import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkHandler} from 'apollo-angular/http';
import {NgModule} from '@angular/core';
import {InMemoryCache} from '@apollo/client/core';
import {HTTP_INTERCEPTORS, HttpHeaders} from '@angular/common/http';
import {GlobalHttpInterceptor} from './global-http.interceptor';
import {getMainDefinition} from '@apollo/client/utilities';
import {environment} from 'src/environments/environment';

const uri = environment.graphqlUrl; // <-- add the URL of the GraphQL server here

@NgModule({
    exports: [ApolloModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalHttpInterceptor,
            multi: true,


            deps: [HttpLink],
        }, {
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink) {
                const jwtToken = localStorage.getItem('jwt_token');

                const url = uri
                const wsUrl = url.replace('http', 'ws');

                const http = httpLink.create({
                    uri: url,
                    headers: new HttpHeaders({
                        "x-hasura-admin-secret": "myadminsecretkey"
                    })
                })

                const ws = new WebSocket({
// @ts-ignore
                    uri: wsUrl,
                    options: {
                        reconnect: true,
                        connectionParams: {
                            headers: {

                                "x-hasura-admin-secret": "myadminsecretkey"
                            }
                        }
                    }
                });

                const link = split(
                    // split based on operation type
                    ({query}) => {
                        const definition = getMainDefinition(query);
                        return (
                            definition.kind === 'OperationDefinition' &&
                            definition.operation === 'subscription'
                        );
                    },
                    ws,
                    http,
                );

                return {
                    link,
                    cache: new InMemoryCache({
                        addTypename: false
                    }),
                };
            },
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {
}

function split(arg0: ({query}: { query: any; }) => boolean, ws: WebSocket, http: HttpLinkHandler) {
    throw new Error('Function not implemented.');
}

