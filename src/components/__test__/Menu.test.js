

import {render,waitFor, fireEvent} from "@testing-library/react"
import  Body from "../Body"
import { StaticRouter } from "react-router-dom/server"
import {Provider} from "react-redux"
import store from "../../utils/store"
import { MENU_DATA } from "../../mocks/data"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MENU_DATA)
        }
    })
})


test("Add Items to cart", async ()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId("menu ")));

    const addBtn = body.getByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);

    expect(resList.children.length).toBe(20);

    const cart = body.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart (2 items)");
})

