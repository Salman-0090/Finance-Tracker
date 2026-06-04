
import Navigation from "./_components.js/Navigation";
import "./globals.css";



export const metadata = {
  title: "Finanace Tracker",
  description: "this is to track finance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
