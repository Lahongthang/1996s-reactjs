import { useMemo, useState } from "react";

export default function useStep<T>(steps: T[]): {
  activeStep: T;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
} {
  const [activeStep, setActiveStep] = useState<T>(steps[0]);

  const currStep: number = useMemo(() => {
    return steps.findIndex(step => step === activeStep);
  }, [activeStep, steps])

  const isFirstStep = currStep === 0;
  const isLastStep = currStep === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) setActiveStep(steps[currStep + 1]);
  }

  const goToPrevStep = () => {
    if (!isFirstStep) setActiveStep(steps[currStep - 1]);
  }

  return {
    activeStep,
    isFirstStep,
    isLastStep,
    goToNextStep,
    goToPrevStep,
  }
}
