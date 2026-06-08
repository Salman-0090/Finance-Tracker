

import "./globals.css";


export const metadata = {
  title: "Finanace Tracker",
  description: "this is to track finance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body className="bg-blue-200">
        {children}
      </body>
    </html>
  );
}
