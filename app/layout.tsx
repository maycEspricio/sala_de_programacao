import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Sala de Programação",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="h-full">
      <body>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}