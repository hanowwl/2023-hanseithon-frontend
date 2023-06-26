import { useCallback, useMemo, useState } from "react";

import { Funnel, FunnelProps, Step, StepProps } from "./Funnel";
import { ConsistentTuple } from "./types";

export type RootFunnelProps<Steps extends ConsistentTuple<string>> = Omit<
  FunnelProps<Steps>,
  "step" | "steps"
>;

export type FunnelComponent<Steps extends ConsistentTuple<string>> = ((
  props: RootFunnelProps<Steps>
) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element;
};

export const useFunnel = <Steps extends ConsistentTuple<string>>(
  steps: Steps
): [FunnelComponent<Steps>, (step: Steps[number]) => void] => {
  const [step, _setStep] = useState<Steps[number]>(steps[0]);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RootFunnel(props: RootFunnelProps<Steps>) {
          return <Funnel steps={steps} step={step} {...props} />;
        },
        { Step }
      ),
    [step, steps]
  );

  const setStep = useCallback((step: Steps[number]) => {
    _setStep(step);
  }, []);

  return [FunnelComponent, setStep];
};
