import { Link, Outlet } from "react-router-dom";
import Welcome from "./welcome";

export default function MainLayout(props) {

    return (
        <>
            <h1>{props.title}</h1>
            <Link to='/product'>상품보기</Link>
            <Link to='/shpping_cart'>장바구니</Link>
            <Link to='/payment'>결제금액보기</Link>
            <Outlet />
        </>
    );
}