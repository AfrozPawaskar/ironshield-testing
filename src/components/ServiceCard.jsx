import React from "react";
import { Link } from "react-router-dom";

const images = import.meta.glob("../assets/services/*.jpg", { eager: true });

const ServiceCard = ({
  title,
  image,
  items = [],
  exclude = [],
  basePath = "/services",
  disableAos = false,
}) => {
  const resolvedImage = Object.entries(images).find(([key]) =>
    key.includes(image)
  )?.[1]?.default;

  // Filter items by exclusion keywords if provided
  const filteredItems = exclude.length
    ? items.filter(
        ({ name }) =>
          !exclude.some((keyword) =>
            name.toLowerCase().includes(keyword.toLowerCase())
          )
      )
    : items;

  return (
    <div
      className="service-card"
      {...(!disableAos ? { "data-aos": "fade-up" } : {})}
    >
      <div className="service-card-img-wrapper">
        <img
          src={resolvedImage}
          alt={title}
          loading="lazy"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <div className="service-card-body">
        <h5 className="text-center">{title}</h5>
        <ul>
          {filteredItems.map(({ name, slug }) => (
            <li key={slug}>
              <Link
                to={`${basePath}/${slug}`}
                state={{ from: title.toLowerCase().replace(/\s+/g, "-") }}
              >
                - {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
