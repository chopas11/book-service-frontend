import axios from "axios";
import {USER_LOCALSTORAGE_ACCESS_TOKEN_KEY} from "../../../../shared/const/localStorageConsts.ts";
import {addOrderAction} from "../../../../entities/Order/model/slice/orderReducer.ts";


export const publicationService = (body) => {

    return (dispatch) => {
        console.log(body)
        const status = body.services.length > 0 ? 1 : 4
        dispatch(addOrderAction({...body, status: status, id: Date.now()} ))
        // const body = {
        //     "publication": {
        //         "title": "My first book",
        //         "authors": [
        //             "Oliver",
        //             "Smith"
        //         ],
        //         "description": "Bla-bla-bla",
        //         "publicationFile": "0JrQvdC40LPQsA==",
        //         "coverImage": "0JrQvdC40LPQsA==",
        //         "geners": [
        //             "Comedy",
        //             "Fantasy"
        //         ]
        //     },
        //     "services": [
        //         {
        //             "title": "editBook",
        //             "description": "string",
        //             "price": 0,
        //             "step": 0
        //         },
        //         {
        //             "title": "editBook",
        //             "description": "string",
        //             "price": 0,
        //             "step": 0
        //         }
        //     ],
        //     "tariff": {
        //         "name": "basic",
        //         "publicationPrice": 0,
        //         "royalty": 0,
        //         "conditions": [
        //             "swwsws"
        //         ]
        //     }
        // }

        axios.post('http://localhost:10000/publication-service/api/v0.0.1/add-publication',
            body,
            {
                withCredentials: true,
                headers: {
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Headers": "Content-Type",
                    Authorization: 'Bearer ' + localStorage.getItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY),
                },
            }
        )
            .then((resp) => {
                console.log(resp);
                console.log('Хоть что то')
                // Здесь же можно временно задиспатчить добавление Книги и заказа в Book И Order enteties, чтобы
                // моки для страниц MyBooks, Statistics, Orders были динамическими
                // dispatch(addOrderAction(body.publication))
            });
    }

}