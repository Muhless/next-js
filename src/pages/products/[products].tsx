import { useRouter } from "next/router";

const DetailProductsPage = () => {
  const {query} = useRouter();
  // console.log(router);

  return (
    <div>
      <h1>Detail Products</h1>
      <p>product : {query.products} </p>
    </div>
  );
};
export default DetailProductsPage;
