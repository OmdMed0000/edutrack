export const users = [
    {
        idUser:1,
        matricule : 'T001',
        fullName: "John Doe",
      gender: "Male",
      birthDate: '1990-01-01',
      email : 't001@offpt.ma',
      role:'teacher'
     
    },
    {
      idUser:1,
      matricule : 'T005',
      fullName: "Daaif ",
    gender: "Male",
    birthDate: '1990-01-01',
 email : 't005@offpt.ma',
    role:'teacher'
   
  },
    {
      idUser:2,
      matricule : 'T002',
      fullName: "Sarah Smith",
      gender: "Female",
      birthDate: '1990-01-01',
    email : 't002@offpt.ma',
       role:'teacher'
     
    },
    {
        idUser:3,
        matricule : 'T003',
      fullName: "Michael Brown",
      gender: "Male",
      birthDate: '1990-01-01',
      email : 't003@offpt.ma',
     
       role:'teacher'
  
    },
    {
      idUser:4,
      matricule : 'T004',
      fullName: "Emily Davis",
      gender: "Female",
      birthDate: '1990-01-01',
      email : 't004@offpt.ma',
     
       role:'teacher'
  
    },
    {idUser:5,matricule:'A001',fullName:'Ahmed Mohammed',gender: 'Male',role: 'Absence Manager',birthDate: '1990-01-01',email : 'a001@offpt.ma',},
    {idUser:6,matricule:'A002',fullName:'Jilali Brahim',gender: 'Male',role: 'Absence Manager',birthDate: '1990-01-01',email : 'a002@offpt.ma',},
    {idUser:7,matricule:'A003',fullName:'Hasnaoui Ghita',gender: 'Female',role: 'Absence Manager',birthDate: '1990-01-01',email : 'a003@offpt.ma',},
    {idUser:8,matricule:'A005',fullName:'Basir Hassan',gender: 'Male',role: 'Absence Manager',birthDate: '1990-01-01',email : 'a004@offpt.ma',},
]

export const teachers = users.filter(user => user.role === 'teacher')
export const absenceManagers = users.filter(user => user.role === 'Absence Manager')


export const students = [
    { 
      idStudent:1,
      cef: "2004102200250",
      fullName: "John Doe",
      age: 16,
      gender: "Male",
      group: "Dev101",
      totalAbsence: 5,
      yesterdayAbsence: 2,
        isAbsentToday : 'No',
        email : 's001@offpt.ma',
        successiveAbsence : '2025-01-20-2025-01-23'

    },
    { 
      idStudent:2,
      cef: "S002",
      fullName: "Jane Smith",
      age: 17,
      gender: "Female",
      group: "Dev101",
      totalAbsence: 4,
      yesterdayAbsence: 1,
      isAbsentToday : 'Yes',
      email : 's002@offpt.ma',
      successiveAbsence : '2025-01-20-2025-01-23'

    },
    {
      idStudent:3,
  
      cef: "S003",
      fullName: "Michael Brown",
      age: 16,
      gender: "Male",
      group: "GS101",
      totalAbsence: 9,
       yesterdayAbsence: 4,
    isAbsentToday : 'Yes',
    email : 's003@offpt.ma',
    successiveAbsence : '2025-01-20-2025-01-23'

    },
    {
      idStudent:4,
  
      cef: "S004",
      fullName: "Emily Davis",
      age: 15,
      gender: "Female",
      group: "Dev102",
      totalAbsence: 12,
       yesterdayAbsence: 1,
    isAbsentToday : 'No',
    email : 's004@offpt.ma',
    successiveAbsence : '2025-01-20 - 2025-01-23'

    },
    {
      idStudent:5,
  
      cef: "S005",
      fullName: "Chris Wilson",
      age: 17,
      gender: "Male",
      group: "DEVOWFS201",
      totalAbsence: 7,
       yesterdayAbsence: 4,
    isAbsentToday : 'No',
    email : 's005@offpt.ma',
    successiveAbsence : null
 
    },
    {
      idStudent:6,
  
      cef: "S006",
      fullName: "Sarah Johnson",
      age: 16,
      gender: "Female",
      group: "Dev102",
      totalAbsence: 6,
       yesterdayAbsence: 2,
    isAbsentToday : 'Yes',
    email : 's006@offpt.ma',
    successiveAbsence : '2025-01-20 - 2025-01-25'
     
    },
    {
      idStudent:7,
  
      cef: "S007",
      fullName: "David Lee",
      age: 16,
      gender: "Male",
      group: "GS201",
      totalAbsence: 10,
       yesterdayAbsence: 1,
      isAbsentToday : 'Yes',
    email : 's007@offpt.ma',
    successiveAbsence : '2025-01-20 - 2025-02-01'
   
    }
  ];

