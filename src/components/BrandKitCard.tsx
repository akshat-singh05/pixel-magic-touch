
import { useState } from "react";
import { MoreHorizontal, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface BrandKitCardProps {
  id: string;
  name: string;
  iconColor: "teal" | "orange" | "red";
  isSelected?: boolean;
  onSelectionChange?: (id: string, selected: boolean) => void;
}

const BrandKitCard = ({ 
  id, 
  name, 
  iconColor, 
  isSelected = false, 
  onSelectionChange 
}: BrandKitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconColorClasses = {
    teal: "brand-icon-teal",
    orange: "brand-icon-orange", 
    red: "brand-icon-red"
  };

  const handleSelectionChange = (checked: boolean) => {
    onSelectionChange?.(id, checked);
  };

  return (
    <div
      className={`gradient-border p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
        isSelected ? "ring-2 ring-purple-400" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        {/* Left side with checkbox and brand info */}
        <div className="flex items-center space-x-4">
          <Checkbox
            checked={isSelected}
            onCheckedChange={handleSelectionChange}
            className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
          />
          
          <div className="flex items-center space-x-3">
            {/* Brand icon */}
            <div className={`w-10 h-10 rounded-full ${iconColorClasses[iconColor]} flex items-center justify-center shadow-lg`}>
              <Cloud className="w-5 h-5 text-white" />
            </div>
            
            {/* Brand name */}
            <span className="text-lg font-semibold text-foreground">
              {name}
            </span>
          </div>
        </div>

        {/* Right side with settings button */}
        <Button
          variant="ghost"
          size="icon"
          className={`transition-all duration-200 ${
            isHovered ? "opacity-100" : "opacity-60"
          } hover:bg-white/10`}
        >
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default BrandKitCard;
