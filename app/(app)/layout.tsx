import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const hdrs = await headers();
  const { companyName, logo, logoDark } = await getAppConfig(hdrs);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${companyName} Logo`} className="block size-6 dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDark ?? logo}
          alt={`${companyName} Logo`}
          className="hidden size-6 dark:block"
        />
        <span className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
          © 2025 LiveTechSupport
        </span>
      </header>

      {children}
    </>
  );
}
