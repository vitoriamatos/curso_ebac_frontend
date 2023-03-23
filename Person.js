function Person(cpf,name, age, gender, cellphone){
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.cellphone = cellphone;
}

function Doctor(cpf, name, age, gender, cellphone, crm, specialty, wage){
    this.crm = crm;
    this.specialty = specialty;
    let _wage = wage;
    this.getWage = function() {
        return _wage;
    }

    Person.call(this,cpf, name, age, gender, cellphone);
}

function Patient(cpf, name, age, gender, cellphone, plan_credential){
    this.plan_credential = plan_credential;

    Person.call(this, cpf, name, age, gender, cellphone);
}

const doctor = new Doctor("123.456.789.10", "Jose","55","M","(11)11111-1111", "1234", "Clinico Geral", "8000.00");
const patient = new Patient("999.999.999-99", "Maria", "35", "F", "(22)22222-2222", "123456");
const patient2 = new Patient("888.888.888-88", "Meg", "9", "F", "(22)22222-2222", "123458");
console.log(doctor);
console.log("Salário do médico" + doctor.getWage());
console.log(patient);
console.log(patient2);