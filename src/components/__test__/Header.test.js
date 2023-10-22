
import Header from "../Header"
import { getByTestId, render } from "@testing-library/react"
import {Provider} from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("logo should load on rendering header", ()=>{

    // load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    // check if logo is loaded
    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("http://localhost/dummy.png");

})

test("online status should be green on rendering", ()=>{

    // load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )
    
    const onlineStatus  = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("Network Status : ✅");


})

test("cart items to be 0 on rendering", ()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart (0 items)");
})