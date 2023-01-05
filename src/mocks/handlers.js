import { rest } from 'msw'
import { correctQueryJson, wrongQueryJson } from './handlersJsons';

const url = "https://api.openweathermap.org/data/2.5/forecast";

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    const city = req.url.searchParams.get('q')
    if (city === "bari") {
      return res(ctx.status(200), ctx.json(correctQueryJson))
    } else if (city === "not a real city") {
      return res(ctx.status(404), ctx.json(wrongQueryJson))
    }
  })
]