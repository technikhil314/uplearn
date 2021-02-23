import { gql } from '@apollo/client';
import client from '../graphql/client';
import { toastAsyncActions } from './toast';

export const jobActions = {
    GET_JOB_SUCCESS: "GET_JOB_SUCCESS"
};

const initialState = null;

export const jobsAsyncActions = {
    getJob: ({ companySlug, jobSlug }) => {
        return async (dispatch) => {
            const query = gql`
            query GetJobDetails($input: JobInput!) {
                job(input: $input) {
                    id
                    title
                    cities {
                      id
                      name
                    },
                    countries {
                      id
                      name
                    },
                    remotes {
                      name
                      type
                    },
                    company {
                      name
                      logoUrl
                    }
                }
              }
            `;
            const variables = {
                input: {
                    companySlug,
                    jobSlug
                }
            };
            try {
                const { data } = await client
                    .query({ query, variables });
                dispatch({
                    type: jobActions.GET_JOB_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                dispatch(toastAsyncActions.showToast({
                    state: "error",
                    message: "Some error occurred while fetching job details. Please try again in some time.",
                }));
            }
        };
    }
};

export function jobReducer(state = initialState, action) {
    switch (action.type) {
        case jobActions.GET_JOB_SUCCESS:
            return {
                ...action.payload.job,
            };
        default:
            return initialState;
    }
}