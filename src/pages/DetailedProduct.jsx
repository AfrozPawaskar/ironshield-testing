import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import productDetails from "../data/productDetails";
import productData from "../data/productData";
import "../styles/serviceDetail.css";
import FabricationServices from "./FabricationServices";

const DetailedProduct = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const detail = productDetails[slug];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!detail) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const matchedCategory =
    productData.find((category) =>
      category.items.some((item) => item.slug === slug)
    ) || productData[0];

  const allItems = matchedCategory?.items || [];

  return (
    <div className="container-fluid py-5">
      <Helmet>
        <title>
          {detail.title
            ? `${detail.title} | IronShield Products`
            : "IronShield Products"}
        </title>
        <meta
          name="description"
          content={
            detail.metaDescription || detail.title || "IronShield Products"
          }
        />
      </Helmet>

      <div className="row" style={{ height: "calc(100vh - 120px)" }}>
        {/* Sidebar (Sticky) */}
        <div className="col-lg-3 mb-4">
          <div
            className="sidebar-wrapper p-3 shadow-sm"
            style={{ position: "sticky", top: "100px" }}
          >
            <div className="inner-border p-3">
              <h6 className="mb-3 text-primary text-uppercase small fw-bold border-bottom pb-2">
                Other Products
              </h6>
              <div className="d-flex flex-column gap-2">
                {allItems.map((item) => (
                  <button
                    key={item.slug}
                    className={`btn w-100 text-start small rounded ${
                      item.slug === slug
                        ? "btn-dark text-white"
                        : "btn-outline-dark"
                    }`}
                    disabled={item.slug === slug}
                    onClick={() =>
                      navigate(`/products/${item.slug}`, {
                        state: {
                          from: matchedCategory.category
                            .toLowerCase()
                            .replace(/\s+/g, "-"),
                        },
                      })
                    }
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Main Content */}
        <div
          className="col-lg-9"
          style={{ maxHeight: "100%", overflowY: "auto" }}
        >
          <div className="px-3">
            {(detail.title || detail.image) && (
              <div className="d-flex flex-column flex-lg-row align-items-center gap-4 mb-4">
                {detail.title && (
                  <div className="flex-grow-1">
                    <h1 className="fw-bold mb-0">{detail.title}</h1>
                  </div>
                )}
                {detail.image && (
                  <div style={{ maxWidth: "400px", width: "100%" }}>
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="img-fluid rounded shadow-sm"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        aspectRatio: "1 / 1",
                      }}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {detail.description && (
              <div
                className="service-detail-content text-justify"
                dangerouslySetInnerHTML={{ __html: detail.description }}
              />
            )}

            {/* Highlights */}
            {detail.highlights?.length > 0 && (
              <>
                <h5 className="mt-5 mb-3">Highlights</h5>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  {detail.highlights.map((point, i) => (
                    <div className="col" key={i}>
                      <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                          <h6 className="fw-semibold mb-1">{point.title}</h6>
                          <p className="mb-0">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ✅ Fabrication Services Only */}
            {slug === "fabrication" && (
              <div className="row">
                <div className="col-12">
                  {/* <FabricationServices /> */}
                  <FabricationServices disableAos={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
