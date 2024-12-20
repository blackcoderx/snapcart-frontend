import StoreProvider from "../redux/StoreProvider";
import "./globals.css";
import { SidebarDisplay } from "@/components/custom/sidebar";
import { Toaster } from "@/components/ui/toaster"


export const metadata = {
  title: "SnapCart",
  description: "The genz style of shopping",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
    </StoreProvider>

  );
}
