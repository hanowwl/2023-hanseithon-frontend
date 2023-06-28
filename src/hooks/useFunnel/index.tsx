import { useCallback, useMemo } from "react";

import { useRouter } from "next/router";

import { Funnel, FunnelProps, Step, StepProps } from "./Funnel";
import { ConsistentTuple } from "./types";
import { useQueryParams } from "../useQueryParams";

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
  const router = useRouter();

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RootFunnel(props: RootFunnelProps<Steps>) {
          const query = useQueryParams<{ step: Steps[number] }>();
          const step = query.step ?? steps[0];

          return <Funnel steps={steps} step={step} {...props} />;
        },
        { Step }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setStep = useCallback(
    (step: Steps[number]) => {
      const url = "?" + new URLSearchParams({ ...router.query, step }).toString();
      router.replace(url, undefined, { shallow: true });
    },
    [router]
  );

  return [FunnelComponent, setStep];
};
