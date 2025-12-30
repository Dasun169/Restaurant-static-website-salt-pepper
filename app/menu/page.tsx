"use client";

import { useState } from "react";
import { Filter, Clock, Users, ChefHat, Thermometer, Leaf } from "lucide-react";

// Menu categories
const categories = [
  { id: "all", name: "All Dishes", icon: ChefHat },
  { id: "starters", name: "Starters", icon: Leaf },
  { id: "mains", name: "Main Courses", icon: Thermometer },
  { id: "desserts", name: "Desserts", icon: Clock },
  { id: "drinks", name: "Beverages", icon: Users },
];

// Menu items data
const menuItems = [
  // Starters
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle and mozzarella",
    price: "LKR 2,400",
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: true,
  },
  {
    id: 2,
    name: "Lobster Bisque",
    description: "Creamy lobster soup with cognac and fresh herbs",
    price: "LKR 3,200",
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: false,
  },
  {
    id: 3,
    name: "Burrata Salad",
    description: "Fresh burrata with heirloom tomatoes and basil oil",
    price: "LKR 2,800",
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    popular: false,
    vegetarian: true,
  },

  // Main Courses
  {
    id: 4,
    name: "Wagyu Beef Tenderloin",
    description: "Australian wagyu with truffle mashed potatoes",
    price: "LKR 8,500",
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: false,
  },
  {
    id: 5,
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon with lemon butter sauce and asparagus",
    price: "LKR 6,800",
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: false,
  },
  {
    id: 6,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice with seasonal wild mushrooms",
    price: "LKR 4,900",
    category: "mains",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    popular: false,
    vegetarian: true,
  },

  // Desserts
  {
    id: 7,
    name: "Chocolate Soufflé",
    description: "Dark chocolate soufflé with vanilla bean ice cream",
    price: "LKR 2,900",
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: true,
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Vanilla bean custard with caramelized sugar",
    price: "LKR 2,500",
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    popular: false,
    vegetarian: true,
  },

  // Beverages
  {
    id: 9,
    name: "Signature Cocktails",
    description: "Our mixologist's special creations",
    price: "LKR 1,800 - 2,500",
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: true,
  },
  {
    id: 10,
    name: "Wine Selection",
    description: "Curated international wine collection",
    price: "LKR 3,500 - 25,000",
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    popular: true,
    vegetarian: true,
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory)
      return false;
    if (vegetarianOnly && !item.vegetarian) return false;
    return true;
  });

  return (
    <div className="min-h-screen pt-20 lg:pt-32">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-serif text-white mb-6">
              Our <span className="text-[#D4AF37]">Menu</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A culinary journey through carefully crafted dishes using the
              finest ingredients
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <ChefHat size={20} />
                <span>Chef's Seasonal Specials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf size={20} />
                <span>Vegetarian Options Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-12 bg-[#0A0A0A] border-y border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
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

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setVegetarianOnly(!vegetarianOnly)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  vegetarianOnly
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-gray-900 border border-gray-800"
                }`}
              >
                <Leaf size={20} />
                <span>Vegetarian Only</span>
              </button>

              <button className="flex items-center space-x-3 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 border border-gray-800 transition-colors">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <div
                      className="h-48 lg:h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </div>
                    )}
                    {item.vegetarian && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Vegetarian
                      </div>
                    )}
                  </div>

                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-serif text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                      <div className="text-2xl font-serif text-[#D4AF37] whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="text-sm text-gray-500">
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </div>
                      <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl font-serif text-[#D4AF37] mb-4">
                No items found
              </div>
              <p className="text-gray-400">Try changing your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Menu Notes */}
      <section className="py-12 bg-[#0A0A0A] border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-[#D4AF37] text-3xl font-serif mb-3">*</div>
                <h4 className="text-white font-medium mb-2">
                  Allergen Information
                </h4>
                <p className="text-gray-400 text-sm">
                  Please inform your server of any food allergies
                </p>
              </div>
              <div className="p-6">
                <div className="text-[#D4AF37] text-3xl font-serif mb-3">V</div>
                <h4 className="text-white font-medium mb-2">
                  Vegetarian Options
                </h4>
                <p className="text-gray-400 text-sm">
                  Marked items are suitable for vegetarians
                </p>
              </div>
              <div className="p-6">
                <div className="text-[#D4AF37] text-3xl font-serif mb-3">
                  15%
                </div>
                <h4 className="text-white font-medium mb-2">Service Charge</h4>
                <p className="text-gray-400 text-sm">
                  A 15% service charge applies to all bills
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-sm">
                Prices are subject to change. Menu items may vary based on
                seasonal availability. For special dietary requirements or
                custom menus for events, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
