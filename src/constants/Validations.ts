import * as Yup from "yup";

export const UserInfoValidationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .min(15, 'Номер слишком короткий')
        .max(15, 'Номер слишком короткий')
        .required('Номер телефона обязателен'),
    email: Yup.string()
      .email('Некорректный email адрес')
      .required('Email обязателен'),
    firstname: Yup.string()
      .min(2, 'Имя должно содержать минимум 2 символа')
      .required('Имя обязательно'),
    lastname: Yup.string()
      .min(2, 'Фамилия должна содержать минимум 2 символа')
      .required('Фамилия обязательна'),
    date: Yup.string()
      .required('Дата рождения обязательна'),
    gender: Yup.string()
      .oneOf(['Мужской', 'Женский'], 'Выберите пол')
      .required('Пол обязателен'),
});

export const UserExtendSubscription = Yup.object().shape({
    dataStart: Yup.string()
        .required('Поле даты текущего окончания обязательна'),
    dataEnd: Yup.string()
        .required('Дата окончания обязательна'),
    price: Yup.number()
        .required('Поле стоимости обязательна к заполнению')
        .positive('Стоимость должна быть положительным числом'),
})

export const UserEditSubscription = Yup.object().shape({
    type: Yup.string()
      .required('Поле типа абонемента обязательна к заполнению'),
  
    dataStart: Yup.string()
      .required('Поле даты начала обязательно'),
  
    dataEnd: Yup.string()
      .required('Поле даты окончания обязательно')
      .test(
        'is-end-date-valid',
        'Дата окончания должна быть позже даты начала и не совпадать с ней',
        function (dataEnd) {
          const { dataStart } = this.parent;
          if (!dataStart || !dataEnd) return true;
          const formattedStart = dataStart.split('.').reverse().join('');
          const formattedEnd = dataEnd.split('.').reverse().join('');
          return formattedEnd > formattedStart; 
        }
      ),
  
    price: Yup.number()
      .required('Поле стоимости обязательно к заполнению')
      .positive('Стоимость должна быть положительным числом'),
  
    status: Yup.string()
      .required('Поле статуса обязательно к заполнению'),
  });

export const UserEditSchedule = Yup.object().shape({
    class: Yup.string()
        .required('Поле название занятия обязателен'),
    coach: Yup.string()
        .required('Поле тренера обязателен к выбору'),
    branch: Yup.string()
        .required('Поле выбора филиала обязателен к выбору'),
    data: Yup.string()
        .required('Поле даты обязаьтелен к выбору'),
    time: Yup.string()
        .required('Поле обязателен к выбору'),
})

export const UserEditGuestValidation = Yup.object().shape({
    name: Yup.string()
        .required('Поле имени обязателен к заполнению'),
    phoneNumber: Yup.string()
        .required("Поле номера телефона обязателен к заполнению")
        .min(15, 'Номер слишком короткий')
        .max(15, 'Номер слишком короткий'),
    data: Yup.string()
        .required('Поле даты обязателен к заполеннию')
})

export const CoachScheudleValidation = Yup.object().shape({
    class: Yup.string()
        .required('Поле названия занятия обязателен'),
    data: Yup.string()
        .required('Поле датиы обязателен'),
    time: Yup.string()
        .required('Поле время обязателен'),
})

