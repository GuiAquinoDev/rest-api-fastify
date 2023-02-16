import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Http Server Running!'))
