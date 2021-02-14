import { gql } from '@apollo/client';
import client from '../graphql/client';
import { toastAsyncActions } from './toast';
const initialState = {};
export const homeActions = {
    GET_ALL_JOBS_SUCCESS: 'GET_ALL_JOBS_SUCCESS',
    GET_ALL_JOBS_FAILURE: 'GET_ALL_JOBS_FAILURE',
};

export const homeAsyncActions = {
    getAllJobs: () => {
        return async (dispatch) => {
            const query = gql`
            query GetAllJobs{
                jobs {
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
            try {
                const { data } = await client
                    .query({ query });
                dispatch({
                    type: homeActions.GET_ALL_JOBS_SUCCESS,
                    payload: data,
                });
            } catch (e) {
                dispatch(toastAsyncActions.showToast({
                    state: "error",
                    message: "Some error occurred while fetching jobs. Please try again in some time.",
                }));
            }
        };
    }
};

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case homeActions.GET_ALL_JOBS_SUCCESS:
            return { ...state, ...action.payload };
        default:
            return initialState;
    }
}