import fastify from 'fastify'
import { env } from './env'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Http Server Running!'))
