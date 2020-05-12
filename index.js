// Your code here

let createEmployeeRecord = function (data) {
  return {
    firstName: data[0],
    familyName: data[1],
    title: data[2],
    payPerHour: data[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

let createEmployeeRecords = function (employeeData) {
  employeeData.map(function(data) {
    return createEmployeeRecord(data);
  });
};