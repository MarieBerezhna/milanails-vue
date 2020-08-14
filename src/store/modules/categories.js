import axios from 'axios';

const state = {
    meta: {
            title: "MilaNails - майстерня манікюру",
            subtitle: "Професійний догляд та креативний підхід"
        },
    categories: [{
            "id": 1,
            "name": "Манікюр",
            "services": [{
                    "id": 1,
                    "name": "Манікюр",
                    "price": 200
                },
                {
                    "id": 2,
                    "name": "Покриття",
                    "price": 200
                },
                {
                    "id": 3,
                    "name": "Зняття",
                    "price": 50
                },
                {
                    "id": 4,
                    "name": "Зняття без покриття",
                    "price": 100
                }
            ]
        },
        {
            "id": 2,
            "name": "Педикюр",
            "services": [{
                    "id": 1,
                    "name": "Педикюр",
                    "price": 350
                },
                {
                    "id": 2,
                    "name": "Покриття",
                    "price": 200
                },
                {
                    "id": 3,
                    "name": "Зняття",
                    "price": "-"
                },
                {
                    "id": 4,
                    "name": "Зняття без покриття",
                    "price": 50
                },
                {
                    "id": 5,
                    "name": "Педикюр пальчики",
                    "price": 250
                },
                {
                    "id": 6,
                    "name": "Педикюр п'яточки",
                    "price": 200
                }
            ]
        },
        {
            "id": 3,
            "name": "Бровки",
            "services": [{
                    "id": 1,
                    "name": "Коррекцiя форми",
                    "price": 75
                },
                {
                    "id": 2,
                    "name": "Фарбування",
                    "price": 75
                }
            ]
        }
    ]
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