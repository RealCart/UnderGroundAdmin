export const GENDER_OPTIONS = [
    { key:'1', value:'Мужской' },
    { key:'2', value:'Женский' },
];

export const EXPERINCE_OPTIONS = [
    { key:'1', value:'1' },
    { key:'2', value:'2' },
    { key:'3', value:'3' },
    { key:'4', value:'4' },
    { key:'5', value:'5' },
    { key:'6', value:'6' },
    { key:'7', value:'7' },
    { key:'8', value:'8' },
    { key:'9', value:'9' },
    { key:'10', value:'10+' },
];

export const STATUS = [
    { key:'1', value:'Активен' },
    { key:'2', value:'Не активен' }
]

export const SPECIALIZED_OPTIONS = [
    { key:'1', value:'Фитнес' },
    { key:'2', value:'Йога' },
    { key:'3', value:'Стретчинг' },
    { key:'4', value:'Футбол' },
    { key:'5', value:'Баскетбол' },
    { key:'6', value:'Персональная тренировка'},
];

export const COACH = [
    { key:'1', value:'Даулет Ержанов'},
    { key:'2', value:'Ержанов Даулет'},
    { key:'3', value:'Тони Старк'},
]

export const TIME_OPTIONS = [
    {key:'1', value:'00:00'},
    {key:'2', value:'01:00'},
    {key:'3', value:'02:00'},
    {key:'4', value:'03:00'},
    {key:'5', value:'04:00'},
    {key:'6', value:'05:00'},
    {key:'7', value:'06:00'},
    {key:'8', value:'07:00'},
    {key:'9', value:'08:00'},
    {key:'10', value:'09:00'},
    {key:'11', value:'10:00'},
    {key:'12', value:'11:00'},
    {key:'13', value:'12:00'},
    {key:'14', value:'13:00'},
    {key:'15', value:'14:00'},
    {key:'16', value:'15:00'},
    {key:'17', value:'16:00'},
    {key:'18', value:'17:00'},
    {key:'19', value:'18:00'},
    {key:'20', value:'19:00'},
    {key:'21', value:'20:00'},
    {key:'22', value:'21:00'},
    {key:'23', value:'22:00'},
    {key:'24', value:'23:00'},
]

export const BRANCH = [
    { key:'1', value:'Филиал 1' },
    { key:'2', value:'Филиал 2' },
    { key:'3', value:'Филиал 3' },
    { key:'4', value:'Филиал 4' },
];

export const WORKOUTFORM = [
    {
        id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
        branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
    },
    {
        id:1, date:'01.09.2024', time:'12:00', statusOfTraining:"Отмена", status: 'Активно', 
        branch:'Филиал 3', recorded:'2/10', typeOfTrainig:"Йога", 
        coach:"Даулет Ержанов", amountOfTime:'60 мин',
    },
    {
        id:2, date:'01.09.2024', time:'13:30', statusOfTraining:"Неявка", status: 'Активно', 
        branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
        coach:"Даулет Ержанов", amountOfTime:'60 мин',
    },
    {
        id:3, date:'01.09.2024', time:'12:30', statusOfTraining:"Неявка", status: 'Активно', 
        branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Баскетбол", 
        coach:"Даулет Ержанов", amountOfTime:'60 мин',
    },
    {
        id:4, date:'01.09.2024', time:'11:30', statusOfTraining:"Неявка", status: 'Активно', 
        branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Гачи мучи", 
        coach:"Даулет Ержанов", amountOfTime:'60 мин',
    }
];

