import React, { useEffect, useState } from "react";

import { setInstanceAccessToken } from "src/apis";
import { Footer, Navbar } from "src/components/common";
import { NAVBAR_MENU, STAFF_LIST } from "src/constants";
import { useProfileQuery, useSilentMutation } from "src/hooks";
import { useAuthStore } from "src/stores";

export interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { accessToken, setAccessToken } = useAuthStore();
  const silentMutation = useSilentMutation();
  const { data: profile, refetch: getProfile } = useProfileQuery({ enabled: false });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initialize = async () => {
      if (accessToken) {
        setInstanceAccessToken(accessToken);
        await getProfile();
      } else {
        silentMutation.mutate(undefined, {
          onSuccess: ({ result: { accessToken } }) => {
            setAccessToken(accessToken);
            setInstanceAccessToken(accessToken);
          },
        });
      }

      setIsLoading(false);
    };

    initialize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <>
      <Navbar
        menu={NAVBAR_MENU}
        actions={[
          {
            size: "small",
            text: "한세톤 참여하기",
            href: profile ? "/hanseithon" : "/auth/register",
          },
        ]}
      />

      {!isLoading && children}

      <Footer staffs={STAFF_LIST} />
    </>
  );
};
