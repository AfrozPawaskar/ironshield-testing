import React from "react";

const TwoColumnImageSection = ({
  title,
  description = [],
  images = [],
  labels = [],
  imageLeft = false,
  customRightComponent = null,
  customLeftComponent = null,
  customRadius = [],
}) => {
  return (
    <div className={`row align-items-center gx-4 gy-4 ${imageLeft ? "" : "flex-lg-row-reverse"}`}>
      {/* Left Column */}
      <div className="col-lg-6" data-aos="fade-up">
        {customLeftComponent ? (
          customLeftComponent
        ) : (
          <div className="row g-2">
            {[0, 1].map((col) => (
              <div className="col-6 d-flex flex-column gap-2" key={col}>
                {[0, 1].map((row) => {
                  const idx = col * 2 + row;
                  return (
                    <div
                      key={idx}
                      className="about-image-card position-relative overflow-hidden"
                      style={{
                        borderRadius: customRadius[idx] || "0px",
                        height: "200px",
                      }}
                    >
                      <img
                        src={images[idx]}
                        alt={labels[idx] || `Image ${idx + 1}`}
                        className={`w-100 h-100 ${labels.length ? "image-hover-effect" : ""}`}
                        style={{ objectFit: "cover", borderRadius: 0 }}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                      {labels.length > 0 && (
                        <div className="image-hover-text">
                          <span className="machine-name">{labels[idx]}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="col-lg-6" data-aos="fade-up">
        {customRightComponent ? (
          customRightComponent
        ) : (
          <>
            {title && <h2 className="fw-bold mb-4 text-center">{title}</h2>}
            {description.map((para, idx) => (
              <p
                key={idx}
                className="text-muted"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};


export default TwoColumnImageSection;