export const PAYMENTSFORM = [
    {
        id:0, name:'Амина Алиева', date:'01.09.2024', statusOfPayments:"Оплачено", 
        typeOfSub:'Абонемент на месяц', coach:"Даулет Ержанов", payedBy:'Карта', totalAmount:'60 000₸',
    },
    {
        id:1, name:'Амина Алиева', date:'03.09.2024', statusOfPayments:"Отменено", 
        typeOfSub:'Абонемент на месяц', coach:"Даулет Ержанов", payedBy:'Наличные', totalAmount:'120 000₸',
    },
    {
        id:2, name:'Амина Алиева', date:'04.09.2024', statusOfPayments:"Оплачено", 
        typeOfSub:'Абонемент на месяц', coach:"Даулет Ержанов", payedBy:'Карта', totalAmount:'60 000₸',
    },
    {
        id:3, name:'Амина Алиева', date:'05.09.2024', statusOfPayments:"Оплачено", 
        typeOfSub:'Абонемент на месяц', coach:"Даулет Ержанов", payedBy:'Карта', totalAmount:'60 000₸',
    },
]

export const WAYTOPAY = [
    {key:'1', value:'Карта'},
    {key:'2', value:'Наличные'}
]

export const TYPEOFSUBS = [
    {key:'1', value:'Годовой безлимит'},
    {key:'2', value:'Абонемент на неделю'},
    {key:'3', value:'Абонемент на месяц'},
    {key:'4', value:'Абонемент на год'}
]


export const TYPEOFSTATUS = [
    {key:'1', value:'Оплачено'},
    {key:'2', value:'Отменено'}
]

export const NOTIFICATIONS = [
    {id:0, title:'Напоминание о тренировке', dateTime: {date:'01.01.2001', time:'06:45'}, typeOfNotification:'Массовое',
     statusOfNotification:'Отправлено', method:'Push', toWho:'Все клиенты'   
    },
    {id:1, title:'Продление абонемента', dateTime: {date:'01.01.2001', time:'06:45'}, typeOfNotification:'Индивидуальное',
     statusOfNotification:'Запланировано', method:'Email', toWho:'Все клиенты'   
    },
    {id:2, title:'Промо-акция', dateTime: {date:'01.01.2001', time:'06:45'}, typeOfNotification:'Массовое',
     statusOfNotification:'Отменено', method:'SMS', toWho:'Иван Иванов'   
    },
]

export const TITLENOTIFICATIONS = [
    {key:'1', value:'Напоминание о тренировке'},
    {key:'2', value:'Продление абонемента'},
    {key:'3', value:'Промо-акция'},
]

export const TOWHONOTIFICATIONS = [
    {key:'1', value:'Все клиенты'},
    {key:'2', value:'Иван Иванов'},
    {key:'3', value:'Амина Алиева'},
    {key:'4', value:'Симон и Пумба'},
]

export const METHODNOTIFICATIONS = [
    {key:'1', value:'Push'},
    {key:'2', value:'Email'},
    {key:'3', value:'SMS'},
]

export const STATUSNOTIFICATIONS = [
    {key:'1', value:'Отправлено'},
    {key:'2', value:'Запланировано'},
    {key:'3', value:'Отменено'},
]

export const USERSFILTER = [
    {key:'1', value:'С абониментом'},
    {key:'2', value:'Без абонимента'}
]

export const SENDTIME = [
    {key:'1', value:'Отправить сразу'},
    {key:'2', value:'00:00'},
    {key:'3', value:'01:00'},
    {key:'4', value:'02:00'},
    {key:'5', value:'03:00'},
    {key:'6', value:'04:00'},
    {key:'7', value:'05:00'},
    {key:'8', value:'06:00'},
    {key:'9', value:'07:00'},
    {key:'10', value:'08:00'},
    {key:'11', value:'09:00'},
    {key:'12', value:'10:00'},
    {key:'13', value:'11:00'},
    {key:'14', value:'12:00'},
    {key:'15', value:'13:00'},
    {key:'16', value:'14:00'},
    {key:'17', value:'15:00'},
    {key:'18', value:'16:00'},
    {key:'19', value:'17:00'},
    {key:'20', value:'18:00'},
    {key:'21', value:'19:00'},
    {key:'22', value:'20:00'},
    {key:'23', value:'21:00'},
    {key:'24', value:'22:00'},
    {key:'25', value:'23:00'},
]

