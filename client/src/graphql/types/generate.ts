import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Policyholders = {
  childs: Array<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  introducer_code?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Scalars['String']['output']>;
  registration_date: Scalars['String']['output'];
};

export type Query = {
  policyholder?: Maybe<Policyholders>;
  policyholders?: Maybe<Array<Maybe<Policyholders>>>;
};


export type QueryPolicyholderArgs = {
  userInput: SearchCodeInput;
};

export type SearchCodeInput = {
  code: Scalars['String']['input'];
};

export type PolicyholdersDetailsFragment = { code: string, name: string, registration_date: string, introducer_code?: string | null, parent?: string | null, childs: Array<string> };

export type GetPolicyholdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPolicyholdersQuery = { policyholders?: Array<{ code: string, name: string, registration_date: string, introducer_code?: string | null, parent?: string | null, childs: Array<string> } | null> | null };

export const PolicyholdersDetailsFragmentDoc = gql`
    fragment policyholdersDetails on Policyholders {
  code
  name
  registration_date
  introducer_code
  parent
  childs
}
    `;
export const GetPolicyholdersDocument = gql`
    query GetPolicyholders {
  policyholders {
    code
    name
    registration_date
    introducer_code
    parent
    childs
  }
}
    `;

/**
 * __useGetPolicyholdersQuery__
 *
 * To run a query within a React component, call `useGetPolicyholdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPolicyholdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPolicyholdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPolicyholdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>(GetPolicyholdersDocument, options);
      }
export function useGetPolicyholdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>(GetPolicyholdersDocument, options);
        }
export function useGetPolicyholdersSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>(GetPolicyholdersDocument, options);
        }
export type GetPolicyholdersQueryHookResult = ReturnType<typeof useGetPolicyholdersQuery>;
export type GetPolicyholdersLazyQueryHookResult = ReturnType<typeof useGetPolicyholdersLazyQuery>;
export type GetPolicyholdersSuspenseQueryHookResult = ReturnType<typeof useGetPolicyholdersSuspenseQuery>;
export type GetPolicyholdersQueryResult = ApolloReactCommon.QueryResult<GetPolicyholdersQuery, GetPolicyholdersQueryVariables>;