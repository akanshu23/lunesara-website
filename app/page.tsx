import { useState } from "react";

export default function LunesaraCompanyWebsite() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0907] text-[#f5e7c9] font-sans">
      <header className="sticky top-0 z-20 border-b border-[#2c2418] bg-[#0b0907]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <div className="text-xl font-semibold tracking-[0.2em]">LUNESARA</div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#b89a5c]">LLC</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex text-[#d9c49a]">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#operations" className="hover:text-white">Operations</a>
            <a href="#process" className="hover:text-white">How We Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Popup Form Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-[#c89c47] px-5 py-3 text-sm font-semibold text-black shadow-lg"
          >
            Inquiry Form
          </button>
        </div>

        {/* Popup Form */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-[90%] max-w-md rounded-2xl bg-[#11100d] p-6">
              <h2 className="mb-4 text-xl font-semibold">Send Inquiry</h2>
              <input placeholder="Your Name" className="mb-3 w-full rounded bg-[#1a1712] p-2" />
              <input placeholder="Email" className="mb-3 w-full rounded bg-[#1a1712] p-2" />
              <textarea placeholder="Message" className="mb-3 w-full rounded bg-[#1a1712] p-2" />
              <div className="flex justify-between">
                <button className="rounded bg-[#c89c47] px-4 py-2 text-black">Send</button>
                <button onClick={() => setOpen(false)} className="text-sm text-gray-400">Close</button>
              </div>
            </div>
          </div>
        )}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,154,92,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(184,154,92,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex rounded-full border border-[#3d311e] bg-[#15110d] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#b89a5c]">
                Global E-Commerce Operations
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Building stronger retail and e-commerce operations across borders.
              </h1>
              <p className="mt-6 text-base leading-8 text-[#d8c8a6] md:text-lg">
                LUNESARA LLC operates an international e-commerce business, sourcing products from trusted manufacturers
                and delivering them directly to customers across the USA, UK, and other global markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#c89c47] px-6 py-3 text-sm font-medium text-[#1a1207] shadow-lg shadow-[#c89c47]/20 transition hover:scale-[1.02]"
                >
                  Contact Us
                </a>
                <a
                  href="#operations"
                  className="rounded-full border border-[#4a3a21] px-6 py-3 text-sm font-medium text-[#f5e7c9] transition hover:bg-[#17120d]"
                >
                  Explore Operations
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-[#2d2418] bg-[#11100d] p-6 shadow-2xl shadow-black/30">
                <div className="text-sm uppercase tracking-[0.28em] text-[#b89a5c]">What we do</div>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#ddcfb0]">
                  <p>Product sourcing from reliable global suppliers</p>
                  <p>International online retail operations</p>
                  <p>Order fulfillment and cross-border logistics management</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#2d2418] bg-[#11100d] p-6">
                  <div className="text-sm uppercase tracking-[0.28em] text-[#b89a5c]">Business Model</div>
                  <div className="mt-2 text-sm leading-7 text-[#d8c8a6]">Cross-border e-commerce, product sourcing, and direct-to-customer fulfillment with scalable international operations.</div>
                </div>
                <div className="rounded-3xl border border-[#2d2418] bg-[#11100d] p-6">
                  <div className="text-3xl font-semibold text-[#c89c47]">USA</div>
                  <div className="mt-2 text-sm text-[#d8c8a6]">Primary focus market for consumer product delivery.</div>
                </div>
                <div className="rounded-3xl border border-[#2d2418] bg-[#11100d] p-6">
                  <div className="text-3xl font-semibold text-[#c89c47]">UK</div>
                  <div className="mt-2 text-sm text-[#d8c8a6]">Cross-border e-commerce operations with scalable systems.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-8 md:py-12">
          <div className="rounded-[2rem] border border-[#2d2418] bg-[#100d09] p-8 md:p-10">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b89a5c]">About Us</div>
            <h2 className="text-3xl font-semibold md:text-4xl">A modern company built for international online commerce.</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#dacaa9]">
              We specialize in sourcing high-demand consumer products from international suppliers and delivering them efficiently
              to customers worldwide through our online sales channels. Our objective is to build a scalable, reliable, and
              customer-focused e-commerce ecosystem.
            </p>
          </div>
        </section>

        <section id="operations" className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#b89a5c]">Operations</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">How our business operates</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Product Sourcing',
                text: 'We work with reliable suppliers to source quality consumer products at competitive prices.',
              },
              {
                title: 'E-Commerce Retail',
                text: 'We sell through our online channels targeting international markets such as the USA and UK.',
              },
              {
                title: 'Order Fulfillment',
                text: 'Orders are processed and shipped directly from suppliers to customers efficiently.',
              },
              {
                title: 'Logistics Management',
                text: 'We coordinate shipping and delivery workflows to maintain smooth cross-border operations.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#2d2418] bg-[#11100d] p-6">
                <h3 className="text-xl font-semibold text-[#f5e7c9]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8c8a6]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#b89a5c]">How We Work</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A simple, scalable international workflow.</h2>
              <p className="mt-5 text-base leading-8 text-[#d8c8a6]">
                Our operating model is structured to support efficient sourcing, online retail execution, and direct delivery to
                end customers in international markets.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'We identify high-demand products in the global market.',
                'We source products from trusted international suppliers.',
                'We list and sell products through our online e-commerce platforms.',
                'Orders are fulfilled directly to customers in target markets.',
                'We continuously optimize operations for efficiency and customer satisfaction.',
              ].map((step, idx) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-[#2d2418] bg-[#11100d] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c89c47] font-semibold text-[#1b1308]">
                    {idx + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-[#e0d2b4]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#b89a5c]">Why Choose Us</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Built for trust, structure, and global reach.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['Global Market Focus', 'We operate across international consumer markets with a structured online retail approach.'],
              ['Scalable Systems', 'Our processes are designed to support long-term e-commerce growth and operational consistency.'],
              ['Reliable Supply Chain', 'We prioritize dependable suppliers and organized fulfillment workflows.'],
              ['Customer-Focused Operations', 'We aim to deliver smooth purchasing and shipping experiences for end customers.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-[#2d2418] bg-[#11100d] p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8c8a6]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#b89a5c]">FAQ</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Common questions about our operations.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['What does LUNESARA LLC do?', 'We operate in e-commerce and online retail, sourcing products internationally and serving customers in global markets.'],
              ['Which markets do you serve?', 'Our operations focus on the USA, UK, and other selected international markets.'],
              ['How are orders fulfilled?', 'Products are sourced from trusted suppliers and fulfilled directly to customers through organized logistics workflows.'],
              ['How can businesses contact you?', 'For operational or partnership inquiries, businesses can contact us through our official company email.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-[#2d2418] bg-[#11100d] p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8c8a6]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-10 md:py-16">
          <div className="rounded-[2rem] border border-[#3a2d1a] bg-[linear-gradient(180deg,#15110d,#0f0d09)] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#b89a5c]">Contact</div>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Let’s discuss business inquiries.</h2>
                <p className="mt-5 text-base leading-8 text-[#d8c8a6]">
                  For partnerships, operational inquiries, or company-related communication, please contact us through our business email.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[#2d2418] bg-[#11100d] p-6">
                <div className="space-y-4 text-sm leading-7 text-[#e3d6ba]">
                  <p><span className="text-[#b89a5c]">Company:</span> LUNESARA LLC</p>
                  <p><span className="text-[#b89a5c]">Email:</span> akanshukarma8@gmail.com</p>
                  <p><span className="text-[#b89a5c]">Founder:</span> Akanshu Lunesara</p>
                  <p><span className="text-[#b89a5c]">Sector:</span> E-commerce and online retail</p>
                  <p><span className="text-[#b89a5c]">Markets:</span> USA, UK, and international</p>
                  <p><span className="text-[#b89a5c]">Address:</span> 30 N Gould St Ste R, Sheridan, WY 82801</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2c2418] bg-[#0a0806]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold tracking-[0.2em]">LUNESARA LLC</div>
            <p className="mt-4 text-sm leading-7 text-[#d1c19d]">
              We operate in the e-commerce and online retail sector, focusing on international markets and cross-border product delivery.
            </p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#b89a5c]">Quick Links</div>
            <div className="mt-4 space-y-2 text-sm text-[#d9c49a]">
              <div>About Us</div>
              <div>Operations</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#b89a5c]">Policies</div>
            <div className="mt-4 space-y-2 text-sm text-[#d9c49a]">
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
              <div>Refund Policy</div>
              <div>Shipping Policy</div>
              <div>Business Address</div>
            </div>
          </div>
        </div>
              <div className="text-center text-xs text-gray-500 pb-4">
          Powered by LUNESARA LLC
        </div>
      </footer>
    </div>
  );
}
