/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStudentRecord = /* GraphQL */ `
  subscription OnCreateStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onCreateStudentRecord(filter: $filter) {
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
export const onUpdateStudentRecord = /* GraphQL */ `
  subscription OnUpdateStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onUpdateStudentRecord(filter: $filter) {
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
export const onDeleteStudentRecord = /* GraphQL */ `
  subscription OnDeleteStudentRecord(
    $filter: ModelSubscriptionStudentRecordFilterInput
  ) {
    onDeleteStudentRecord(filter: $filter) {
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
