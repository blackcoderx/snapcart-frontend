
export const metadata = {
  title: "SnapCart",
  description: "The genz style of shopping",
};

export default function RootLayout({ children }) {
  return (
    <>

           <main className="layout">
           {children}
           </main>
    </>


  );
}
