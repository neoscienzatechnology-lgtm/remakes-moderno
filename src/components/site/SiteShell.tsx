import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CountdownBanner } from "./CountdownBanner";
import { ExitIntentDialog } from "./ExitIntentDialog";
import { PageLoader } from "./PageLoader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <CountdownBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFab />
      <ExitIntentDialog />
    </div>
  );
}
