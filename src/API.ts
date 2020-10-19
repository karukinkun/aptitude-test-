/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateCatergoryInput = {
  id?: string | null,
  description: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCatergoryConditionInput = {
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCatergoryConditionInput | null > | null,
  or?: Array< ModelCatergoryConditionInput | null > | null,
  not?: ModelCatergoryConditionInput | null,
};

export type UpdateCatergoryInput = {
  id: string,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCatergoryInput = {
  id?: string | null,
};

export type CreateQuizInput = {
  id?: string | null,
  catergoryId: string,
  no: number,
  question: string,
  answer: string,
  choicesA?: string | null,
  choicesB?: string | null,
  choicesC?: string | null,
  choicesD?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelQuizConditionInput = {
  catergoryId?: ModelIDInput | null,
  no?: ModelIntInput | null,
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  choicesA?: ModelStringInput | null,
  choicesB?: ModelStringInput | null,
  choicesC?: ModelStringInput | null,
  choicesD?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuizConditionInput | null > | null,
  or?: Array< ModelQuizConditionInput | null > | null,
  not?: ModelQuizConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateQuizInput = {
  id: string,
  catergoryId?: string | null,
  no?: number | null,
  question?: string | null,
  answer?: string | null,
  choicesA?: string | null,
  choicesB?: string | null,
  choicesC?: string | null,
  choicesD?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteQuizInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelCatergoryFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCatergoryFilterInput | null > | null,
  or?: Array< ModelCatergoryFilterInput | null > | null,
  not?: ModelCatergoryFilterInput | null,
};

export type ModelQuizFilterInput = {
  id?: ModelIDInput | null,
  catergoryId?: ModelIDInput | null,
  no?: ModelIntInput | null,
  question?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  choicesA?: ModelStringInput | null,
  choicesB?: ModelStringInput | null,
  choicesC?: ModelStringInput | null,
  choicesD?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuizFilterInput | null > | null,
  or?: Array< ModelQuizFilterInput | null > | null,
  not?: ModelQuizFilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCatergoryMutationVariables = {
  input: CreateCatergoryInput,
  condition?: ModelCatergoryConditionInput | null,
};

export type CreateCatergoryMutation = {
  createCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateCatergoryMutationVariables = {
  input: UpdateCatergoryInput,
  condition?: ModelCatergoryConditionInput | null,
};

export type UpdateCatergoryMutation = {
  updateCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteCatergoryMutationVariables = {
  input: DeleteCatergoryInput,
  condition?: ModelCatergoryConditionInput | null,
};

export type DeleteCatergoryMutation = {
  deleteCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateQuizMutationVariables = {
  input: CreateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type CreateQuizMutation = {
  createQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type UpdateQuizMutationVariables = {
  input: UpdateQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type UpdateQuizMutation = {
  updateQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type DeleteQuizMutationVariables = {
  input: DeleteQuizInput,
  condition?: ModelQuizConditionInput | null,
};

export type DeleteQuizMutation = {
  deleteQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCatergoryQueryVariables = {
  id: string,
};

export type GetCatergoryQuery = {
  getCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListCatergorysQueryVariables = {
  filter?: ModelCatergoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCatergorysQuery = {
  listCatergorys:  {
    __typename: "ModelCatergoryConnection",
    items:  Array< {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetQuizQueryVariables = {
  id: string,
};

export type GetQuizQuery = {
  getQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type ListQuizsQueryVariables = {
  filter?: ModelQuizFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuizsQuery = {
  listQuizs:  {
    __typename: "ModelQuizConnection",
    items:  Array< {
      __typename: "Quiz",
      id: string,
      catergoryId: string,
      no: number,
      question: string,
      answer: string,
      choicesA: string | null,
      choicesB: string | null,
      choicesC: string | null,
      choicesD: string | null,
      createdAt: string | null,
      updatedAt: string | null,
      catergory:  {
        __typename: "Catergory",
        id: string,
        description: string,
        createdAt: string | null,
        updatedAt: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCatergorySubscription = {
  onCreateCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateCatergorySubscription = {
  onUpdateCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteCatergorySubscription = {
  onDeleteCatergory:  {
    __typename: "Catergory",
    id: string,
    description: string,
    quizs:  {
      __typename: "ModelQuizConnection",
      items:  Array< {
        __typename: "Quiz",
        id: string,
        catergoryId: string,
        no: number,
        question: string,
        answer: string,
        choicesA: string | null,
        choicesB: string | null,
        choicesC: string | null,
        choicesD: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateQuizSubscription = {
  onCreateQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type OnUpdateQuizSubscription = {
  onUpdateQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};

export type OnDeleteQuizSubscription = {
  onDeleteQuiz:  {
    __typename: "Quiz",
    id: string,
    catergoryId: string,
    no: number,
    question: string,
    answer: string,
    choicesA: string | null,
    choicesB: string | null,
    choicesC: string | null,
    choicesD: string | null,
    createdAt: string | null,
    updatedAt: string | null,
    catergory:  {
      __typename: "Catergory",
      id: string,
      description: string,
      quizs:  {
        __typename: "ModelQuizConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
  } | null,
};
