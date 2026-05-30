import React, { useState } from "react";

const LazyImage = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {/* Skeleton placeholder */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, var(--bg-section) 25%, var(--border) 50%, var(--bg-section) 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className || ""} ${loaded ? "loaded" : ""}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
};

export default LazyImage;