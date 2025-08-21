import { AntdRegistry } from '@ant-design/nextjs-registry';
import AntProvider from '@components/common/AntProvider';
import StoreProvider from '@components/common/StoreProvider';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// next.js google fonts Inter & Poppins
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: false,
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    default: 'Template',
    template: '%s ― Template',
  },
  description:
    'A modern, production-ready Next.js 15+ template for building scalable web applications. Features React for UI components, Next.js for server-side rendering and routing, Tailwind CSS for utility-first styling, Ant Design for enterprise-grade components, and Redux Toolkit for robust state management.',
  authors: { name: 'Silicon Orchard Ltd.', url: 'https://siliconorchard.com' },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <AntdRegistry>
          <StoreProvider>
            <AntProvider>{children}</AntProvider>
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
