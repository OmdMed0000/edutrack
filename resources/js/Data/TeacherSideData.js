export const teacherScheduleData = [
  {idSession:1, day: "Saturday", start: "8:30", end: "11:30", group: "Dev101",idg: 1, room: "Atelier PVB" },
  {idSession:2, day: "Monday", start: "13:30", end: "16:00", group: "Dev101",idg: 1, room: "INFO" },
  {idSession:3, day: "Monday", start: "16:00", end: "18:30", group: "Rizo201",idg: 2, room: "INFO" },
  {idSession:4, day: "Tuesday", start: "13:30", end: "16:00", group: "civil101",idg: 4, room: "Atelier PVB" },
  {idSession:5, day: "Wednesday", start: "8:30", end: "11:30", group: "Dev101",idg: 1, room: "Atelier PVB" },
  {idSession:6, day: "Wednesday", start: "13:30", end: "16:00", group: "civil101",idg: 4, room: "Atelier PVB" },
  {idSession:7, day: "Wednesday", start: "16:00", end: "18:30", group: "Rizo201",idg: 2, room: "Atelier PVB" },
  {idSession:8, day: "Thursday", start: "16:00", end: "18:30", group: "AA201",idg: 5, room: "Atelier PVB" },
  {idSession:9, day: "Thursday", start: "8:30", end: "11:30", group: "Gestion301",idg: 3, room: "Atelier PVB" },
  {idSession:10, day: "Friday", start: "19:30", end: "21:30", group: "GCF301",idg: 7, room: "Salle 4" },
  {idSession:11, day: "Friday", start: "8:30", end: "11:00", group: "Dev101",idg: 1, room: "Atelier PVB" },
  {idSession:12, day: "Friday", start: "11:00", end: "13:30", group: "Rizo201",idg: 2, room: "Atelier PVB" },
  
  {idSession:13, day: "Monday", start: "8:30", end: "11:00", group: "Gestion301",idg: 3, room: "TFI" },
];


  export const Groups =[
    { idg: 1, N_filier: 'Development digital', name: 'Dev101', annee: 'first year', Ng: 1 },
    { idg: 2, N_filier: 'Rizo', name: 'Rizo201', annee: 'second year', Ng: 1 },
    { idg: 3, N_filier: 'Gestion', name: 'Gestion301', annee: 'third year', Ng: 1 },
    { idg: 4, N_filier: 'Genie Civil', name: 'civil101', annee: 'first year', Ng: 1 },
    { idg: 5, N_filier: 'Assistant Administratif', name: 'AA201', annee: 'second year', Ng: 1 },
    { idg: 6, N_filier: 'Assistant Administratif', name: 'AA201', annee: 'second year', Ng: 2 },
    { idg: 7, N_filier: 'Gestion Comptabilite', name: 'GCF301', annee: 'third year', Ng: 1 },
    { idg: 8, N_filier: 'Gestion Comptabilite', name: 'GCF301', annee: 'third year', Ng: 2 }
  ]
  
  export const stageirs= [
    { Cef: 1472008, idg: 1, fullName: 'Rami khlid', Number_absence: 0 },
    { Cef: 647208, idg: 4, fullName: 'khlili Ayman', Number_absence: 0 },
    { Cef: 7472248, idg: 1, fullName: 'Akfas Toufik', Number_absence: 0 },
    { Cef: 2147209, idg: 4, fullName: 'Lidrissi Brahim', Number_absence: 0 },
    { Cef: 1779038, idg: 7, fullName: 'Mouh Lwali', Number_absence: 0 },
    { Cef: 1172965, idg: 2, fullName: 'Mouhimi Yassin', Number_absence: 0 },
    { Cef: 1272098, idg: 3, fullName: 'Al bidaoui Karim', Number_absence: 0 },
    { Cef: 14772488, idg: 5, fullName: 'Bouhoch Mrabih', Number_absence: 0 },
    { Cef: 9572068, idg: 6, fullName: 'Rami khlid', Number_absence: 0 },
    { Cef: 1842038, idg: 8, fullName: 'Souaya Badr', Number_absence: 0 }
  ]
 
  export const Absence= [
    {id: 21213,idg: 4 ,Cef: 1472008,Date: '2025-01-29',type: 'retard',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 647208,Date: '2025-01-29',type: 'absence',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 7472248,Date: '2025-01-29',type: 'retard',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 1779038,Date: '2025-01-29',type: 'absence',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 1842038,Date: '2025-01-29',type: 'Present',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 2147209,Date: '2025-01-29',type: 'absence',isJustified: false},
    {id: 21213,idg: 4 ,Cef: 1272098,Date: '2025-01-29',type: 'retard',isJustified: false},
    {id: 5275275,idg: 1,Cef: 2147209,Date: '2025-01-30',type: 'absence',isJustified: false},

  ]

