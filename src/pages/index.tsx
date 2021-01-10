import { GetServerSideProps } from "next";
import { Title } from "@/styles/pages/Home";
import SEO from "@/components/SEO"

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  // async function handleLib() {
  //   const defaultValue = (await import('lib')).default;
  //   const { notDefault } = (await import('lib')).default;
  // }
  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <div>
      <SEO title="Home Page" shouldExcludeTitleSuffix />

      <Title>Hello world</Title>

      <section>
        <Title>Products</Title>
        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommended`
  );
  const recommendedProducts = await response.json();
  return {
    props: {
      recommendedProducts,
    },
  };
};
