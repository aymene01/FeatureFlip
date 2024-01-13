import { Context, Next } from 'hono'

const expectedApiKey: string = 'your_api_key_here'

export const apiKeyMiddleware = async (context: Context, next: Next): Promise<Response | void> => {
  const apiKey = context.req.header('x-api-key')
  if (apiKey !== expectedApiKey) {
    return new Response('Unauthorized', { status: 401 })
  }
  await next()
}
