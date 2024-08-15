const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
} = require('graphql')

// Mongoose Models
const Client = require('../models/Client')
const Project = require('../models/Project')

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
})

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLID},
        client: {
            type: ClientType,
            resolve(parent) {
                return Client.findById(parent.clientId)
            }
        },
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
    })
})

// All queries (GET Request)
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve() {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Client.findById(args.id)
            }
        },

        projects: {
            type: new GraphQLList(ProjectType),
            resolve() {
                return Project.find()
            }
        },
        project: {
            type: ProjectType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Project.findById(args.id)
            }
        }
    }
})

// Mutations (Alter Request such Create,Delete,Update)
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // add client
        addClient: {
            type: ClientType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLNonNull(GraphQLString)},
                phone: {type: GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args, context) {
                const client = new Client(args)
                return client.save()
            }
        },
        // delete client
        deleteClient: {
            type: ClientType,
            args: {id: {type: GraphQLNonNull(GraphQLID)}},
            resolve(parent, args) {
                return Client.findByIdAndDelete(args.id)
            }
        },
        // add project
        addProject: {
            type: ProjectType,
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString},
                status: {
                    type: new GraphQLEnumType({
                        name: "ProjectStatus",
                        values: {
                            not_started: {value: "Not Started"},
                            in_progress: {value: "In Progress"},
                            completed: {value: "Completed"},
                        }
                    }),
                    defaultValue: 'Not Started'
                },
                clientId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args, context) {
                const project = new Project(args)
                return project.save()
            }
        },
        // delete project
        deleteProject: {
            type: ProjectType,
            args: {id: {type: GraphQLNonNull(GraphQLID)}},
            resolve(parent, args, context) {
                return Project.findByIdAndDelete(args.id)
            }
        },
        // update project
        updateProject: {
            type: ProjectType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                status: {
                    type: new GraphQLEnumType({
                        name: "UpdateStatus",
                        values: {
                            not_started: {value: "Not Started"},
                            in_progress: {value: "In Progress"},
                            completed: {value: "Completed"},
                        }
                    })
                },
                clientId: {type: GraphQLID}
            },
            resolve(parent, args, context) {
                return Project.findByIdAndUpdate({_id: args.id}, {
                    name: args.name,
                    status: args.status,
                    clientId: args.clientId,
                },{new:true})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})
