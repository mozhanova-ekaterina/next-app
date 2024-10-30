import Container from "@/components/shared/container";
import Title from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import Filters from "../components/shared/filters/index";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Hello Next" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="my-10">
        <Filters />
      </Container>
    </>
  );
}
