import PageMainContent from "../../components/PageMainContent";

import Image from "../../components/Image";

function Pricing() {
  return (
    <div>
      <PageMainContent>
        <div className="content-container">
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <Image src={"/public/images/img-2.jpg"} />
      </PageMainContent>
    </div>
  );
}

export default Pricing;
