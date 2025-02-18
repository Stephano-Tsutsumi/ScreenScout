import Section from "./Section";
import Button from "./Button";

const DemoSection = () => {
  return (
    <Section crosses className="py-20">
      <div className="container">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem]">
          <h2 className="h2 mb-6">
            Book a demo to learn more about ScreenScout
          </h2>
          <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
            Looking forward to learning more about you & your company to evaluate whether ScreenScout is a good fit
          </p>
          <Button 
            href="https://calendly.com/stephano-tsutsumi/30min" 
            target="_blank"
            className="w-full max-w-[300px]"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default DemoSection; 