export  const absenceByYear= {
    Today : [
      {
        type : 'first year',
        title : 'Première année',
        value : 20
    },
    {
        type : 'second year',
        title : 'Deuxième année',
        value : 1
    },
    {
        type : 'third year',
        title : 'Troisième année',
        value : 3
    },
    ],
    Yesterday : [
      {
        type : 'first year',
        value : 2
    },
    {
        type : 'second year',
        value : 20
    },
    {
        type : 'third year',
        value : 10
    },
    ],
    'Last Week' : [
      {
        type : 'first year',
        value : 40
    },
    {
        type : 'second year',
        value : 20
    },
    {
        type : 'third year',
        value : 30
    },
    ],
    'Last Month' : [
      {
        type : 'first year',
        value : 100
    },
    {
        type : 'second year',
        value : 50
    },
    {
        type : 'third year',
        value : 30
    },
    ],
    'All Time' : [
      {
        type : 'first year',
        value : 120
    },
    {
        type : 'second year',
        value : 70
    },
    {
        type : 'third year',
        value : 50
    },
    ],

   
  }

export const styleByYear = {
    'first year' : {
    
    style:'bg-blue-500 ',
   
    stroke:'stroke-blue-500 ',
  
  },
  'second year' : {
    style:'bg-purple-500 ',
    stroke:'stroke-purple-500 ',
  },
  'third year' : {
    style:'bg-cyan-500 ',
    stroke:'stroke-cyan-500 ',
  }
  }

export const  absenceType = {
    Today : [
        {type:'absence',value:10},
        {type:'retard',value:16},
    ],
    Yesterday : [
        {type:'absence',value:10},
        {type:'retard',value:50},
    ],
    'Last Week' : [
        {type:'absence',value:100},
        {type:'retard',value:44},
    ],
    'Last Month' : [
        {type:'absence',value:140},
        {type:'retard',value:88},
    ],
    'All Time' : [
        {type:'absence',value:200},
        {type:'retard',value:160},
    ],
   
}

export  const styleAbsenceType = {
    absence : {
    
    style:'bg-red-500 ',
   
    stroke:'stroke-red-500 0',
 
  },
  retard : {
    style:'bg-yellow-500 ',
    stroke:'stroke-yellow-500 ',
  }
  }


