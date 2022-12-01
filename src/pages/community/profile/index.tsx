import { getSession, useSession } from "next-auth/react";
import { useLoaded } from "../../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";
import Loader from "../../../components/shared-ui/loader";

export default function Index() {
  const { data: session } = useSession();

  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    if (session) {
      const { user } = session;
      return isMobile ? (
        <ProfileMobile user={user} />
      ) : (
        <ProfileDesktop user={user} />
      );
    } else {
      return <>You are not authorized to visit this page</>;
    }
  } else {
    return null
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/community",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
