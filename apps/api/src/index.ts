import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { apiKeyMiddleware } from './auth'
import { getFeatureFlagsByProjectName } from './featureFlags'
import { prettyJSON } from 'hono/pretty-json'
import { Environment } from '@flag-platform/db/types'

const app = new Hono()

app.use('*', apiKeyMiddleware, prettyJSON())

app.get('/healthz', c => c.json({ status: 'ok' }))

app.get('/flags/:project-name', async c => {
  const projectName = c.req.param('project-name') || ''
  const environmentParam = c.req.query('environment') || ''

  const validationErrors: string[] = []

  if (!projectName) {
    validationErrors.push('Project name is required')
  }

  if (!environmentParam || !(environmentParam.toUpperCase() in Environment)) {
    validationErrors.push('Invalid or missing environment')
  }

  if (validationErrors.length) {
    return c.json({ errors: validationErrors }, { status: 400 })
  }

  const environment = Environment[environmentParam.toUpperCase() as keyof typeof Environment]

  try {
    const flags = await getFeatureFlagsByProjectName(projectName, environment)
    if (!flags) {
      return c.json({ error: 'Project not found' }, { status: 404 })
    }
    return c.json(flags)
  } catch (error) {
    console.error('Failed to retrieve feature flags:', error)
    return c.json({ error: 'Internal Server Error' }, { status: 500 })
  }
})

serve(
  {
    fetch: app.fetch,
    port: 8080,
  },
  info => console.log(`Server is running on http://${info.address}:${info.port}`),
)
