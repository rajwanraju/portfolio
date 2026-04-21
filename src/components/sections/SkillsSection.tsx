'use client';

import { portfolioData } from '@data/portfolio';

export default function SkillsSection() {
  return (
    <section
      className='section-padding'
      id='skills'
    >
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-10 max-w-3xl text-center'>
          <div className='mb-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
            Skills
          </div>
          <h2 className='text-balance text-3xl font-semibold text-white sm:text-4xl'>
            A practical stack for building reliable products
          </h2>
        </div>

        <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-2'>
          {(
            [
              ['Backend', portfolioData.skills.backend],
              ['Frontend', portfolioData.skills.frontend],
              ['Databases', portfolioData.skills.databases],
              ['Architecture', portfolioData.skills.architecture],
              ['DevOps & Cloud', portfolioData.skills.devopsCloud],
              ['Testing', portfolioData.skills.testing],
            ] as const
          ).map(([title, items]) => (
            <div
              key={title}
              className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            >
              <div className='text-sm font-semibold text-white'>{title}</div>
              <div className='mt-4 flex flex-wrap gap-2'>
                {items.map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-white/70'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