export const absenceByFiliere = {
  Today: [
   
    {
      label: 'Gestion d`entreprise',
      shortCut: 'GE',
      value: 15,
      groups: [
        { label: 'GS101', value: 8 },
        { label: 'GS201', value: 7 },
      ],
    },
    {
      label: 'Infrastructure Digital',
      shortCut: 'ID',
      value: 20,
      groups: [
        { label: 'ID101', value: 7 },
        { label: 'ID201', value: 5 },
        { label: 'ID202', value: 8 },
      ],
    },
    {
      label: 'Genie Civil',
      shortCut: 'GC',
      value: 10,
      groups: [
        { label: 'GC201', value: 1 },
        { label: 'GC203', value: 4 },
        { label: 'GC204', value: 5 },
      ],
    },
  ],
  Yesterday: [
    {
      label: 'Developement Digital',
      shortCut: 'DD',
      value: 10,
      groups: [
        { label: 'DEV101', value: 6 },
        { label: 'DEV102', value: 2 },
        { label: 'DEVOWFS201', value: 2 },
      ],
    },
    {
      label: 'Gestion d`entreprise',
      shortCut: 'GE',
      value: 5,
      groups: [
        { label: 'GS101', value: 2 },
        { label: 'GS201', value: 3 },
      ],
    },
    {
      label: 'Infrastructure Digital',
      shortCut: 'ID',
      value: 20,
      groups: [
        { label: 'ID101', value: 7 },
        { label: 'ID201', value: 5 },
        { label: 'ID202', value: 8 },
      ],
    },
    {
      label: 'Genie Civil',
      shortCut: 'GC',
      value: 10,
      groups: [
        { label: 'GC201', value: 1 },
        { label: 'GC203', value: 4 },
        { label: 'GC204', value: 5 },
      ],
    },
  ],
  'Last Week': [
    {
      label: 'Developement Digital',
      shortCut: 'DD',
      value: 5,
      groups: [
        { label: 'DEV101', value: 2 },
        { label: 'DEV102', value: 2 },
        { label: 'DEVOWFS201', value: 1 },
      ],
    },
    {
      label: 'Gestion d`entreprise',
      shortCut: 'GE',
      value: 15,
      groups: [
        { label: 'GS101', value: 8 },
        { label: 'GS201', value: 7 },
      ],
    },
    {
      label: 'Infrastructure Digital',
      shortCut: 'ID',
      value: 20,
      groups: [
        { label: 'ID101', value: 7 },
        { label: 'ID201', value: 5 },
        { label: 'ID202', value: 8 },
      ],
    },
    {
      label: 'Genie Civil',
      shortCut: 'GC',
      value: 10,
      groups: [
        { label: 'GC201', value: 1 },
        { label: 'GC203', value: 4 },
        { label: 'GC204', value: 5 },
      ],
    },
  ],
  'Last Month': [
    {
      label: 'Developement Digital',
      shortCut: 'DD',
      value: 5,
      groups: [
        { label: 'DEV101', value: 2 },
        { label: 'DEV102', value: 2 },
        { label: 'DEVOWFS201', value: 1 },
      ],
    },
    {
      label: 'Gestion d`entreprise',
      shortCut: 'GE',
      value: 15,
      groups: [
        { label: 'GS101', value: 8 },
        { label: 'GS201', value: 7 },
      ],
    },
    {
      label: 'Infrastructure Digital',
      shortCut: 'ID',
      value: 20,
      groups: [
        { label: 'ID101', value: 7 },
        { label: 'ID201', value: 5 },
        { label: 'ID202', value: 8 },
      ],
    },
    {
      label: 'Genie Civil',
      shortCut: 'GC',
      value: 10,
      groups: [
        { label: 'GC201', value: 1 },
        { label: 'GC203', value: 4 },
        { label: 'GC204', value: 5 },
      ],
    },
  ],
  'All Time': [
    {
      label: 'Developement Digital',
      shortCut: 'DD',
      value: 5,
      groups: [
        { label: 'DEV101', value: 2 },
        { label: 'DEV102', value: 2 },
        { label: 'DEVOWFS201', value: 1 },
      ],
    },
    {
      label: 'Gestion d`entreprise',
      shortCut: 'GE',
      value: 15,
      groups: [
        { label: 'GS101', value: 8 },
        { label: 'GS201', value: 7 },
      ],
    },
    {
      label: 'Infrastructure Digital',
      shortCut: 'ID',
      value: 20,
      groups: [
        { label: 'ID101', value: 7 },
        { label: 'ID201', value: 5 },
        { label: 'ID202', value: 8 },
      ],
    },
    {
      label: 'Genie Civil',
      shortCut: 'GC',
      value: 10,
      groups: [
        { label: 'GC201', value: 1 },
        { label: 'GC203', value: 4 },
        { label: 'GC204', value: 5 },
      ],
    },
  ],
};

export const absenceDataByGender= {
    'All Time' : [
        {
            name : 'Male',
            retard :20,
            absence : 20
        },
        {
            name : 'Female',
            retard :30,
            absence : 8
        },
    ],
    'Today':[
        {
            name : 'Male',
            retard :6,
            absence : 1
        },
        {
            name : 'Female',
            retard :2,
            absence : 0
        },
    ],
    'Yesterday':[
        {
            name : 'Male',
            retard :0,
            absence : 1
        },
        {
            name : 'Female',
            retard :1,
            absence : 3
        },
    ],
    'Last Week':[
        {
            name : 'Male',
            retard :7,
            absence : 5
        },
        {
            name : 'Female',
            retard :8,
            absence : 4
        },
    ],
    'Last Month':[
        {
            name : 'Male',
            retard :5,
            absence : 8
        },
        {
            name : 'Female',
            retard :0,
            absence : 0
        },
    ]
    
}

export const absences = [
  {
    idAbsence : 1,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 2,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 3,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 4,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 5,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 6,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
  {
    idAbsence : 7,
    fullName : 'Ayoub Fikry',
    group : 'DEVOWFS201',
    typeAbsence : 'Late',
    totalAbsence : 10,
    totalLate : 6,
    successiveDates : '2024-01-23 - 2024-02-01'
  },
]