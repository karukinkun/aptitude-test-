/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createCatergory = /* GraphQL */ `
  mutation CreateCatergory(
    $input: CreateCatergoryInput!
    $condition: ModelCatergoryConditionInput
  ) {
    createCatergory(input: $input, condition: $condition) {
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
export const updateCatergory = /* GraphQL */ `
  mutation UpdateCatergory(
    $input: UpdateCatergoryInput!
    $condition: ModelCatergoryConditionInput
  ) {
    updateCatergory(input: $input, condition: $condition) {
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
export const deleteCatergory = /* GraphQL */ `
  mutation DeleteCatergory(
    $input: DeleteCatergoryInput!
    $condition: ModelCatergoryConditionInput
  ) {
    deleteCatergory(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
