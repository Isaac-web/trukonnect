import React from 'react';

const FeatureCard = ({
  icon,
  title,
  description,
  iconBgColor,
}: {
  icon: string;
  title: string;
  description: string;
  iconBgColor: string;
}) => {
  return (
    <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8">
      <div
        className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center text-3xl mb-6`}
      >
        {icon}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="w-8 h-1 bg-blue-500"></div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const VerifiedForTrustSection = () => {
  const features = [
    {
      icon: '📸',
      title: 'Instagram Integration',
      description:
        'We connect directly with Instagram to verify follows, likes, and comments in real-time.',
      iconBgColor: 'bg-purple-950/50',
    },
    {
      icon: '🛡️',
      title: 'Fraud Detection',
      description:
        'Advanced algorithms to detect and prevent fake accounts, bots and fraudulent engagement attempts.',
      iconBgColor: 'bg-red-950/50',
    },
    {
      icon: '✓',
      title: 'Manual Review',
      description:
        'Our team conducts spot checks to ensure quality and authenticity of engagements.',
      iconBgColor: 'bg-green-950/50',
    },
  ];

  return (
    <section>
      <div className="container max-w-6xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Verified for Trust</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-white/80">
              Our advanced verification system guarantees that every engagement
              is real, secure, and from genuine users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgColor={feature.iconBgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedForTrustSection;
