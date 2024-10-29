// src/app/layout.js
import Header from './components/Header/Header';
import './globals.css'

export const metadata = {
  title: 'Autarxia',
  description: 'Regional • Umweltfreundlich • Autark • Zuverlässig',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
       <body>
        <Header/>
        {children}
      
        </body>
    </html>
  );
}