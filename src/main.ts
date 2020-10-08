import * as core from '@actions/core'
import {buildSchema} from 'graphql'
import * as fs from 'fs'
import * as typescriptPlugin from '@graphql-codegen/typescript'
import {codegen} from '@graphql-codegen/core'

import {printSchema, parse, GraphQLSchema} from 'graphql'
import {makeExecutableSchema} from '@graphql-tools/schema'

const schema: GraphQLSchema = buildSchema(`type A {}`)
const outputFile = 'relative/pathTo/filename.ts'

const schemaA = makeExecutableSchema({typeDefs})

const config = {
  // used by a plugin internally, although the 'typescript' plugin currently
  // returns the string output, rather than writing to a file
  filename: outputFile,
  schema: parse(printSchema(schema)),
  plugins: [
    // Each plugin should be an object
    {
      typescript: {} // Here you can pass configuration to the plugin
    }
  ],
  pluginMap: {
    typescript: typescriptPlugin
  }
}

async function run(): Promise<void> {
  try {
    const localSchemaPath: string = core.getInput('local-schema-path')
    const remoteSchemaEndpoint: string = core.getInput('remote-schema-endpoint')
    const remoteSchemaAuthToken: string = core.getInput(
      'remote-schema-auth_token'
    )

    core.debug(`localSchemaPath -- ${localSchemaPath}`)
    core.debug(`remoteSchemaEndpoint -- ${remoteSchemaEndpoint}`)
    core.debug(`remoteSchemaAuthToken -- ${remoteSchemaAuthToken}`)

    core.setOutput('localSchemaPath', localSchemaPath)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
