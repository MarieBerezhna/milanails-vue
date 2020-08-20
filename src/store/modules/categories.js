import axios from 'axios';

const state = {
  meta: {
    title: "MilaNails - майстерня манікюру",
    subtitle: "Професійний догляд та креативний підхід",
  },
  categories: [
    {
      id: 1,
      name: "Маникюр",
      image: "manicure.jpg",
      services: [
        {
          id: 1,
          name: "Маникюр",
          price: 200,
        },
        {
          id: 2,
          name: "Покрытие",
          price: 200,
        },
        {
          id: 3,
          name: "Снятие",
          price: 50,
        },
        {
          id: 4,
          name: "Снятие без покрития",
          price: 100,
        },
      ],
    },
    {
      id: 2,
      name: "Педикюр",
      image: "pedicure.jpg",
      services: [
        {
          id: 1,
          name: "Педикюр",
          price: 350,
        },
        {
          id: 2,
          name: "Покриття",
          price: 200,
        },
        {
          id: 3,
          name: "Зняття",
          price: "-",
        },
        {
          id: 4,
          name: "Зняття без покриття",
          price: 50,
        },
        {
          id: 5,
          name: "Педикюр пальчики",
          price: 250,
        },
        {
          id: 6,
          name: "Педикюр п'яточки",
          price: 200,
        },
      ],
    },
    {
      id: 3,
      name: "Бровки",
      image: "eyebrows.jpg",
      services: [
        {
          id: 1,
          name: "Коррекцiя форми",
          price: 75,
        },
        {
          id: 2,
          name: "Фарбування",
          price: 75,
        },
      ],
    },
  ],
};
const getters = {
    allCategories: () => state.categories,
    metaInfo: () => state.meta
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};