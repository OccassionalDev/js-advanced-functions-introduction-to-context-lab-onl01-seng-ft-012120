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
  return employeeData.map(function(data) {
    return createEmployeeRecord(data);
  });
};

let createTimeInEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  
  employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
    
  return employee;
};

let createTimeOutEvent = function (employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  
  employee.timeTimeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
    
  return employee;
};

let hoursWorkedOnDate = function (hoursWorked) {
  
};

