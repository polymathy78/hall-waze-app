/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
