'use client';

import { portfolioData } from '@data/portfolio';

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className='mx-auto mb-10 max-w-3xl text-center'>
      <div className='mb-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
        {eyebrow}
      </div>
      <h2 className='text-balance text-3xl font-semibold text-white sm:text-4xl'>{title}</h2>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      className='section-padding'
      id='experience'
    >
      <div className='container mx-auto px-4'>
        <SectionTitle
          eyebrow='Experience'
          title='Building systems that ship and scale'
        />

        <div className='mx-auto grid max-w-5xl gap-6'>
          {portfolioData.experience.map((item) => (
            <article
              key={`${item.company}-${item.start}`}
              className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            >
              <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <div className='text-lg font-semibold text-white'>{item.role}</div>
                  <div className='text-sm text-white/70'>{item.company}</div>
                </div>
                <div className='text-sm text-white/60'>
                  {item.start} — {item.end}
                </div>
              </div>

              <ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/80'>
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

