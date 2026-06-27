import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
// const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // اختار الأوزان اللي هتستخدمها
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sayed Mo | Front-End Developer",
  description:
    "Front-End Developer | MERN STACK Developer | Javascript Developer | Next.JS Developer | Node.JS Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className +
          ` bg-[url('/background.jpg')] bg-white bg-repeat-round`
        }
      >
        {children}
        <Analytics />
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdn0ohy0x7");
          `}
        </Script>
      </body>
    </html>
  );
}
