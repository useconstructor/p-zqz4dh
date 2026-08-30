'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Menu,
  X,
  ArrowRight,
  Palette,
  Layers,
  Smartphone,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#servicios' },
  { label: 'Process', href: '#proceso' },
  { label: 'Contact', href: '#contacto' },
];

const caseStudies = [
  {
    title: 'Fintech Dashboard',
    category: 'Web Applications',
    description: 'Complete redesign of investment platform with a focus on accessibility and data clarity.',
    color: 'bg-[#FF4D00]',
  },
  {
    title: 'E Commerce App',
    category: 'Mobile Design',
    description: 'E-commerce app with seamless shopping experience and optimized checkout.',
    color: 'bg-[#0A0A0A]',
  },
  {
    title: 'Health Platform',
    category: 'UX Research',
    description: 'Telemedicine platform designed based on deep user research.',
    color: 'bg-[#6B6B6B]',
  },
  {
    title: 'Brand Identity',
    category: 'Digital Branding',
    description: 'Design system and visual identity for an educational technology startup.',
    color: 'bg-[#FF4D00]',
  },
];

const services = [
  {
    icon: Palette,
    title: 'Interface Design',
    description: 'We create impactful visual interfaces that communicate the essence of your brand.',
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'We develop scalable systems that maintain consistency across all touchpoints.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Native and intuitive mobile experiences that users love to use.',
  },
  {
    icon: Users,
    title: 'UX Research',
    description: 'User research that informs every design decision.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: Target,
    title: 'Discovery',
    description: 'We understand your business, users, and goals to define the right path.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We define the information architecture and flows that will guide the experience.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design',
    description: 'We create interfaces that harmoniously combine aesthetics and functionality.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Delivery',
    description: 'We deliver development-ready assets with complete documentation.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '8', label: 'Years of Experience' },
  { value: '40+', label: 'Satisfied Clients' },
  { value: '12', label: 'Design Awards' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <main className="bg-[#F5F5F3] text-[#0A0A0A]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F3]/95 backdrop-blur-sm border-b border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              Nómada<span className="text-[#FF4D00]">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#0A0A0A] text-white hover:bg-[#FF4D00] transition-colors duration-300"
              >
                <a href="#contacto">Let's Talk</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#F5F5F3] border-b border-[#E5E5E3] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg font-medium text-[#0A0A0A] hover:text-[#FF4D00] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-[#0A0A0A] text-white hover:bg-[#FF4D00]"
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms' }}
            >
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                Let's Talk
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Nómada Studio creative workspace"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 to-[#1a1a2e]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block mb-6 text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
            UX/UI Design Studio
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-white">
            We design
            <br />
            <span className="text-[#FF4D00]">experiences</span>
            <br />
            that move brands
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-10">
            We transform complex ideas into intuitive and memorable digital products.
            We are the bridge between your vision and the users who will love it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF4D00] text-white hover:bg-[#0A0A0A] transition-colors duration-300 px-8"
            >
              <a href="#portfolio">
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1a1a2e] transition-colors duration-300 px-8"
            >
              <a href="#proceso">Our Process</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                Selected Work
              </h2>
            </div>
            <p className="max-w-md text-[#6B6B6B] mt-6 md:mt-0">
              Every project is an opportunity to create something extraordinary.
              Here is some of our most recent work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] cursor-pointer"
              >
                <div className={`aspect-[4/3] ${study.color} transition-transform duration-500 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-xs font-medium tracking-widest uppercase text-[#FF4D00]">
                    {study.category}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-2 flex items-center gap-3">
                    {study.title}
                    <ArrowUpRight className="h-6 w-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-[#A0A0A0] mt-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section id="servicios" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
              Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              What We Do
            </h2>
            <p className="max-w-2xl mx-auto text-[#6B6B6B] mt-6">
              We offer a complete spectrum of design services, from initial research
              to delivery of development-ready assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 lg:p-10 bg-white rounded-2xl border border-[#E5E5E3] hover:border-[#FF4D00] transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F5F5F3] flex items-center justify-center mb-6 group-hover:bg-[#FF4D00] transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-[#0A0A0A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#6B6B6B]">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Feature image */}
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/feature.png"
              alt="Nómada Studio design process"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent flex items-center">
              <div className="p-8 lg:p-12 max-w-lg">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                  Design with purpose
                </h3>
                <p className="text-[#A0A0A0]">
                  Every design decision is grounded in research and oriented towards
                  measurable results for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="proceso" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
              Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              How We Work
            </h2>
            <p className="max-w-2xl mx-auto text-[#6B6B6B] mt-6">
              A proven process that ensures exceptional results in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-[#2A2A2A]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF4D00] rounded-full" />
                  </div>
                )}
                <div className="text-6xl font-display font-bold text-[#2A2A2A] mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#FF4D00] flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 lg:py-20 bg-[#FF4D00]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Split */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
                Let's Work Together
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                Ready to take your product to the next level?
              </h2>
              <p className="text-[#6B6B6B] mt-6 text-lg">
                We'd love to learn about your project and explore how we can help you
                create extraordinary digital experiences.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF4D00] text-white hover:bg-[#0A0A0A] transition-colors duration-300"
                >
                  <a href="#contacto">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-[#0A0A0A] p-6 flex items-end">
                  <span className="font-display text-2xl font-bold text-white">UX</span>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-[#FF4D00] p-6 flex items-end">
                  <span className="font-display text-2xl font-bold text-white">UI</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl bg-[#6B6B6B] p-6 flex items-end">
                  <span className="font-display text-2xl font-bold text-white">Brand</span>
                </div>
                <div className="aspect-square rounded-2xl bg-[#F5F5F3] border border-[#E5E5E3] p-6 flex items-end">
                  <span className="font-display text-2xl font-bold text-[#0A0A0A]">Digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 lg:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-[#FF4D00]">
                Contact
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                Tell us about your project
              </h2>
              <p className="text-[#6B6B6B] mt-6 text-lg">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF4D00] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">Email</h4>
                    <a
                      href="mailto:hola@nomadastudio.com"
                      className="text-[#6B6B6B] hover:text-[#FF4D00] transition-colors"
                    >
                      hola@nomadastudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FF4D00] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">Location</h4>
                    <p className="text-[#6B6B6B]">Remote work, global reach</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#FF4D00] flex items-center justify-center mb-6">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Message Sent
                  </h3>
                  <p className="text-[#6B6B6B]">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full ${formErrors.name ? 'border-red-500' : ''}`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full ${formErrors.email ? 'border-red-500' : ''}`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full min-h-[120px] ${formErrors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project..."
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#FF4D00] text-white hover:bg-[#0A0A0A] transition-colors duration-300"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="font-display text-3xl font-bold text-white">
                Nómada<span className="text-[#FF4D00]">.</span>
              </a>
              <p className="text-[#6B6B6B] mt-4 max-w-md">
                UX/UI design studio specialized in creating digital experiences
                that connect brands with their users.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#6B6B6B] hover:text-[#FF4D00] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hola@nomadastudio.com"
                    className="text-[#6B6B6B] hover:text-[#FF4D00] transition-colors"
                  >
                    hola@nomadastudio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B6B] text-sm">
              © 2024 Nómada Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#6B6B6B] hover:text-[#FF4D00] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-[#FF4D00] text-sm transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
