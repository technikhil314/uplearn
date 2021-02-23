import { graphql } from 'msw'

export const handlers = [
    graphql.query('GetAllJobs', (req, res, ctx) => {
        return res(
            ctx.data({
                jobs: [{
                    "id": "somerandomjobid",
                    "title": "Some random job title",
                    "cities": [
                        {
                            "id": "somerandomcityid",
                            "name": "Some city"
                        },
                        {
                            "id": "somerandomcityid2",
                            "name": "Some city 2"
                        }
                    ],
                    "countries": [
                        {
                            "id": "somerandomcityid2",
                            "name": "Some city 2"
                        }
                    ],
                    "remotes": [{
                        "name": "remote",
                        "type": "remote"
                    }],
                    "company": {
                        "name": "some comapny name",
                        "logoUrl": "//via.placeholder.com/80x80"
                    }
                }]
            })
        )
    }),
    graphql.query('GetJobDetails', (req, res, ctx) => {
        return res(
            ctx.data({
                jobs: [{
                    "id": "somerandomjobdetailsid",
                    "title": "Some random job details title",
                    "cities": [
                        {
                            "id": "somerandomcityjobdetailsid",
                            "name": "Some jobdetails city"
                        },
                        {
                            "id": "somerandomjobdetailscityid2",
                            "name": "Some jobdetails city 2"
                        }
                    ],
                    "countries": [
                        {
                            "id": "somerandomjobdetailscityid2",
                            "name": "Some jobdetails city 2"
                        }
                    ],
                    "remotes": [{
                        "name": "remote",
                        "type": "remote"
                    }],
                    "company": {
                        "name": "some jobdetails comapny name",
                        "logoUrl": "//via.placeholder.com/80x80"
                    }
                }]
            })
        )
    })
]