'use client';

import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { portfolioData } from '@data/portfolio';
import { Button } from 'antd';

export default function HeroSection() {
  return (
    <section className='relative py-18 sm:py-24 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center'>
          <div>
            <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur'>
              <span className='inline-block h-2 w-2 rounded-full bg-emerald-400' />
              Available for new opportunities
            </div>

            <h1 className='mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              {portfolioData.personal.name}
              <span className='block text-white/70'>{portfolioData.personal.title}</span>
            </h1>

            <p className='mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg'>
              {portfolioData.personal.summary}
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button
                type='primary'
                size='large'
                className='!h-12 !rounded-full !border-0 !bg-white !px-6 !text-[15px] !font-semibold !text-black'
                href='#contact'
              >
                Let&apos;s work together
              </Button>
              <Button
                size='large'
                className='!h-12 !rounded-full !border !border-white/15 !bg-transparent !px-6 !text-[15px] !font-semibold !text-white'
                href='#portfolio'
              >
                See selected work
              </Button>
            </div>

            <div className='mt-8 flex flex-wrap gap-3 text-sm text-white/70'>
              <a
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2'
                href={portfolioData.personal.github}
                target='_blank'
                rel='noreferrer'
              >
                <GithubOutlined />
                GitHub
              </a>
              <a
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2'
                href={`mailto:${portfolioData.personal.email}`}
              >
                <MailOutlined />
                {portfolioData.personal.email}
              </a>
              <a
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2'
                href={`tel:${portfolioData.personal.phone}`}
              >
                <PhoneOutlined />
                {portfolioData.personal.phone}
              </a>
            </div>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur'>
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
              Location
            </div>
            <div className='mt-2 text-sm leading-relaxed text-white/80'>{portfolioData.personal.location}</div>

            <div className='mt-8 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
              Focus
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              {[
                'Laravel',
                'Node.js',
                'Next.js',
                'Vue/Nuxt',
                'Redis',
                'CI/CD',
                'Docker',
                'Golang (microservices)',
              ].map((t) => (
                <span
                  key={t}
                  className='rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/70'
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
