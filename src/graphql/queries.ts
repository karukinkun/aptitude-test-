/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCatergory = /* GraphQL */ `
  query GetCatergory($id: ID!) {
    getCatergory(id: $id) {
      id
      description
      quizs {
        items {
          id
          catergoryId
          no
          question
          answer
          choicesA
          choicesB
          choicesC
          choicesD
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCatergorys = /* GraphQL */ `
  query ListCatergorys(
    $filter: ModelCatergoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatergorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        quizs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      catergoryId
      no
      question
      answer
      choicesA
      choicesB
      choicesC
      choicesD
      createdAt
      updatedAt
      catergory {
        id
        description
        quizs {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        catergoryId
        no
        question
        answer
        choicesA
        choicesB
        choicesC
        choicesD
        createdAt
        updatedAt
        catergory {
          id
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