export const CoachInfoValidationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .min(15, 'Номер слишком короткий')
      .max(15, 'Номер слишком короткий')
      .required('Номер телефона обязателен'),
    email: Yup.string()
      .email('Некорректный email адрес')
      .required('Email обязателен'),
    firstname: Yup.string()
      .min(2, 'Имя должно содержать минимум 2 символа')
      .required('Имя обязательно'),
    lastname: Yup.string()
      .min(2, 'Фамилия должна содержать минимум 2 символа')
      .required('Фамилия обязательна'),
    profession: Yup.string()
        .required('Поле проффесии обязателен к заполнению'),
    desc: Yup.string()
        .required('Поле описание обязателен к заполнению'),
    sertificate: Yup.array()
        .of(Yup.string().required('Оброзования и сертификаты обязателен к заполнению')),
    expInput: Yup.array()
        .of(Yup.string().required('Опыт работы обязателен к заполнению')),
    // photoFromWorkOut: Yup.array()
    //     .min(1, 'Выберите хотя бы 1 фотографию'),
    date: Yup.string()
      .required('Дата рождения обязательна'),
    gender: Yup.string()
      .oneOf(['Мужской', 'Женский'], 'Выберите пол')
      .required('Пол обязателен'),
    exp: Yup.string()
      .required('Выбор опыта обязательна'),
    specialize: Yup.array()
      .min(1, 'Выберите хотя бы одну специальность')
      .required('Выбор специальности обязателен'),
  });  

export const ScheduleInfoValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле названии занятии обязателен'),
    coach: Yup.string()
        .required('Поле тренера обязателен'),
    data: Yup.string()
        .required('Поле даты обязателен к заполнению'),
    time: Yup.string()
        .required('Поле времени обязателен к заполнению'),
    branch: Yup.string()
        .required('Поле выбора филиала обязателен к заполнению'),
    recorded: Yup.string()
        .required('Поле записи обязателен к заполнению'),
})

export const PaymentsInfoValidation = Yup.object().shape({
    data: Yup.string()
        .required('Поле даты обязательна к заполнению'),
    client: Yup.string()
        .min(4, 'ФИО слишком короткий')
        .required('Поле ФИО клиента обязательна к заполнению'),
    payedBy: Yup.string()
        .required('Поле метода оплаты обязательна к заполнению'),
    service: Yup.string()
        .required('Поле услуги обязательна к заполнению'),
    amountOf: Yup.string()
        .required('Поле суммы обязательна к заполнению'),
    status: Yup.string()
        .required('Поле статуса обязательна к заполнению')
})

export const NotificationInfoValidation = Yup.object().shape({
    typeOf: Yup.string()
        .required('Тип уведомления обязательна'),
    toWho: Yup.string()
        .required('Поле получателя обязательна'),
    method: Yup.string()
        .required('Поле метода отправки обязательна'),
    data: Yup.string()
        .required('Поле даты обязательна к заполнению'),
    status: Yup.string()
        .required('Поле статуса обязателен к выбору'),
})

export const AddNotificationInfoValidation = Yup.object().shape({
    typeOf: Yup.string()
        .required('Тип уведомления обязательна'),
    title: Yup.string()
        .required('Заголовок уведомления обязателен'),
    text: Yup.string()
        .required('Текст уведомления обязательна'),
    toWho: Yup.string()
        .required('Поле получателя обязательна'),
    filter: Yup.string()
        .required('Поле фильтра обязательна'),
    method: Yup.string()
        .required('Поле метода отправки обязательна'),
    time: Yup.string()
        .required('Поле времени отправки обязательна'),
})

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const BranchInfoValidation = Yup.object().shape({
  title: Yup.string().required('Поле названия обязательно'),
  adress: Yup.string().required('Поле адреса обязательно'),
  location: Yup.string().required('Поле расположения обязателен к заполнению'),
  desc: Yup.string().required('Поле описание обязателен к заполнению'),
  phoneNumber: Yup.string()
    .min(15, 'Номер слишком короткий')
    .max(15, 'Номер слишком длинный')
    .required('Поле номера обязательно к заполнению'),
  email: Yup.string()
    .email('Некорректный email адрес')
    .required('Поле электронной почты обязательно к заполнению'),
  workHour: Yup.object().shape(
    daysOfWeek.reduce((schema, day) => {
        schema[day] = Yup.string()
          .matches(/^\d{2}:\d{2}-\d{2}:\d{2}$/, 'Введите время в формате ЧЧ:ММ-ЧЧ:ММ')
          .required(`${day} обязательно`);
        return schema;
      }, {} as { [key: string]: Yup.StringSchema })
  ),
  countOfCoaches: Yup.number().required('Поле обязательно к заполнению'),
  countOfUsers: Yup.number().required('Поле обязательно к заполнению'),
});

