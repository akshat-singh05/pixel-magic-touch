
import { useState } from "react";
import BrandKitCard from "./BrandKitCard";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const BrandKitsSection = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const brandKits = [
    { id: "1", name: "ECorp", iconColor: "teal" as const },
    { id: "2", name: "ICorp", iconColor: "orange" as const },
    { id: "3", name: "The Agency", iconColor: "red" as const },
  ];

  const filteredBrands = brandKits.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectionChange = (id: string, selected: boolean) => {
    setSelectedBrands(prev =>
      selected
        ? [...prev, id]
        : prev.filter(brandId => brandId !== id)
    );
  };

  return (
    <section id="brand-kits" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Brand Kits
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Manage your brand identities with style. Create, organize, and access your brand kits seamlessly.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/60" />
            <Input
              placeholder="Search brand kits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-white/20 bg-white/5 backdrop-blur-sm"
            />
          </div>
          
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            <Plus className="w-5 h-5 mr-2" />
            Add Brand Kit
          </Button>
        </div>

        {/* Brand kits grid */}
        <div className="space-y-4">
          {filteredBrands.map((brand) => (
            <BrandKitCard
              key={brand.id}
              id={brand.id}
              name={brand.name}
              iconColor={brand.iconColor}
              isSelected={selectedBrands.includes(brand.id)}
              onSelectionChange={handleSelectionChange}
            />
          ))}
        </div>

        {/* Selection summary */}
        {selectedBrands.length > 0 && (
          <div className="mt-8 glass-card p-4 rounded-xl">
            <p className="text-sm text-foreground/80">
              {selectedBrands.length} brand kit{selectedBrands.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandKitsSection;
