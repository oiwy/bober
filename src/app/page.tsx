import Widget from "@/widgets";

const Home = () => {
  return (
    <>
      <section>
        <div className="container py-4 flex flex-col gap-3">
          <Widget.Carousel />
          <Widget.HeadphoneWidget />
        </div>
      </section>
    </>
  );
};

export default Home;
