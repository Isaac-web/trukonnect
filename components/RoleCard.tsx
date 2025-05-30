import React from 'react';

interface RoleCardProps {
  role: 'regular' | 'brand';
  title: string;
  subtitle: string;
  features: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  subtitle,
  features,
  role,
}) => {
  return (
    <div
      className={`relative w-full max-w-[300px] md:max-w-xs backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-white/10 ${
        role === 'brand' ? 'bg-blue-500/50' : 'bg-amber-500/60'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{title}</h2>
      <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8">
        {subtitle}
      </p>

      <div className="space-y-3 md:space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-1">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-500"></div>
            </div>
            <p className="text-sm md:text-base text-white/90">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleCard;
