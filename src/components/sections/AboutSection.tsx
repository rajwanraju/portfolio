'use client';

import { portfolioData } from '@data/portfolio';
import { Button } from 'antd';

export default function AboutSection() {
  return (
    <section
      className='section-padding'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-2'>
          <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'>
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
              Career objective
            </div>
            <p className='mt-4 text-sm leading-relaxed text-white/80 sm:text-base'>
              {portfolioData.personal.summary}
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button
                size='large'
                className='!h-12 !rounded-full !border !border-white/15 !bg-transparent !px-6 !text-[15px] !font-semibold !text-white'
                href='#skills'
              >
                View skills
              </Button>
              <Button
                size='large'
                className='!h-12 !rounded-full !border !border-white/15 !bg-transparent !px-6 !text-[15px] !font-semibold !text-white'
                href='#experience'
              >
                Work experience
              </Button>
            </div>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'>
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
              Interests
            </div>
            <ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/80 sm:text-base'>
              {portfolioData.personal.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div className='mt-8 rounded-xl border border-white/10 bg-black/20 p-4'>
              <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Now</div>
              <div className='mt-2 text-sm text-white/80'>
                Senior Software Engineer at <span className='font-semibold text-white'>Silicon Orchard LTD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
