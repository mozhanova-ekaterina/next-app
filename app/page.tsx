import Container from "@/components/shared/container";
import Title from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar/index";
import Filters from "../components/shared/filters/index";
import Products from "@/components/shared/products";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Hello Next" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="my-10 grid grid-cols-[1fr_3fr]">
        <Filters />
        <Products/>
      </Container>
    </>
  );
}
