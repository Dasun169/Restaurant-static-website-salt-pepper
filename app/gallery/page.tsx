"use client";

import { useState } from "react";
import { Grid3X3, Film, Image, ZoomIn } from "lucide-react";

/* =======================
   Gallery Data
======================= */
const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    category: "food",
    title: "Signature Dish Presentation",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    category: "food",
    title: "Artisanal Desserts",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
    category: "food",
    title: "Fresh Ingredients",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    category: "interior",
    title: "Main Dining Area",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
    category: "interior",
    title: "Elegant Bar",
  },
  {
    id: 6,
    type: "video",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    category: "experience",
    title: "Chef in Action",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    category: "experience",
    title: "Wine Tasting",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
    category: "events",
    title: "Private Dining",
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop",
    category: "interior",
    title: "Ambient Lighting",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    category: "food",
    title: "Gourmet Burgers",
  },
  {
    id: 11,
    type: "image",
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=600&fit=crop",
    category: "experience",
    title: "Table Setting",
  },
  {
    id: 12,
    type: "video",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    category: "events",
    title: "Special Events",
  },
];

const categories = [
  { id: "all", name: "All", icon: Grid3X3 },
  { id: "food", name: "Food", icon: Image },
  { id: "interior", name: "Interior", icon: Grid3X3 },
  { id: "experience", name: "Experience", icon: Film },
  { id: "events", name: "Events", icon: ZoomIn },
];

/* =======================
   Component
======================= */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const selectedItem = selectedImage
    ? galleryItems.find((item) => item.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: selectedItem?.src
              ? `url(${selectedItem.src})`
              : "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6">
              Our <span className="text-[#D4AF37]">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A visual journey through the Salt & Pepper experience
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-8 bg-[#0A0A0A] border-y border-gray-800 sticky top-20 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#D4AF37] text-black"
                    : "bg-black text-white hover:bg-gray-900 border border-gray-800"
                }`}
              >
                <category.icon size={20} />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        {item.type === "video" ? (
                          <Film className="text-[#D4AF37]" size={20} />
                        ) : (
                          <Image className="text-[#D4AF37]" size={20} />
                        )}
                        <span className="text-[#D4AF37] text-sm uppercase">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <div
              className="w-full h-full bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${selectedItem.src})`,
                minHeight: "60vh",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-2xl font-serif text-white mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-gray-300 capitalize">
                {selectedItem.category} Collection
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
