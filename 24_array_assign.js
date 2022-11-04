class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    details(){
        
        console.log(`Employee Details: ${this.emp_id}  ${this.emp_name}  ${this.emp_dept}  ${this.emp_salary}  ${this.emp_company}`);
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Viny","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahi","HR",85000,"Infy");



let mapOfEmployee = new Map();
mapOfEmployee.set(22, emp_anil);
mapOfEmployee.set(33, emp_radha);
mapOfEmployee.set(55, emp_rishi);
mapOfEmployee.set(66, emp_sonali);
mapOfEmployee.set(88, emp_viny);
mapOfEmployee.set(99, emp_mahi);

let mapKeys = mapOfEmployee.keys();
console.log("------All Employee Details-----------" );
for (const key of mapKeys) {
    let EmployeeObject = mapOfEmployee.get(key);
    EmployeeObject.details();
    
    
}
console.log("___________________________________________________________________________________________");
console.log("------ Employee Details Working In TCS-----------" );
mapKeys = mapOfEmployee.keys();
for (const key of mapKeys) {
    let EmployeeObject = mapOfEmployee.get(key);
   // EmployeeObject.details();
    
    if(EmployeeObject.emp_company=="TCS")
    {  
       
        console.log(`Employee Name:${EmployeeObject.emp_name},Company Name:${EmployeeObject.emp_company}`);
    }
}
console.log("___________________________________________________________________________________________");
console.log("------Finances Department Employee-----------" );
mapKeys = mapOfEmployee.keys();
for (const key of mapKeys) {
    let EmployeeObject = mapOfEmployee.get(key);
    if(EmployeeObject.emp_dept=="Finance"){
        console.log(`Department Name:${EmployeeObject.emp_dept},Employee Name:${EmployeeObject.emp_name}`);
    }
}
console.log("___________________________________________________________________________________________");
console.log("------ Employee Who's Name Starts With 'R'----------" );
mapKeys = mapOfEmployee.keys();
for (const key of mapKeys) {
    let EmployeeObject = mapOfEmployee.get(key);
     let s=EmployeeObject.emp_name;
     
     if (s.startsWith("R")) {
        console.log(`Employee who starts with "R":${EmployeeObject.emp_name}`);
     }
    }
    console.log("___________________________________________________________________________________________");
    console.log("------ Employee Who's Salary is Greater Than 70000----------" );
    mapKeys = mapOfEmployee.keys();
    for (const key of mapKeys) {
        let EmployeeObject = mapOfEmployee.get(key);
     if(EmployeeObject.emp_salary>70000)
     {
        console.log(`Employee who salary is greater than 70000:${EmployeeObject.emp_name,EmployeeObject.emp_company,EmployeeObject.emp_salary}`);
     }
    }
    console.log("___________________________________________________________________________________________");
    console.log("------ Employee Who's Salary is Greater Than or Equa 50000 And From IT Department----------" );
     mapKeys = mapOfEmployee.keys();
     for (const key of mapKeys) {
        let EmployeeObject = mapOfEmployee.get(key);
        //
        
        if(EmployeeObject.emp_salary>=50000 && EmployeeObject.emp_dept=="IT"){
           //console.log(`Employee who salary is greater than OR EQUAL to 50000:${EmployeeObject.details()}`);
           EmployeeObject.details();

        }

    }
    console.log("___________________________________________________________________________________________");
    console.log("------ Employee From company 'Infy'----------" );
    mapKeys = mapOfEmployee.keys();
     for (const key of mapKeys) {
        let EmployeeObject = mapOfEmployee.get(key);
        //
        
        if(EmployeeObject.emp_company=="Infy"){
           //console.log(`Employee who salary is greater than OR EQUAL to 50000:${EmployeeObject.details()}`);
           EmployeeObject.details();

        }

    }



    










//for (const emp of arrayOfEmployee) {
//     if(emp.emp_salary>=50000 && emp.emp_dept=="IT")
//         {
//             console.log(`Employee Name:${emp.emp_name},Company Name:${emp.emp_company}`);
//         }
   // console.log("IS any one");
  // console.log(`Company Name:${emp.emp_company}`);


