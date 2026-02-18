import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image = "./assets/woman_walking.jpg"
          alt="Woman walking near blue wall in Brooklyn"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias."
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image="./assets/partpeople.png"
          alt="Three well-dressed people at night event"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias."
        />
      </main>

      <Footer />
    </>
  );
}
