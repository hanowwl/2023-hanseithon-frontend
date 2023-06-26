import { Children, isValidElement, useEffect } from "react";

import { ConsistentTuple } from "./types";

export interface FunnelProps<Steps extends ConsistentTuple<string>> {
  step: Steps[number];
  steps: Steps;
  children: React.ReactElement<StepProps<Steps>> | React.ReactElement<StepProps<Steps>>[];
}

export const Funnel = <Steps extends ConsistentTuple<string>>({
  step,
  steps,
  children,
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((child) =>
      steps.includes((child.props as StepProps<Steps>).name)
    ) as React.ReactElement<StepProps<Steps>>[];

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep}</>;
};

export interface StepProps<Steps extends ConsistentTuple<string>> {
  name: Steps[number];
  children?: React.ReactNode;
  onEnter?: () => void;
}

export const Step = <Steps extends ConsistentTuple<string>>({
  children,
  onEnter,
}: StepProps<Steps>) => {
  useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
};
