import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { setInstanceAccessToken } from "src/apis";
import { Footer, Navbar, SuspenseFallback } from "src/components/common";
import { NAVBAR_MENU, NAVBAR_MENU_IN_TEAM_ROUTES, STAFF_LIST } from "src/constants";
import { useProfileQuery, useSilentMutation } from "src/hooks";
import { useAuthStore } from "src/stores";

import { Container } from "../Container";

export interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { initialize, accessToken, setAccessToken } = useAuthStore();
  const silentMutation = useSilentMutation();
  const { data: profile, refetch: getProfile } = useProfileQuery({ enabled: false });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const isTeamRoutes = useMemo(() => router.pathname.includes("teams"), [router.pathname]);

  useEffect(() => {
    const initializeApp = async () => {
      if (initialize && accessToken) {
        setInstanceAccessToken(accessToken);
        await getProfile();
      } else {
        silentMutation.mutate(undefined, {
          onSuccess: ({ result: { accessToken } }) => {
            setAccessToken(accessToken);
            setInstanceAccessToken(accessToken);
            getProfile();
          },
        });
      }

      setIsLoading(false);
    };

    initializeApp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <>
      <Navbar
        menu={isTeamRoutes ? NAVBAR_MENU_IN_TEAM_ROUTES : NAVBAR_MENU}
        actions={[
          isTeamRoutes
            ? {
                size: "small",
                text: `${profile?.name || ""}님, 환영해요`,
                onClick: () => toast("🎉 제 6회 한세톤 기대해주세요!"),
              }
            : {
                size: "small",
                text: "한세톤 참여하기",
                href: profile ? "/teams" : "/auth/register",
              },
        ]}
      />

      {isLoading ? (
        <Container style={{ height: "calc(100vh - 9rem)" }}>
          <SuspenseFallback />
        </Container>
      ) : (
        children
      )}

      <Footer staffs={STAFF_LIST} />
    </>
  );
};
