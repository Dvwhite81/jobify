import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo.svg';
import landingImg from '@/assets/main.svg';

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={logoImg} alt="logo" />
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job <span className="text-primary">Tracking</span> App
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Button className="mt-4" asChild>
            <Link href={'/add-job'}>Get Started</Link>
          </Button>
        </div>
        <Image className="hidden lg:block" src={landingImg} alt="landing" />
      </section>
    </main>
  );
}
