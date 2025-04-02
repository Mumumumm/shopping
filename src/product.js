export default function Product() {

    return (
        <>
            <ul>
                <li>Product A - 100원
                    <button type="button" onClick={(e) => { alert('상품이 추가되었습니다.') }}>Add to Cart</button>
                </li>

                <li>Product B - 200원
                    <button type="button" onClick={(e) => { alert('상품이 추가되었습니다.') }}>Add to Cart</button>
                </li>

                <li>Product C - 300원
                    <button type="button" onClick={(e) => { alert('상품이 추가되었습니다.') }}>Add to Cart</button>
                </li>
            </ul>
        </>
    );
}