import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <span className="inline-block text-2xl md:text-3xl opacity-50">
              ⚡
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Ready to Join Ghana's Premier
            <span className="hidden md:inline">
              <br />
            </span>
            Engagement Platform?
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 lg:mb-12">
            Whether you're a brand looking to grow or a user wanting to earn,
            <span className="hidden md:inline">
              <br />
            </span>
            Trukonnect has you covered.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={'https://trukonnect.vercel.app/sign-up'}
              className="w-full md:w-auto md:min-w-[200px] text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent)] transition-colors duration-200 font-medium text-center"
            >
              Create Account →
            </a>
            <a
              href="https://trukonnect.vercel.app/contact"
              className="w-full md:w-auto md:min-w-[200px] text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-2xl border-2 border-white/20 hover:bg-white/10 transition-colors duration-200 font-medium text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Bottom decorative icon */}
          <div className="mt-12 md:mt-16">
            <span className="inline-block text-2xl md:text-3xl opacity-50">
              ⚡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
