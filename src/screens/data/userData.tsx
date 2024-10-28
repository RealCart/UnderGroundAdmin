export const userList = [
    { id:0, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQvNh-gFXfuM_022WG3t-Bbd57aPzPCwjYQ&s', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Абонимент', 
    subs:[
        {
            id: 0, type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30, status:'Активен', price: 150000
        },
        {
            id: 1, type:"Дневной безлимит", dateStart:"01.01.2019", dateEnd:"01.09.2020", remainder:30, status:'Активен', price: 150000
        },
        {
            id: 2, type:"Недельный безлимит", dateStart:"01.01.2013", dateEnd:"01.09.2021", remainder:30, status:'Активен', price: 150000
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
            branch:'Филиал 1', recorded:'8/10', typeOfTrainig:"Футбол", 
            coach:"Даулет Ержанов", amountOfTime:'60 мин',
        }
    ],
    reportsInfo:[
        {
            date:'05.02.2021', price:"110.000₸", statusOfPayment:'Неудача', 
            title:"Годовой абонемент", payedBy:"Кредитная карта"
        }
    ],
    guestVisit: [
        {
            name:'Олег Иванов', data:'01.09.2024', time:'10:00', phoneNumber:'(708) 445 55 55',
            status:'Подтверждено', typeOfTraining:'Йога', coach:'Даулет Ержанов', amountOfTime:60,
        }
    ]},
    {   id:1, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW6FRSqc1Spsv-Coo_g2UDfDM_oTQKQgMxQ&s', firstname:'Алина', lastname:"Алиева", 
        phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', 
        subs:[
        {
            type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30, status:'Активен', price:150000
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
        ],
        guestVisit: [
            {
                name:'Олег Иванов', data:'01.09.2024', time:'10:00', phoneNumber:'(708) 445 55 55',
                status:'Подтверждено', typeOfTraining:'Йога', coach:'Даулет Ержанов', amountOfTime:60,
            }
        ]
    },
    { id:2, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1FLcrOvTMtJBK8o7uQziwNjl25g095oWbg&s', firstname:'Алина', lastname:"А.", phoneNumber:"(708) 445 55 55", email:'AlinaA@mail.ru', date:'5.09.1996', gender:"Мужской", status:'Без абонимент', subs:[
        {
            type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30, status:'Активен', price:150000
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
    ],
    guestVisit: [
        {
            name:'Олег Иванов', data:'01.09.2024', time:'10:00', phoneNumber:'(708) 445 55 55',
            status:'Подтверждено', typeOfTraining:'Йога', coach:'Даулет Ержанов', amountOfTime:60,
        }
    ]},
    { id:3, avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZTikYwJtUjwonDTb7Nd9Ch8ct09mhgeGpg&s', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Абонимент', subs:[
        {
            type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30, status:'Активен', price:150000
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
    ],
    guestVisit: [
        {
            name:'Олег Иванов', data:'01.09.2024', time:'10:00', phoneNumber:'(708) 445 55 55',
            status:'Подтверждено', typeOfTraining:'Йога', coach:'Даулет Ержанов', amountOfTime:60,
        }
    ]},
    { id:4, avatar:'', firstname:'Алина', lastname:"Алиева", phoneNumber:"(708) 445 55 55", email:'AlinaAlieva@mail.ru', date:'5.09.1996', gender:"Женский", status:'Заморозка', subs:[ 
        {
            type:"Годовой безлимит", dateStart:"01.01.2023", dateEnd:"01.09.2025", remainder:30, status:'Активен', price:150000
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
    ],
    guestVisit: [
        {
            name:'Олег Иванов', data:'01.09.2024', time:'10:00', phoneNumber:'(708) 445 55 55',
            status:'Подтверждено', typeOfTraining:'Йога', coach:'Даулет Ержанов', amountOfTime:60,
        }
    ]},
]