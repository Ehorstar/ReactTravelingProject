const translations = {
  en: {
    // Common
    common: {
      button: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      book: "Book",
      view: "View",
      search: "Search",
      back: "Back",
      confirm: "Confirm",
      close: "Close",
      loading: "Loading...",
      error: "Error occurred",
    },

    // Navigation
    nav: {
      home: "Home",
      tours: "Tours",
      history: "History",
      settings: "Settings",
      login: "Login",
      register: "Register",
      logout: "Logout",
      profile: "Profile",
    },

    // Auth
    auth: {
      titleRegistration: "Registration",
      titleLogin: "Login",
      nameLogin: "Enter your name",
      name: "Full name",
      age: "Age",
      password: "Enter password",
      repeatpassword: "Repeat password",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      registerNow: "Register now",
      loginNow: "Login now",
      loginSuccess: "Login successful!",
      logoutSuccess: "Logout successful!",
    },

    // Home
    home: {
      title: "Home page",
      about:
        "Our service helps you easily plan and book your trips. Choose travel dates, select the number of people, manage bookings, and enjoy a simple and convenient interface with language and theme customization.",
      booknow: "Book now",
      features: "Features",
      popularTours: "Popular Tours",
      testimonials: "Testimonials",
      startJourney: "Start Your Journey",
    },

    // Tours
    tours: {
      title: "Available Tours",
      filter: "Filter tours",
      sort: "Sort by",
      price: "Price",
      rating: "Rating",
      duration: "Duration",
      category: "Category",
      nights: "nights",
      perPerson: "per person",
      details: "View Details",
      noTours: "No tours available",
    },

    // Tour Details
    tour: {
      booking: "Booking",
      generalInfo: "General Information",
      hotel: "Hotel",
      departure: "Departure",
      return: "Return",
      nights: "Number of nights: ",
      description: "Description",
      included: "What's included",
      notIncluded: "What's not included",
      pricePerPerson: "Price per person",
      totalPrice: "Total price",
      bookNow: "Book Now",
      similarTours: "Similar Tours",
      departureAndReturn: "Departure and return",
    },

    // Booking
    booking: {
      title: "Booking page",
      passengers: "Passengers",
      passengerDetails: "Passenger details",
      passenger: "Passenger",
      passengerName: "Name",
      passengerAge: "Age",
      total: "Total",
      confirm: "Confirm Booking",
      success: "Booking successful!",
      processing: "Processing your booking...",
    },

    // History
    history: {
      title: "Travel History",
      noTrips: "No trips in history",
      to: "To",
      hotel: "Hotel",
      dates: "Dates",
      amountOfPassengers: "Amount of passengers",
      totalPrice: "Total price",
      status: "Status",
      completed: "Completed",
      upcoming: "Upcoming",
      cancelled: "Cancelled",
      remove: "Remove",
      viewDetails: "View Details",
    },

    // Settings
    settings: {
      main: "Main Settings",
      changeTheme: "Change theme",
      changeLanguage: "Change language",
      account: "Account Settings",
      changeName: "Change name",
      changePassword: "Change password",
      newName: "New name",
      newPassword: "New password",
      repeatNewPassword: "Repeat new password",
      leaveAccount: "Leave account",
      confirmLogout: "Leave account?",
      logoutMessage: "You will be logged out from this account.",
      saveChanges: "Save Changes",
      changesSaved: "Changes saved successfully",
    },

    // Validation
    validation: {
      nameRequired: "Name is required",
      nameTooShort: "Name must be more than 2 characters",
      nameTooLong: "Name must be less than 18 characters",
      ageRequired: "Age is required",
      ageNumber: "Age must be a number",
      agePositive: "Age must be positive",
      ageInteger: "Age must be an integer",
      passwordRequired: "Password is required",
      passwordInvalid:
        "Password must contain uppercase, lowercase, number and special character",
      passwordsMatch: "Passwords must match",
      repeatPasswordRequired: "Repeat password",
      emailInvalid: "Email is invalid",
      phoneInvalid: "Phone number is invalid",
      required: "This field is required",
    },

    // Errors
    errors: {
      network: "Network error. Please try again.",
      server: "Server error. Please try later.",
      unauthorized: "Unauthorized access.",
      notFound: "Page not found.",
      generic: "Something went wrong.",
    },
  },

  ua: {
    // Common
    common: {
      button: "Прийняти",
      cancel: "Скасувати",
      save: "Зберегти",
      delete: "Видалити",
      edit: "Редагувати",
      book: "Забронювати",
      view: "Переглянути",
      search: "Пошук",
      back: "Назад",
      confirm: "Підтвердити",
      close: "Закрити",
      loading: "Завантаження...",
      error: "Сталася помилка",
    },

    // Navigation
    nav: {
      home: "Головна",
      tours: "Тури",
      history: "Історія",
      settings: "Налаштування",
      login: "Увійти",
      register: "Реєстрація",
      logout: "Вийти",
      profile: "Профіль",
    },

    // Auth
    auth: {
      nameLogin: "Введіть логін",
      titleRegistration: "Реєстрація",
      titleLogin: "Вхід",
      name: "Повне ім'я",
      age: "Вік",
      password: "Уведіть пароль",
      repeatpassword: "Повторіть пароль",
      alreadyHaveAccount: "Вже маєте акаунт?",
      dontHaveAccount: "Не маєте акаунту?",
      registerNow: "Зареєструватися",
      loginNow: "Увійти",
      loginSuccess: "Вхід успішний!",
      logoutSuccess: "Вихід успішний!",
    },

    // Home
    home: {
      title: "Головна сторінка",
      about:
        "Наш сервіс допомагає легко планувати та бронювати подорожі. Обирайте дати поїздки, кількість людей, керуйте бронюваннями та користуйтеся простим і зручним інтерфейсом з підтримкою мови та теми.",
      booknow: "Забронювати зараз",
      features: "Особливості",
      popularTours: "Популярні тури",
      testimonials: "Відгуки",
      startJourney: "Почніть свою подорож",
    },

    // Tours
    tours: {
      title: "Доступні тури",
      filter: "Фільтр турів",
      sort: "Сортувати за",
      price: "Ціна",
      rating: "Рейтинг",
      duration: "Тривалість",
      category: "Категорія",
      nights: "ночей",
      perPerson: "за людину",
      details: "Детальніше",
      noTours: "Немає доступних турів",
    },

    // Tour Details
    tour: {
      booking: "Бронювання",
      generalInfo: "Загальна інформація",
      hotel: "Готель",
      departure: "Виїзд",
      return: "Повернення",
      description: "Опис",
      nights: "Кількість ночей: ",
      included: "Що включено",
      notIncluded: "Що не включено",
      pricePerPerson: "Ціна за людину",
      totalPrice: "Загальна ціна",
      bookNow: "Забронювати",
      similarTours: "Схожі тури",
      departureAndReturn: "Виїзд і повернення",
    },

    // Booking
    booking: {
      title: "Сторінка бронювання",
      passengers: "Пасажири",
      passengerDetails: "Деталі пасажирів",
      passenger: "Пасажир",
      passengerName: "Ім'я",
      passengerAge: "Вік",
      total: "Всього",
      confirm: "Підтвердити бронювання",
      success: "Бронювання успішне!",
      processing: "Обробка вашого бронювання...",
    },

    // History
    history: {
      title: "Історія подорожей",
      noTrips: "Немає подорожей в історії",
      to: "Тур у місто",
      hotel: "Готель",
      dates: "Дата",
      amountOfPassengers: "Кількість пасажирів",
      totalPrice: "Загальна ціна",
      status: "Статус",
      completed: "Завершено",
      upcoming: "Майбутня",
      cancelled: "Скасовано",
      remove: "Видалити",
      viewDetails: "Детальніше",
    },

    // Settings
    settings: {
      main: "Основні налаштування",
      changeTheme: "Змінити тему",
      changeLanguage: "Змінити мову",
      account: "Налаштування акаунту",
      changeName: "Змінити ім'я",
      changePassword: "Змінити пароль",
      newName: "Нове ім'я",
      newPassword: "Новий пароль",
      repeatNewPassword: "Повторіть новий пароль",
      leaveAccount: "Вийти з акаунту",
      confirmLogout: "Вийти з акаунту?",
      logoutMessage: "Ви вийдете з цього акаунту.",
      saveChanges: "Зберегти зміни",
      changesSaved: "Зміни збережено успішно",
    },

    // Validation
    validation: {
      nameRequired: "Ім'я обов'язкове",
      nameTooShort: "Ім'я має бути більше 2 символів",
      nameTooLong: "Ім'я має бути менше 18 символів",
      ageRequired: "Вік обов'язковий",
      ageNumber: "Вік має бути числом",
      agePositive: "Вік має бути позитивним",
      ageInteger: "Вік має бути цілим числом",
      passwordRequired: "Пароль обов'язковий",
      passwordInvalid:
        "Пароль має містити великі, малі літери, число та спецсимвол",
      passwordsMatch: "Паролі мають співпадати",
      repeatPasswordRequired: "Повторіть пароль",
      emailInvalid: "Email некоректний",
      phoneInvalid: "Номер телефону некоректний",
      required: "Це поле обов'язкове",
    },

    // Errors
    errors: {
      network: "Помилка мережі. Спробуйте ще раз.",
      server: "Помилка сервера. Спробуйте пізніше.",
      unauthorized: "Несанкціонований доступ.",
      notFound: "Сторінку не знайдено.",
      generic: "Щось пішло не так.",
    },
  },
};

export default translations;
