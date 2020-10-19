/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCatergory = /* GraphQL */ `
  subscription OnCreateCatergory {
    onCreateCatergory {
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
export const onUpdateCatergory = /* GraphQL */ `
  subscription OnUpdateCatergory {
    onUpdateCatergory {
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
export const onDeleteCatergory = /* GraphQL */ `
  subscription OnDeleteCatergory {
    onDeleteCatergory {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