export const BRANCHES = [
    {
        id:0, adress:'Underground на Сейфуллина, 1', title:'Underground на Сейфуллина, 1',
        countOfCoaches: 15, countOfUsers:69, status:'Активен', phoneNumber:'(708) 000 00 00',
        email:'underground@fitnessclub.kz', load:'30%', location:'51.123178830008385, 71.43444633940535', desc:"dawdawdawdawda",
        workHour: {"Воскресенье": "11:11-11:11", "Вторник": "11:11-11:11", "Понедельник": "11:11-11:11", 
                    "Пятница": "11:11-11:11", "Среда": "11:11-11:11", "Суббота": "11:11-11:11", "Четверг": "11:11-11:11"},
        coaches: [
            {   id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaA@mail.ru', gender:"Мужской", status:'Активный', exp:'9', 
                specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'30', avgRaiting:'4.7', income:'350 000₸'
                    }
                ]},
            {   id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'5', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'20', avgRaiting:'3.7', income:'320 000₸'
                    }
                ]},
            {   id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                 email:'AlinaA@mail.ru', gender:"Мужской", status:'Отпуск', exp:'6', specialized:["Фитнес", "Йога", "Стретчинг"],
                 workoutInfo:[
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     }
                 ], 
                 scheduleInfo:[
                     {
                         date:'01.09.2024', time:'10:00', 
                         typeOfTrainig:"Персональная тренировка", 
                     }
                 ],
                 reportsInfo:[
                     {
                         count:'23', avgRaiting:'4.2', income:'310 000₸'
                     }
                 ]},
            {   id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'7', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'34', avgRaiting:'4.8', income:'360 000₸'
                    }
                ]},
            {   id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Больничный', exp:'2', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'39', avgRaiting:'4.9', income:'450 000₸'
                    }
                ]},
        ],
        users: [
            { id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Абонимент', 
            subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'05.02.2021', price:"110.000₸", statusOfPayment:'Неудача', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Без абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Баскетбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Неудача', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                },
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }   
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Туда-сюда", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Заморозка', subs:[ 
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка",status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Киберспорт", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
        ]
    },
    {
        id:1, adress:'Underground на Сейфуллина, 1', title:'Underground на Майами бичь, 1',
        countOfCoaches: 15, countOfUsers:69, status:'Активен', phoneNumber:'(708) 000 00 00', location:'24234234', desc:"dawdawdawdawda",
        email:'underground@fitnessclub.kz', load:'50%', workHour: {"Воскресенье": "11:11-11:11", "Вторник": "11:11-11:11", "Понедельник": "11:11-11:11", 
            "Пятница": "11:11-11:11", "Среда": "11:11-11:11", "Суббота": "11:11-11:11", "Четверг": "11:11-11:11"},
        coaches: [
            {   id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaA@mail.ru', gender:"Мужской", status:'Активный', exp:'9', 
                specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'30', avgRaiting:'4.7', income:'350 000₸'
                    }
                ]},
            {   id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'5', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'20', avgRaiting:'3.7', income:'320 000₸'
                    }
                ]},
            {   id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                 email:'AlinaA@mail.ru', gender:"Мужской", status:'Отпуск', exp:'6', specialized:["Фитнес", "Йога", "Стретчинг"],
                 workoutInfo:[
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     }
                 ], 
                 scheduleInfo:[
                     {
                         date:'01.09.2024', time:'10:00', 
                         typeOfTrainig:"Персональная тренировка", 
                     }
                 ],
                 reportsInfo:[
                     {
                         count:'23', avgRaiting:'4.2', income:'310 000₸'
                     }
                 ]},
            {   id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'7', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'34', avgRaiting:'4.8', income:'360 000₸'
                    }
                ]},
            {   id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Больничный', exp:'2', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'39', avgRaiting:'4.9', income:'450 000₸'
                    }
                ]},
        ],
        users: [
            { id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Абонимент', 
            subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'05.02.2021', price:"110.000₸", statusOfPayment:'Неудача', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Без абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Баскетбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Неудача', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                },
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }   
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Туда-сюда", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Заморозка', subs:[ 
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка",status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Киберспорт", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
        ]
    },
    {
        id:2, adress:'Underground на Сейфуллина, 1', title:'Underground на Париже, 1', location:'24234234', desc:"dawdawdawdawda",
        countOfCoaches: 15, countOfUsers:69, status:'Активен', phoneNumber:'(708) 000 00 00',
        email:'underground@fitnessclub.kz', load:'20%', workHour: {"Воскресенье": "11:11-11:11", "Вторник": "11:11-11:11", "Понедельник": "11:11-11:11", 
            "Пятница": "11:11-11:11", "Среда": "11:11-11:11", "Суббота": "11:11-11:11", "Четверг": "11:11-11:11"},
        coaches: [
            {   id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaA@mail.ru', gender:"Мужской", status:'Активный', exp:'9', 
                specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'30', avgRaiting:'4.7', income:'350 000₸'
                    }
                ]},
            {   id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'5', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'20', avgRaiting:'3.7', income:'320 000₸'
                    }
                ]},
            {   id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                 email:'AlinaA@mail.ru', gender:"Мужской", status:'Отпуск', exp:'6', specialized:["Фитнес", "Йога", "Стретчинг"],
                 workoutInfo:[
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     }
                 ], 
                 scheduleInfo:[
                     {
                         date:'01.09.2024', time:'10:00', 
                         typeOfTrainig:"Персональная тренировка", 
                     }
                 ],
                 reportsInfo:[
                     {
                         count:'23', avgRaiting:'4.2', income:'310 000₸'
                     }
                 ]},
            {   id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'7', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'34', avgRaiting:'4.8', income:'360 000₸'
                    }
                ]},
            {   id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Больничный', exp:'2', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'39', avgRaiting:'4.9', income:'450 000₸'
                    }
                ]},
        ],
        users: [
            { id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Абонимент', 
            subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'05.02.2021', price:"110.000₸", statusOfPayment:'Неудача', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Без абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Баскетбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Неудача', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                },
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }   
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Туда-сюда", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Заморозка', subs:[ 
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка",status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Киберспорт", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
        ]
    },
    {
        id:3, adress:'Underground на Сейфуллина, 1', title:'Underground на Столах, 1',
        countOfCoaches: 15, countOfUsers:69, status:'Активен', phoneNumber:'(708) 000 00 00', location:'24234234', desc:"dawdawdawdawda",
        email:'underground@fitnessclub.kz', load:'10%', workHour: {"Воскресенье": "11:11-11:11", "Вторник": "11:11-11:11", "Понедельник": "11:11-11:11", 
            "Пятница": "11:11-11:11", "Среда": "11:11-11:11", "Суббота": "11:11-11:11", "Четверг": "11:11-11:11"},
        coaches: [
            {   id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaA@mail.ru', gender:"Мужской", status:'Активный', exp:'9', 
                specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'30', avgRaiting:'4.7', income:'350 000₸'
                    }
                ]},
            {   id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'5', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'20', avgRaiting:'3.7', income:'320 000₸'
                    }
                ]},
            {   id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                 email:'AlinaA@mail.ru', gender:"Мужской", status:'Отпуск', exp:'6', specialized:["Фитнес", "Йога", "Стретчинг"],
                 workoutInfo:[
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     },
                     {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                     }
                 ], 
                 scheduleInfo:[
                     {
                         date:'01.09.2024', time:'10:00', 
                         typeOfTrainig:"Персональная тренировка", 
                     }
                 ],
                 reportsInfo:[
                     {
                         count:'23', avgRaiting:'4.2', income:'310 000₸'
                     }
                 ]},
            {   id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Активный', exp:'7', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'34', avgRaiting:'4.8', income:'360 000₸'
                    }
                ]},
            {   id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", date:'5.09.1996',
                email:'AlinaAlieva@mail.ru', gender:"Женский", status:'Больничный', exp:'2', specialized:["Фитнес", "Йога", "Стретчинг"],
                workoutInfo:[
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    },
                    {
                        date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", 
                        typeOfTrainig:"Персональная тренировка", 
                        coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                    }
                ], 
                scheduleInfo:[
                    {
                        date:'01.09.2024', time:'10:00', 
                        typeOfTrainig:"Персональная тренировка", 
                    }
                ],
                reportsInfo:[
                    {
                        count:'39', avgRaiting:'4.9', income:'450 000₸'
                    }
                ]},
        ],
        users: [
            { id:0, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Абонимент', 
            subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин', 
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'05.02.2021', price:"110.000₸", statusOfPayment:'Неудача', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:1, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:2, Avatar:'', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Без абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Баскетбол", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Неудача', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                },
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
            { id:3, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }   
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Туда-сюда", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'06.02.2024', price:"110.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                },
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Отменено', 
                    title:"Месячный фитнес", payedBy:"Кредитная карта"
                }
            ]},
            { id:4, Avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Заморозка', subs:[ 
                {
                    type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30
                }  
            ],
            workoutInfo:[
                {
                    id:0, date:'01.09.2024', time:'10:00', statusOfTraining:"Посещено", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Персональная тренировка", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:1, date:'01.09.2024', time:'10:00', statusOfTraining:"Отмена", status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Йога", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                },
                {
                    id:2, date:'01.09.2024', time:'10:00', statusOfTraining:"Неявка",status: 'Активно', 
                    branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Киберспорт", 
                    coach:"Даулет Ержанов", amountOfTime:'60 мин',
                }
            ],
            reportsInfo:[
                {
                    date:'01.09.2024', price:"150.000₸", statusOfPayment:'Успешно', 
                    title:"Годовой абонемент", payedBy:"Кредитная карта"
                }
            ]},
        ]
    }
]

