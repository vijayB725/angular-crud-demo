import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : employee[];
  constructor() { 
    this.employees = emplist;
    console.log(emplist);
  }
  

  ngOnInit() {
  }

}

 const emplist = [
  {
  id: 101,
  name: "Mark",
  gender: "male",
  email : "mark@gmail.com",
  phoneNumber: 4563423485,
  contactPreference: "phone",
  dateOfBirth : "04-12-1996",
  department: "sales",
  isActive: true,
  photopath: "assets/images/b1.jpeg" 
  }
];