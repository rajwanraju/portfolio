'use client';

import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { portfolioData } from '@data/portfolio';
import { Button } from 'antd';

export default function ContactSection() {
  return (
    <section
      className='section-padding'
      id='contact'
    >
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-10 max-w-3xl text-center'>
          <div className='mb-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>
            Contact
          </div>
          <h2 className='text-balance text-3xl font-semibold text-white sm:text-4xl'>
            Let’s build something great
          </h2>
          <p className='mt-4 text-sm leading-relaxed text-white/70 sm:text-base'>
            For collaboration, full-time roles, or consulting — reach out anytime.
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-6 lg:grid-cols-3'>
          <a
            className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            href={`mailto:${portfolioData.personal.email}`}
          >
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Email</div>
            <div className='mt-3 flex items-center gap-2 text-sm text-white/85'>
              <MailOutlined />
              {portfolioData.personal.email}
            </div>
          </a>

          <a
            className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            href={`tel:${portfolioData.personal.phone}`}
          >
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Phone</div>
            <div className='mt-3 flex items-center gap-2 text-sm text-white/85'>
              <PhoneOutlined />
              {portfolioData.personal.phone}
            </div>
          </a>

          <a
            className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'
            href={portfolioData.personal.github}
            target='_blank'
            rel='noreferrer'
          >
            <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>GitHub</div>
            <div className='mt-3 flex items-center gap-2 text-sm text-white/85'>
              <GithubOutlined />
              github.com/rajwanraju
            </div>
          </a>
        </div>

        <div className='mx-auto mt-8 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur'>
          <div className='text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Education</div>
          <div className='mt-3 text-sm text-white/80'>
            {portfolioData.education[0].institution} — {portfolioData.education[0].degree},{' '}
            {portfolioData.education[0].field}
          </div>

          <div className='mt-6 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Certificates</div>
          <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-white/80'>
            {portfolioData.certificates.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className='mt-6 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase'>Reference</div>
          <div className='mt-3 text-sm text-white/80'>
            {portfolioData.references[0].name} — {portfolioData.references[0].company} (
            <a
              className='underline underline-offset-4'
              href={`mailto:${portfolioData.references[0].email}`}
            >
              {portfolioData.references[0].email}
            </a>
            )
          </div>
        </div>

        <div className='mx-auto mt-10 max-w-5xl text-center'>
          <Button
            type='primary'
            size='large'
            className='!h-12 !rounded-full !border-0 !bg-white !px-6 !text-[15px] !font-semibold !text-black'
            href={`mailto:${portfolioData.personal.email}`}
            icon={<MailOutlined />}
          >
            Send a message
          </Button>
        </div>
      </div>
    </section>
  );
}
