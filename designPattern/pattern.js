function Developer(name)
{
  this.name = name,
  this.job = "Developer"
}

function Tester(name)
{
  this.name = name,
  this.job = "Tester"
}

function EmployeeFactory()
{
  this.create = (nom, type) => {
    switch (type) {
      case 1:
        return new Developer(nom)
        break;
      case 2:
        return new Tester(nom)
        break;
    }
  } 
}

employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("John", 1));
employees.push(employeeFactory.create("Paul", 1));
employees.push(employeeFactory.create("Doe", 2));
employees.push(employeeFactory.create("Smith", 2));

employees.forEach(e => {
  console.log(e);
})