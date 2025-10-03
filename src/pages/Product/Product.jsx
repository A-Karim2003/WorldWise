import PageMainContent from "../../components/PageMainContent";
import Image from "../../components/Image";

function Product() {
  return (
    <div>
      <PageMainContent>
        <Image src={"/public/images/img-1.jpg"} />
        <div className="content-container">
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis doloribus libero sunt expedita ratione iusto, magni,
            id sapiente sequi officiis et.
          </p>
        </div>
      </PageMainContent>
    </div>
  );
}

export default Product;
