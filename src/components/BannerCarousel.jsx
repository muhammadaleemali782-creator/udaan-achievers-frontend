import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BannerCarousel({ banners }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!banners || banners.length < 2) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="relative rounded-xl overflow-hidden aspect-[16/6] md:aspect-[16/4]">
          {banners.map((b, i) => (
            <Link
              key={b._id}
              to={b.link || "/courses"}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
            >
              <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
              {b.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="font-body text-white text-sm md:text-base font-medium">{b.title}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
        {banners.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-3">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-1.5 rounded-full transition-all"
                style={{ width: i === active ? "20px" : "6px", background: i === active ? "#0B1F4D" : "#E8ECF3" }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
