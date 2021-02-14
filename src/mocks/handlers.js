import { graphql } from 'msw'

export const handlers = [
    graphql.query('GetAllJobs', (req, res, ctx) => {
        return res(
            ctx.data({
                jobs: [{
                    id: "demo"
                }]
            })
        )
    }),
]