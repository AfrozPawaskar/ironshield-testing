import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import serviceDetails from "../data/serviceDetails";
import servicesData from "../data/servicesData";
import "../styles/serviceDetail.css";
import "../styles/sideBar.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [showOtherCategories, setShowOtherCategories] = useState(false);

  const detail = serviceDetails[slug];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!detail) {
    return (
      <div className="container py-5">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  const fromSection = location.state?.from;
  const matchedCategory =
    servicesData.find(
      (cat) => cat.category.toLowerCase().replace(/\s+/g, "-") === fromSection
    ) ||
    servicesData.find((category) =>
      category.items.some((item) => item.slug === slug)
    );

  const isFabrication = location.pathname.includes("/products/fabrication");

  // Excluded services for fabrication view
  const excludedServiceNames = [
    "Quard - Wear Resistant Plates",
    "Cladded Plates",
    "High Strength Steel",
  ];

  const sameCategoryItems = matchedCategory?.items.filter((item) => {
    return isFabrication
      ? !excludedServiceNames.includes(item.name)
      : true;
  }) || [];

  const handleCategorySwitch = (category) => {
    const firstItem = category.items.find((item) =>
      isFabrication ? !excludedServiceNames.includes(item.name) : true
    );

    if (firstItem) {
      navigate(
        isFabrication
          ? `/products/fabrication/${firstItem.slug}`
          : `/services/${firstItem.slug}`,
        {
          state: {
            from: category.category.toLowerCase().replace(/\s+/g, "-"),
          },
        }
      );
      setShowOtherCategories(false);
    }
  };

  const handleSelectChange = (e) => {
    const selectedSlug = e.target.value;
    const targetPath = isFabrication
      ? `/products/fabrication/${selectedSlug}`
      : `/services/${selectedSlug}`;

    navigate(targetPath, {
      state: {
        from: matchedCategory.category.toLowerCase().replace(/\s+/g, "-"),
      },
    });
  };

  return (
    <div className="container-fluid py-5">
      <Helmet>
        <title>{detail.title} | IronShield Services</title>
        <meta
          name="description"
          content={detail.metaDescription || detail.title}
        />
      </Helmet>

      <div className="row" style={{ height: "calc(100vh - 120px)" }}>
        {/* Sidebar */}
        <div className="col-lg-3 mb-4">
          <div
            className="sidebar-wrapper p-3 shadow-sm"
            style={{ position: "sticky", top: "100px" }}
          >
            <div className="inner-border p-3">
              <h6 className="mb-3 text-primary text-uppercase small fw-bold border-bottom pb-2">
                {matchedCategory?.category}
              </h6>

              {/* Dropdown */}
              <div className="mb-4">
                <label className="form-label small fw-semibold text-dark mb-2">
                  Select a {isFabrication ? "product" : "service"}
                </label>
                <select
                  className="form-select custom-select-ui"
                  value={slug}
                  onChange={handleSelectChange}
                >
                  {sameCategoryItems.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Other Categories Toggle */}
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2 border rounded mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => setShowOtherCategories(!showOtherCategories)}
              >
                <span className="text-dark fw-semibold small mb-0">
                  Explore Other Categories
                </span>
                <span
                  className="text-dark"
                  style={{
                    fontSize: "1.2rem",
                    transform: showOtherCategories ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s ease",
                    fontWeight: 500,
                  }}
                >
                  +
                </span>
              </div>

              {showOtherCategories && (
                <div className="d-flex flex-column gap-2 mt-2">
                  {servicesData
                    .filter((cat) => cat.category !== matchedCategory?.category)
                    .map((cat) => (
                      <button
                        key={cat.category}
                        className="btn btn-outline-dark w-100 text-start small rounded"
                        onClick={() => handleCategorySwitch(cat)}
                      >
                        {cat.category}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="col-lg-9"
          style={{ maxHeight: "100%", overflowY: "auto" }}
        >
          <div className="px-3">
            {/* Hero */}
            {(detail.title || detail.image) && (
              <div className="d-flex flex-column flex-lg-row align-items-center gap-4 mb-4">
                <div className="flex-grow-1">
                  <h1 className="fw-bold mb-0">{detail.title}</h1>
                </div>
                {detail.image && (
                  <div style={{ maxWidth: "400px", width: "100%" }}>
                    <img
                      src={`/${detail.image}`}
                      alt={detail.title}
                      className="img-fluid rounded shadow-sm"
                      style={{
                        objectFit: "contain",
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
            <div
              className="service-detail-content text-justify"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
