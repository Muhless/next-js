import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const [isLogin, setLogin] = useState(false);
    const {push} = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/products/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);
    return (
        <h1>Products Page</h1>
    )
}
export default ProductsPage;