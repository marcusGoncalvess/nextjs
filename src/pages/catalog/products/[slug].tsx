import { useRouter } from "next/router";
import dymanic from "next/dynamic";
import { useCallback, useState } from "react";

const AddToCart = dymanic(() => import("../../../components/AddToCart"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
  // ssr = server-side-rendering
});

export default function Home() {
  const router = useRouter();
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = useCallback(() => {
    setAddToCart(true);
  }, []);

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      {addToCart && <AddToCart></AddToCart>}
    </div>
  );
}