export const GAMIFICATION = [
    {
        id: 0, title: '30-дневный челлендж', dateStart: '01.09.2024', dateEnd: '30.09.2024', status:'Активен',
        type: 'Челлендж', amountOfPeople: 120, prize: 'Скидка 15% на абонемент', desc: 'Пройди 100 км за 30 дней и получи скидку 15%',
    },
    {
        id: 1, title: '30-дневный челлендж', dateStart: '01.09.2024', dateEnd: '30.09.2024', status:'Активен',
        type: 'Челлендж', amountOfPeople: 120, prize: 'Скидка 15% на абонемент', desc: 'Пройди 100 км за 30 дней и получи скидку 15%',
    },
    {
        id: 2, title: '30-дневный челлендж', dateStart: '01.09.2024', dateEnd: '30.09.2024', status:'Активен',
        type: 'Челлендж', amountOfPeople: 120, prize: 'Скидка 15% на абонемент', desc: 'Пройди 100 км за 30 дней и получи скидку 15%',
    },
]

export const OPTIONSTITLE = [
    {key: '1', value:'30-дневный челлендж'}, 
    {key: '2', value:'Соревнование по кардио'},
]

export const OPTIONSTYPE = [
    {key: '1', value:'Челлендж'}, 
    {key: '2', value:'Соревнование'},
]

