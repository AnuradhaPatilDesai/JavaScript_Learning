console.log(`create object "teacher" with nested object "degrees"and "certificates"`);
const teacher ={
        fullName: "Gajanan Kharath",
         age: 30,
        "isMarried": true,
        address:"PUNE",
        MobileNo:222222222,  

        degrees :{
      MSc:"Computer",
        PHD:"Adv Computing",
        BSc:"Computer",
    value: function(){
        let degreesDetails =  `Total degree are : ${this.MSc}, ${this.PHD},  ${this.BSc}`;
        return degreesDetails;
    }

     },
     certificates :{
        certificatesDetail01 : `Hacker Rank Participation` ,
        certificatesDetail02:`certificate in IFE course` , 
        certificatesDetail03:`Certificate in Adv Programming` },

        details: function(){
            let teacherDetail =  `Details are : ${this.fullName}, ${this.age},  ${this.address},${this.MobileNo},${this.degrees.MSc},${this.degrees.PHD}`;
            return teacherDetail;
        }

    }
    let pDetail = teacher.details();
    console.log(teacher.details());