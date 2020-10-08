import * as core from '@actions/core'
import * as fs from 'fs'

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