export const filieres = [
    {idFiliere:1,libel:'Developement Digital',niveau : 'Technicien Specialise',numberGroup: 3, totalAbsence : 2,},
    {idFiliere:2,libel:'GS',numberGroup: 3,niveau : 'Technicien ', totalAbsence : 10,},
    {idFiliere:3,libel:'GC',numberGroup: 3,niveau : 'Technicien Specialise', totalAbsence : 6,},
    {idFiliere:4,libel:'ID',numberGroup: 3,niveau : 'Qualification', totalAbsence : 1,},
    {idFiliere:5,libel:'AI',numberGroup: 3,niveau : 'Specialisation', totalAbsence : 20,},
    
  ]

export const groups = [
    { 
      idGroup:1,
      libel:'DEV101',
      filiere:'Developement Digital',
      year:'First Year',
      numberStudents: 20, 
      totalAbsence : 10,
      todayAbsence:4,
      YesterdayAbsence:0,
     
    },
    { 
      idGroup:2,
      libel:'DEV102',
      filiere:'Developement Digital',
      year:'First Year',
      numberStudents: 23, 
      totalAbsence : 5,
      todayAbsence:1,
      YesterdayAbsence:0,
     
    },
    { 
      idGroup:3,
      libel:'DEVOWFS201',
      filiere:'Developement Digital',
      year:'Second Year',
      numberStudents: 21, 
      totalAbsence : 10,
      todayAbsence:2,
      YesterdayAbsence:3,
     
    },
    { 
      idGroup:4,
      libel:'GS201',
      filiere:'Gestion d`entreprise',
      year:'Second Year',
      numberStudents: 20, 
      totalAbsence : 10,
      todayAbsence:4,
      YesterdayAbsence:0,
    
    },
    { 
      idGroup:5,
      libel:'GS301',
      filiere:'Gestion d`entreprise',
      year:'Third Year',
      numberStudents: 30, 
      totalAbsence : 20,
      todayAbsence:0,
      YesterdayAbsence:5,
    },


    
  ]
 
export  const studentAbsenceRecords = [
    { date: "2025-01-21", status: "Absent", justified : 'Yes'},
    { date: "2025-01-20", status: "Absent", justified : 'No' },
    { date: "2025-01-18", status: "Late",   justified : 'Yes'},
    { date: "2025-01-15", status: "Absent", justified : 'No'},
    { date: "2025-01-10", status: "Late",   justified : 'Yes'},
    { date: "2025-01-08", status: "Absent", justified : 'No'},
    { date: "2025-01-05", status: "Absent", justified : 'No'},
    { date: "2024-12-28", status: "Late",   justified : 'Yes' },
    { date: "2024-12-22", status: "Absent", justified : 'No'},
    { date: "2024-12-18", status: "Absent", justified : 'Yes'},
  ];

export const rooms = [
  {idRoom :1 , roomName : 'Salle 1',isEmpty : 'YES'},
  {idRoom :2 , roomName : 'Salle 2',isEmpty : 'NO'},
  {idRoom :3 , roomName : 'Salle 3',isEmpty : 'YES'},
  {idRoom :4 , roomName : 'Salle 4',isEmpty : 'NO'},
  {idRoom :5 , roomName : 'Salle 5',isEmpty : 'NO'},
  {idRoom :6 , roomName : 'Atelier RVA',isEmpty : 'NO'},
  {idRoom :7 , roomName : 'Atelier RC',isEmpty : 'YES'},
  {idRoom :8 , roomName : 'Atelier TFI',isEmpty : 'YES'},
  {idRoom :9 , roomName : 'Info',isEmpty : 'No'},
]