import { useDispatch, useSelector } from "react-redux";

export default function Product() {

    const addProduct = useSelector((state) => state.shopOptions.product)
    return (
        <>
            <ul>
                {addProduct.map((add) =>
                (<li key={add.id} id={add.id}>{add.name}-{add.price}
                    <button onClick={(e) => {
                        alert('상품이 추가 되었습니다.')
                    }}>Add to Cart</button>
                </li>))}
            </ul>
        </>
    );
}