export const OPTIONSPRIZE = [
    {key: '1', value:'Скидка 15% на абонемент'}, 
    {key: '2', value:'Бесплатная тренировка'},
]

export const STORIES = [
    {id: 0, title: 'Пейте больше воды', dataStart:'01.09.2024', status:'Активно',
        desc:'Регулярное питье воды улучшает обмен веществ и помогает восстанавливаться после тренировок',
        media:[]
    },
    {id: 1, title: 'Хавай меньше', dataStart:'01.09.2024', status:'Не активно',
        desc:'Регулярное питье воды улучшает обмен веществ и помогает восстанавливаться после тренировок',
        media:[]
    },
    {id: 2, title: 'Думай больше', dataStart:'01.09.2024', status:'Не активно',
        desc:'Регулярное питье воды улучшает обмен веществ и помогает восстанавливаться после тренировок',
        media:[]
    },
    {id: 3, title: 'Думай больше', dataStart:'01.09.2024', status:'Активно',
        desc:'Регулярное питье воды улучшает обмен веществ и помогает восстанавливаться после тренировок',
        media:[]
    },
]

export const FROZEN = [
    {
        id:0, name:'Иван Петров', data:'01.09.2024',  termDate:{startDate:'01.05.2001', endDate:'01.05.2021'},
        reason:'Отпуск', status:'Ожидает', phone:'+7 (708) 455 55 55', term:'2 недели',
    },
    {
        id:1, name:'Иван Петров', data:'01.09.2024', termDate:{startDate:'01.05.2001', endDate:'01.05.2021'},
        reason:'Отпуск', status:'Принята', phone:'+7 (708) 455 55 55', term:'2 недели'
    },
    {
        id:2, name:'Иван Петров', data:'01.09.2024', termDate:{startDate:'01.05.2001', endDate:'01.05.2021'},
        reason:'Отпуск', status:'Ожидает', phone:'+7 (708) 455 55 55', term:'2 недели'
    },
]

