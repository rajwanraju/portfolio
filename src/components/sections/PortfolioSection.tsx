'use client';

import { portfolioData } from '@data/portfolio';

export default function PortfolioSection() {
  return (
    <section
      className='section-padding'
      id='portfolio'
    >
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-10 max-w-3xl text-center'>
          <div className='mb-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
            Selected work
          </div>
          <h2 className='text-balance text-3xl font-semibold text-white sm:text-4xl'>
            A few projects I’ve built and shipped
          </h2>
        </div>

        <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-3'>
          {portfolioData.selectedWork.map((p) => (
            <article
              key={p.title}
              className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            >
              <h3 className='text-lg font-semibold text-white'>{p.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-white/70'>{p.description}</p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/70'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
