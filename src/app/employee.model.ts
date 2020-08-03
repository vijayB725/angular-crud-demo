class employee{
  id: number;
  name: string;
  gender: string;
  email? : string;
  phoneNumber?: number;
  contactPreference: string;
  dateOfBirth : string;
  department: string;
  isActive: boolean;
  photopath?: string 
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