export const CategoryValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле названия обязательна к заполнению')
})

export const GamificationInfoValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле название обязательна к заполнению'),
    type: Yup.string()
        .required('Поле типа обязательна к заполнению'),
    desc: Yup.string()
        .required('Поле описание обязательна к заполнению'),
    amountOfPeople: Yup.string()
        .required('Поле участников обязательна к заполнению')
        .matches(/^[0-9]+$/, "В поле должны быть только цифры"),
    prize: Yup.string()
        .required('Поле приза обязательна к заполнению'),
})

export const StoriesInfoValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле название обязательна к заполнению'),
    data: Yup.string()
        .required('Поле даты обязательна к заполнению'),
    desc: Yup.string()
        .required('Поле описания обязателен'),
    media: Yup.array()
        .min(1, 'Пожалуйста, выберите хотя бы одну фотографию.'),
})

export const FrozenInfoValidation = Yup.object().shape({
    name: Yup.string()
        .required('Поле ФИО обязателен к заполнению'),
    reason: Yup.string()
        .required('Поле причины заморозки обязателен к заполнению'),
    phone: Yup.string()
        .required('Поле номера телефона обязателен к заполнению'),
    data: Yup.string()
        .required('Поле даты подачи заявки обязателен к заполнению'),
    termDate: Yup.object().shape({
        startDate: Yup.string().required('Дата начала обязательна'),
        endDate: Yup.string().required('Дата окончания обязательна'),
    }),
    status: Yup.string()
        .required('Поле статуса обязателен к заполнению')
})

export const SubscriptionInfoValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле название абонемента обязателен к заполнению'),
    price: Yup.number()
        .required('Поле cтоимости обязателен к заполнению')
        .positive('Стоимость должна быть положительным числом'),
    term: Yup.string()
        .required('Поле продолжительности обязателен к заполнению'),
    countOfTraining: Yup.string()
        .required('Поле количество тренировок обязателен к заполнению'),
    include: Yup.string()
        .required('Поле дополнительно обязателен к заполнению'),
})

export const StoreProductsValidation = Yup.object().shape({
    media: Yup.array()
        .min(1, 'Пожалуйста, выберите хотя бы одну фотографию.'),
    title: Yup.string()
        .required('Поле название обязателен к заполнению'),
    price: Yup.number()
        .required('Поле цены обязателен к заполнению')
        .positive('Стоимость должна быть положительным числом'),
    count: Yup.number()
        .required('Поле кол-во обязателен к заполнению'),
    color: Yup.string()
        .required('Поле выбора цвета обязателен к заполнению'),
    size: Yup.string()
        .required('Поле выбора размера обязателен к заполнению'),
    character: Yup.array()
        .of(Yup.string().required('Характеристики не могут быть пустыми')),
    desc: Yup.string()
        .required('Поле описания обязателен к заполнению'),
});

export const ClassesPersonalValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле названия занятии обязателен к заполнению'),
    coach: Yup.string()
        .required('Поле тренера обязателен к выбору'),
    data: Yup.string()
        .required('Поле даты обязателен к выбору'),
    time: Yup.string()
        .required('поле времени обязателен к выбору'),
    branch: Yup.string()
        .required('Поле филиала обязателен к выбору'),
    price: Yup.number()
        .required('Поле стоимости обязателен к выбору')
        .positive('Стоимость должна быть положительным числом'),
})

export const ClassesGroupValidation = Yup.object().shape({
    title: Yup.string()
        .required('Поле названия занятии обязателен к заполнению'),
    coach: Yup.string()
        .required('Поле тренера обязателен к выбору'),
    category: Yup.string()
        .required('Поле категории обязателен к заполнению'),
    data: Yup.string()
        .required('Поле даты обязателен к выбору'),
    schedule: Yup.string()
        .required('поле расписания обязателен к выбору'),
    time: Yup.string()
        .required('поле времени обязателен к выбору'),
    branch: Yup.string()
        .required('Поле филиала обязателен к выбору'),
    participants: Yup.number()
        .required('Поле максимально кол-во участников обязателен к заполнению')
        .positive('Стоимость должна быть положительным числом'),
    price: Yup.number()
        .required('Поле стоимости обязателен к выбору')
        .positive('Стоимость должна быть положительным числом'),
})