export const SUBSCRIPTION = [
    {
        id:0, title:'Абонемент 1 месяц', price:'15000', typeOf:'Персональный',
        term:'1', countOfTraining:'12', include:['Сауна', 'Тренер', 'Бассейн']
    },
    {
        id:1, title:'Абонемент 3 месяца', price:'60000', typeOf:'Групповой',
        term:'3', countOfTraining:'36', include:['Сауна', 'Тренер', 'Бассейн']
    },
    {
        id:2, title:'Абонемент 1 месяц', price:'15000', typeOf:'Персональный',
        term:'1', countOfTraining:'12', include:['Сауна', 'Тренер', 'Бассейн']
    },
]

export const STORECATEGORY = [
    {
        id:0, title:'Жещинам'
    },
    {
        id:1, title:'Мужчинам'
    },
]


export const CLASSESCATEGORY = [
    {
        id:0, title:'Йога'
    },
    {
        id:1, title:'Стретчинг'
    },
]


export const PRODUCTS = [
    {
        id: 0, title:'Футболка', price:'667', discountPrice:'1.000.000', count:'120', media:[],
        color:'#243355; #565435', size:'48; 52', character:['апапва'], desc:''
    },
    {
        id: 1, title:'Кросовки', price:'557', discountPrice:'1.000.000', count:'120', media:[],
        color:'#243355; #565435', size:'48; 52', character:['апапва'], desc:''
    },
    {
        id: 2, title:'Танк Т34', price:'1', discountPrice:'-1.000.000', count:'120', media:[],
        color:'#243355; #565435', size:'48; 52', character:['апапва'], desc:''
    },
]

export const PERSONAL = [
    {
        id:0, name:'Имя пользователя', title:'Название тренировки', data:'Дата', time:'Время', status:'Статус',
        coachName:'Имя тренера', price:1000, branch:'Филиал', notes:'Принести коврик для йоги'
    },
    {
        id:1, name:'Имя пользователя', title:'Название тренировки', data:'Дата', time:'Время', status:'Статус',
        coachName:'Имя тренера', price:2000, branch:'Филиал', notes:'Принести коврик для йоги'
    },
    {
        id:2, name:'Имя пользователя', title:'Название тренировки', data:'Дата', time:'Время', status:'Статус',
        coachName:'Имя тренера', price:3000, branch:'Филиал', notes:'Принести коврик для йоги'
    },
]

export const GROUP = [
    {
        id:0, name:'Название занятия', title:'Название тренировки', category:'Категория', status:'Статус',
        coachName:' Тренер', schedule:'Расписание', price:1000, participants:13, branch:'Филиал1', data:'01.09.2024', time:'10:00', notes:'Принести коврик для йоги'
    },
    {
        id:1, name:'Название занятия', title:'Название тренировки', category:'Категория', status:'Статус',
        coachName:' Тренер', schedule:'Расписание', price:1000, participants:13, branch:'Филиал1', data:'01.09.2024', time:'10:00' , notes:'Принести коврик для йоги'
    },
    {
        id:2, name:'Название занятия', title:'Название тренировки', category:'Категория', status:'Статус',
        coachName:' Тренер', schedule:'Расписание', price:1000, participants:13, branch:'Филиал1', data:'01.09.2024', time:'10:00' , notes:'Принести коврик для йоги'
    },
]