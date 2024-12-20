import { SidebarDisplay } from "@/components/custom/sidebar";

export const metadata = {
  title: "SnapCart",
  description: "The genz style of shopping",
};

export default function RootLayout({ children }) {
  return (
    <>
            <SidebarDisplay />

           <main className="layout">
           {children}
           </main>
    </>


  );
}