export const MediaScreenValidation = Yup.object().shape({
    images: Yup.array()
        .min(1, 'Пожалуйста, выберите хотя бы одну фотографию.'),
})

export const AuthenticationValidation = Yup.object().shape({
    name: Yup.string()
        .required('Имя обязательно для заполнения.')
        .min(2, 'Имя должно быть не менее 2 символов.')
        .max(50, 'Имя должно быть не более 50 символов.'),
    surname: Yup.string()
        .required('Фамилия обязательна для заполнения.')
        .min(2, 'Фамилия должна быть не менее 2 символов.')
        .max(50, 'Фамилия должна быть не более 50 символов.'),
    dateOfBirth: Yup.string()
        .required('Выберите дату рождения.'),
    gender: Yup.string()
        .required('Выберите пол.'),
});

export const UserUpdate = Yup.object().shape({
    phone: Yup.string()
        // .matches(phoneRegex, 'Номер телефона недействителен.')
        .required('Номер телефона обязателен для заполнения.'),
    email: Yup.string()
        .required('Почта обязательна для заполнения.'),
    name: Yup.string()
        .required('Имя обязательно для заполнения.')
        .min(2, 'Имя должно быть не менее 2 символов.')
        .max(50, 'Имя должно быть не более 50 символов.'),
    surname: Yup.string()
        .required('Фамилия обязательна для заполнения.')
        .min(2, 'Фамилия должна быть не менее 2 символов.')
        .max(50, 'Фамилия должна быть не более 50 символов.'),
    dateOfBirth: Yup.string()
        .required('Выберите дату рождения.'),
    gender: Yup.string()
        .required('Выберите пол.'),
});

const cleanInn = (value: string) => value.replace(/[\s-]/g, '');

export const AuthorizationValidation = Yup.object().shape({
    name: Yup.string()
        .required('Имя обязательно для заполнения.')
        .min(2, 'Имя должно быть не менее 2 символов.')
        .max(50, 'Имя должно быть не более 50 символов.'),
    last_name: Yup.string()
        .required('Фамилия обязательна для заполнения.')
        .min(2, 'Фамилия должна быть не менее 2 символов.')
        .max(50, 'Фамилия должна быть не более 50 символов.'),
    phone: Yup.string()
        // .matches(phoneRegex, 'Номер телефона недействителен.')
        .required('Номер телефона обязателен для заполнения.'),
    email: Yup.string()
        .required('Почта обязательна для заполнения.'),
        // .test('is-valid-login', 'Неверный формат почты.',
        //     function(value) {
        //         return emailRegex.test(value);
        //     }
        // ),
    password: Yup.string()
        .required('Пароль обязателен для заполнения.')
        .min(8, 'Пароль должен быть не менее 8 символов.')
        .max(20, 'Пароль должен быть не более 20 символов.'),
    passwordRepetition: Yup.string()
        .required('Пароль обязателен для заполнения.')
        .min(8, 'Пароль должен быть не менее 8 символов.')
        .max(20, 'Пароль должен быть не более 20 символов.')
});

export const AddFirmValidation = Yup.object().shape({
    name: Yup.string().required('Введите название фирмы.'),
    description: Yup.string().required('Добавьте описание к фирме.')
})

export const AddExpenseValidation = Yup.object().shape({
    reason: Yup.string().required('Введите причину расхода'),
    amount: Yup.number().min(1, 'Сумма не может быть ниже 0').required('Введите сумму расхода.'),
    description: Yup.string().required('Добавьте описание к расходу.')
})

