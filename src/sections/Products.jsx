import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const productList = [
  {
    title: "Wear Resistant Steel",
    image: "/assets/ProductDataPage/quard.png",
    alt: "Quard Wear Resistant Plate",
    slug: "wear-resistant-steel",
    category: "Steel Products",
  },
  {
    title: "High Strength Steel",
    image: "/assets/ProductDataPage/quend.png",
    alt: "Quend High Strength Steel",
    slug: "high-strength-steel",
    category: "Steel Products",
  },
  {
    title: "Cladded Plate",
    image: "/assets/ProductDataPage/cladded.jpg",
    alt: "Cladded Plate",
    slug: "cladded-plate",
    category: "Steel Products",
  },
  {
    title: "Fabrication",
    image: "/assets/ProductDataPage/fabrication.jpg",
    alt: "Fabrication",
    slug: "fabrication",
    category: "Steel Products",
  },
];


const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-body-tertiary" id="products">
      <div className="container">
        <h5 className="text-center fw-bold mb-5">OUR PRODUCTS</h5>
        <div className="row g-4">
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="col-12 col-sm-6 col-lg-3 d-flex"
              data-aos="fade-up"
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/products/${product.slug}`, {
                  state: {
                    from: product.category.toLowerCase().replace(/\s+/g, "-"),
                  },
                })
              }
            >
              <div className="service-card w-100">
                <div className="service-card-img-wrapper">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body text-center">
                  <h5>{product.title}</h5>
                  {/* <span className="fw-semibold text-primary">View More</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
