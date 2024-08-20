/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudentRecord = /* GraphQL */ `
  mutation CreateStudentRecord(
    $input: CreateStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    createStudentRecord(input: $input, condition: $condition) {
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
export const updateStudentRecord = /* GraphQL */ `
  mutation UpdateStudentRecord(
    $input: UpdateStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    updateStudentRecord(input: $input, condition: $condition) {
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
export const deleteStudentRecord = /* GraphQL */ `
  mutation DeleteStudentRecord(
    $input: DeleteStudentRecordInput!
    $condition: ModelStudentRecordConditionInput
  ) {
    deleteStudentRecord(input: $input, condition: $condition) {
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