export const AddAccountValidation = Yup.object().shape({
    type: Yup.string().required('Введите тип тендера.'),
    tender_number: Yup.string().required('Введите номер тендера.'),
    organization: Yup.string().required('Введите название организации.'),
    amount: Yup.string().required('Введите сумму пополнения.'),
    user_id: Yup.number().required('Выберите сотрудника.'),
    company_id: Yup.number().required('Выберите компанию.')
})

export const UpdateEmailValidation = Yup.object().shape({
    email: Yup.string().trim().required("Введите новую почту.").test("is-valid-login", "Введите корректный email.", function (value) {
        if (!value) {
            return this.createError({ message: "Введите почту." });
        }
        // if (emailRegex.test(value)) {
        //     return true;
        // }
        if (value.includes("@") || /[a-zA-Z]/.test(value)) {
            return this.createError({ message: "Введите корректный email." });
        }
        return false;
    }),
});

// Определение схемы валидации с Yup
export const InnValidation = Yup.object().shape({
    inn: Yup.string()
        .required('ИНН обязателен для заполнения.')
        .test(
            'clean-length',
            'ИНН должен быть не менее 12 символов и не более 12 символов.',
            (value) => {
                // Очистка значения от пробелов и дефисов
                const cleanedValue = cleanInn(value);
                // Проверка длины очищенного значения
                return cleanedValue.length === 12;
            }
        )
});

export const NameValidation = Yup.object().shape({
    name: Yup.string().required('Введите имя.'),
    last_name: Yup.string().required('Введите фамилию.')
});

export const passwordValiidation = Yup.object().shape({
    old_password: Yup.string().required('Введите старый пароль.'),
    new_password: Yup.string().required('Введите новый пароль.'),
    confirm_password: Yup.string()
        // .oneOf([Yup.ref('new_password'), null], 'Пароли должны совпадать.')
        .required('Подтвердите новый пароль.')
});

export const PhoneValidation = Yup.object().shape({
    phone: Yup.string()
        .required("Введите номер телефона.")
        // .matches(phoneRegex, "Некорректный формат номера телефона.")
});

export const ForgotPasswordValidation = Yup.object().shape({
    login: Yup.string().trim().required("Введите почту.").test("is-valid-login", function (value) {
        if (!value) return this.createError({ message: "Введите почту." });
        // if (emailRegex.test(value)) return true;
        if (value.includes("@") || /[a-zA-Z]/.test(value)) {
            return this.createError({ message: "Введите корректный email." });
        }
    }),
});

export const AddEmployeeValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Имя должно содержать минимум 2 символа.')
        .required('Имя обязательно для заполнения.'),
    last_name: Yup.string()
        .min(2, 'Фамилия должна содержать минимум 2 символа.')
        .required('Фамилия обязательна для заполнения'),
    phone: Yup.string()
        // .matches(phoneRegex, 'Некорректный формат номера телефона.')
        .required('Телефон обязателен для заполнения.'),
    inn: Yup.string()
        .required('ИНН обязателен для заполнения.')
        .test(
            'clean-length',
            'ИНН должен быть не менее 12 символов и не более 12 символов.',
            (value) => {
                // Очистка значения от пробелов и дефисов
                const cleanedValue = cleanInn(value);
                // Проверка длины очищенного значения
                return cleanedValue.length === 12;
            }
        ),
    email: Yup.string()
        .email('Введите корректный email.')
        .required('Email обязателен для заполнения.'),
    password: Yup.string()
        .min(6, 'Пароль должен содержать минимум 6 символов.')
        .required('Пароль обязателен для заполнения.'),
});

export const updatePasswordValidation = Yup.object().shape({
    old_password: Yup.string().required('Введите старый пароль.'),
    new_password: Yup.string().required('Введите новый пароль.')
});

export const createCategoryValidation = Yup.object().shape({
    name: Yup.string().required('Введите название категории.')
});

export const updateBalanceValidation = Yup.object().shape({
    balance: Yup.number().required('Введите сумму пополнения.'),
    description: Yup.string().required('Введите описание пополнения.')
})