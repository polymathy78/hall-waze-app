/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudentRecord = /* GraphQL */ `
  query GetStudentRecord($id: ID!) {
    getStudentRecord(id: $id) {
      id
      StudentID
      Name
      Destination
      DepartureTime
      ReturnTime
      SchoolID
      SchoolName
      TeacherID
      TeacherName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudentRecords = /* GraphQL */ `
  query ListStudentRecords(
    $filter: ModelStudentRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        StudentID
        Name
        Destination
        DepartureTime
        ReturnTime
        SchoolID
        SchoolName
        TeacherID
        TeacherName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
