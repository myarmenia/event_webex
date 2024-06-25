import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    am: {
      translation: {
        headertitle: "Հարսանյաց Հրավիրատոմս",
        couple: ["Վահան", "Աննա"],
        timer: ["Հարսանիքին մնաց", "օր", "ժամ", "րոպե", "վայրկյան"],
        maintitle:
          "Սիրով հրավիրում ենք ձեզ` կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան օրը",
        party: ["ՄԻՋՈՑԱՌՄԱՆ ՍԿԻԶԲԸ", "Աբովյան խճուղի 5", "Ինչպես հասնել"],
        marriage: [
          "ՊՍԱԿԱԴՐՈՒԹՅԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ",
          "Սուրբ Մարիամ Աստվածածին եկեղեցի",
          "ք. Երևան, Արմենակյան 225",
          "Ինչպես հասնել",
        ],
        regMarriage: [
          "ԱՄՈՒՍՆՈՒԹՅԱՆ ԳՐԱՆՑՈՒՄ",
          "Florence ռեստորան",
          "ք. Երևան, Բարբյուսի 64/2",
          "Ինչպես հասնել",
        ],
        restaurant: [
          "ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ",
          "Florence ռեստորան",
          "ք. Երևան, Բարբյուսի 64/2",
          "Ինչպես հասնել",
        ],
        formText: [
          "Խնդրում ենք հաստատել ձեր ներկայությունը միջոցառմանը",
          "Կգանք",
          " Չենք կարողանա գալ :(",
          "Անուն Ազգանուն",
          "Հյուրերի թիվ",
          "Պատասխանել",
          "Սիրով սպասում ենք ձեզ",
        ],
        autors: "Կայքը պատրաստել է",

        wedding1_buttons: ["Ստեղծել", "Տեսնել", "Ուղարկել"],

        leng_modal: [
          "Լեզու",
          "Ընտրեք այն լեզուն որով ցանկանում եք լինի ձեր հրավիրատոմսը",
        ],

        musicModalTitle: "Ընտրեք երաժշտություն",

        watsUpNumberTitle: "Գրել Wats Up-ի հեռախոսահամար",

        placeholderWedding1: [
          "Փեսացու",
          "Հարսնացու",
          "Միջոառման վայր",
          "Հասցե",
        ],
        birthDayHeaderTitle: ["ԾՆՆԴՅԱՆ", "ԽՆՋՈՒՅՔ"],
        birthDaytimer: [
          "Ծննդյան օրվան մնացել է",
          "օր",
          "ժամ",
          "րոպե",
          "վայրկյան",
        ],
        main_invitation: [
          "Հրավեր",
          "Հրավիրում ենք նշելու Կարեն Պետրոսյանի ծննդյան 50-ամյակը։",
          "Արարողությունը տեղի կունենա «ԼԱՆՋ» ռեստորանային համալիրում։",
          "Սիրով սպասում ենք։",
          "Հանդիպման օր",
          "Ժամ",
          "Վայր",
          "«ԼԱՆՋ» ռեստորան",
          "Այգեստան թաղամաս, Գևորգ Ջահուկյան փող., 213/9 շինություն",
          "Հարգանքով`",
          " Պետրոսյաններ",
        ],
        main_restaurant: ['"ԼԱՆՋ" ռեստորան', "Ինչպես հասնել"],
        footertitle: "Խնդրում ենք հաստատել ձեր ներկայությունը",
        placholderBirthday: ["հասցե", "հեռախոսահամար", "հղում հասցեին"],
        form: [
          "Մուտքագրեք Ձեր անունը և ազգանունը",
          "Անուն  Ազգանուն",
          "Ազգանուն",
          "հաղորդագրություն",
          "Խնդրում ենք հաստատել ձեր ներկայությունը",
          "կարող ենք գալ ",
          "չենք կարող գալ",
          "ՈՒՂԱՐԿԵԼ",
          "Պարտադիր դաշտ",
          "Պարտադիր թիվ",
          "Հյուրերի քանակ",
          "Ձեր նամակը հաջողությամբ ուղարկվել է։",
        ],
        mini_footer: ["Օնլայն հրավիրատոմսը ստեղծվել է", "կողմից։"],

        birthDay: ["ՄՆԱՑԵԼ Է", "օր", "ժամ", "րոպե", "վայրկյան"],
      },
    },

    ru: {
      translation: {
        headertitle: "СВАДЕБНОЕ ПРИГЛАШЕНИЕ",
        couple: ["ВАГАН", "АННА"],
        timer: ["До свадьбы осталось", "День", "Час", "Минута", "Секунда"],
        maintitle:
          "Мы счастливы пригласить Вас на нашу свадьбу! Это особенный и радостный для нас день, и мы хотели бы, чтобы Вы стали частью этого праздника.",
        party: ["НАЧАЛО МЕРОПРИЯТИЯ", "Абовянское шоссе 5", "Как добраться"],
        marriage: [
          "ВЕНЧАНИЕ",
          "Церковь Святой Марии Богородицы",
          "г. Ереван, Арменакяна 225",
          "Как добраться",
        ],
        regMarriage: [
          "ЗАГС",
          "Ресторан Florence",
          "г. Ереван. Барбюса 64/2",
          "Как добраться",
        ],
        restaurant: [
          "СВАДЕБНЫЙ БАНКЕТ",
          "Ресторан Florence",
          "г. Ереван. Барбюса 64/2",
          "Как добраться",
        ],
        formText: [
          "Просим вас подтвердить свое присутствие",
          "Мы придем",
          "Не сможем прийти :(",
          "Имя Фамилия",
          "Число гостей",
          "Отправить",
          "С нетерпением ждем Вас!",
        ],
        autors: "Сайт разработал",

        wedding1_buttons: ["Создать", "Видеть", "Отправлять"],

        leng_modal: [
          "Язык",
          "Выберите язык, на котором вы хотите, чтобы ваше приглашение было",
        ],

        musicModalTitle: "Выберите музыку",

        watsUpNumberTitle: "Напишите номер телефона Wats Up",

        placeholderWedding1: ["Жених", "Невеста", "Место проведения", "Адрес"],
        birthDayHeaderTitle: ["В Честь Дня Рождения", "Вечеринка"],
        birthDaytimer: [
          "До дня рождения осталось",
          "день",
          "час",
          "минута",
          "секунда",
        ],
        main_invitation: [
          "Приглашение",
          "Приглашаем Вас отметить 50-летие Карена Петросяна.",
          "Церемония пройдет в ресторанном комплексе «ЛАНЖ».",
          "Мы ждем с любовью.",
          "День встречи",
          "Время",
          "Место",
          "«ЛАНЖ» ресторан",
          "Айгестанский квартал, ул. Геворга Джаукяна, дом 213/9",
          "С уважением`",
          "Петросяны.",
        ],
        main_restaurant: ['"ЛАНЖ" ресторан', "Как добраться"],
        placholderBirthday: ["адрес", "номер телефона", "ссылка на адрес"],
        footertitle: "Просим Вас подтвердить свое присутствие",
        form: [
          "Введите свое имя и фамилию",
          "Имя Фамилия",
          "Фамилия",
          "Сообщение",
          "Просим вас подтвердить свое присутствие",
          "Мы придем",
          "Не сможем прийти",
          "Отправить",
          "Обязательное поле",
          "Обязательная цифра",
          "Количество гостей",
          "Ваше письмо было успешно отправлено.",
        ],
        mini_footer: ["Онлайн-приглашение создал", ""],

        birthDay: ["Остаётся", "день", "час", "минута", "секунда"],
      },
    },

    en: {
      translation: {
        headertitle: "WEDDING INVITATION",
        couple: ["Vahan", "Anna"],
        timer: [
          "Left until the wedding",
          "Days",
          "Hours",
          "Minutes",
          "Seconds",
        ],
        maintitle:
          "We are happy to invite you to our wedding! This is a special and joyful day for us, and we would like you to become part of this holiday.",
        party: ["START OF THE EVENT", "Abovyan Highway 5", "How to get there"],
        marriage: [
          "WEDDING",
          "Church of Surb Mariam Astvacacin",
          "c. Yerevan, Armenakyan 225",
          "How to get there",
        ],
        regMarriage: [
          "MARRIAGE REGISTRY",
          "Restaurant Florence",
          "c. Yerevan. Barbyussi 64/2",
          "How to get there",
        ],
        restaurant: [
          "WEDDING BANQUET",
          "Restaurant Florence",
          "c. Yerevan. Barbyussi 64/2",
          "How to get there",
        ],
        formText: [
          "We ask you to confirm your presence",
          "We will come",
          "We can't come :(",
          "Full name",
          "Number of guests",
          "Send",
          "We look forward to see you!",
        ],
        autors: "Website developed",

        wedding1_buttons: ["Create", "View", "Send"],

        leng_modal: [
          "Language",
          "Choose the language you want your invitation to be in",
        ],

        musicModalTitle: "Select music",

        watsUpNumberTitle: "Write Wats Up phone number",

        placeholderWedding1: ["Groom", "Bride", "Location", "Address"],
        birthDayHeaderTitle: ["Birthday", "Party"],
        birthDaytimer: [
          "left for the birthday",
          "day",
          "time",
          "minute",
          "second",
        ],
        main_invitation: [
          "Invitation",
          "We invite you to celebrate Karen Petrosyan’s 50th anniversary!",
          "The ceremony will take place in «LANJ» restaurant complex.",
          "We are waiting with love.",
          "Meeting day",
          "Hour",
          "Place",
          "«LANJ» restaurant",
          "Aygestan district, Gevorg Jahukyan str., building 213/9",
          "With respect`",
          "Petrosyan's",
        ],
        main_restaurant: ['"LANJ" restaurant', "How to get there"],
        placholderBirthday: ["address", "phone number", "address_link"],
        footertitle: "Please confirm your presence.",
        form: [
          "Enter your Name and Surname",
          "Name Surname",
          "Surname",
          "Message",
          "Please confirm your presence",
          "We will come",
          "We can't come",
          "SEND",
          "Required field",
          "Required number",
          "Number of guests",
          "Your email has been sent successfully.",
        ],
        mini_footer: ["Online invitation created by", ""],

        birthDay: ["Remains", "day", "hour", "minute", "second"],
      },
    },
  },
  lng: localStorage.getItem("lang") ? localStorage.getItem("lang") : "am", // Default language
  fallbackLng: localStorage.getItem("lang"), // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
