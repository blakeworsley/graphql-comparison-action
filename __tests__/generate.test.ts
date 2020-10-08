import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('generate function works', () => {
  runGenerate()
})

test('test runs', () => {
  process.env['localSchemaPath'] = 'thinkkkkkk'
  process.env['remoteSchemaEndpoint'] = 'thinkkkkkk'
  process.env['remoteSchemaAuthToken'] = 'thinkkkkkk'
  const ip = path.join(__dirname, '..', 'lib', 'generate.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})
