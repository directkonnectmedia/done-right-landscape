import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Substantial Golden Peafowl</title>
          <meta property="og:title" content="Substantial Golden Peafowl" />
          <link
            rel="canonical"
            href="https://substantial-golden-peafowl-ly89h7.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://substantial-golden-peafowl-ly89h7.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            <img
              src="https://images.pexels.com/photos/9173340/pexels-photo-9173340.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Luxurious Arizona Backyard"
              className="hero-bg-image"
            />
            <div className="hero-logo-card">
              <img
                src="/done-right-landscaping-logo-200h.jpg"
                alt="Done Right Landscaping LLC Logo"
                className="home-thq-hero-logo-image-elm"
              />
            </div>
            <div className="home-thq-hero-overlay-elm hero-overlay"></div>
          </div>
          <div className="hero-container">
            <h1 className="home-hero-title hero-title">
              <span>
                {' '}
                Done Right
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="accent-text">Landscaping</span>
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-tagline">
              PREMIUM OUTDOOR LIVING • TOLLESON, ARIZONA
            </p>
            <div className="hero-cta-group">
              <a href="#booking">
                <div className="btn btn-accent btn-lg">
                  <span>Book a Free Estimate</span>
                </div>
              </a>
              <a href="tel:6235521310">
                <div className="hero-btn-white btn btn-lg btn-outline">
                  <span>Call (623) 552-1310</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 13 5 5 5-5M7 6l5 5 5-5"></path>
            </svg>
          </div>
        </section>
        <section id="services" className="services-section">
          <div className="services-container">
            <div className="services-header">
              <span className="home-section-label">WHAT WE DO</span>
              <h2 className="home-section-title section-title">Our Services</h2>
              <div className="header-divider"></div>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 9v6m4 0v6m0-18v6M3 15h18M3 9h18M8 15v6M8 3v6"></path>
                  </svg>
                </div>
                <h3 className="service-name">Paver Installation</h3>
                <p className="section-content">
                  Custom driveways, patios, walkways, and pool decks with
                  premium pavers built to withstand Arizona&apos;s heat and last
                  a lifetime.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9v1a3 3 0 0 0 3 3h1m8-5v5a3 3 0 0 1-3 3h-1m-4 5V5a2 2 0 1 1 4 0v16m-7 0h10"></path>
                  </svg>
                </div>
                <h3 className="service-name">Xeriscaping</h3>
                <p className="section-content">
                  Water-efficient desert landscaping that&apos;s beautiful and
                  sustainable with native plants, rock features, and
                  drought-tolerant design.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 20a2.4 2.4 0 0 0-2 1 2.4 2.4 0 0 1-2-1 2.4 2.4 0 0 1-2 1 2.4 2.4 0 0 0-2-1 2.4 2.4 0 0 0-2 1 2.4 2.4 0 0 1-2-1 2.4 2.4 0 0 1-2 1 2.4 2.4 0 0 0-2-1 2.4 2.4 0 0 0-2 1M2 16a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1"></path>
                  </svg>
                </div>
                <h3 className="service-name">Artificial Turf</h3>
                <p className="section-content">
                  Lush green lawns year-round with zero water waste, perfect for
                  families, pets, and Arizona&apos;s extreme climate.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1m-7-4V4.5a1.5 1.5 0 0 1 3 0M9 12V4.5a1.5 1.5 0 0 0-3 0m9 .5H9m0 5h6"></path>
                  </svg>
                </div>
                <h3 className="service-name">Pool Deck Remodeling</h3>
                <p className="section-content">
                  Cool-deck finishes, travertine pavers, and slip-resistant
                  surfaces designed for the desert sun.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 2h16m0 4H4m0 4h16M9 4v4m5 0v4m-6 0v4m8-4v4m-5 0v4"></path>
                  </svg>
                </div>
                <h3 className="service-name">Retaining Walls</h3>
                <p className="section-content">
                  Functional and decorative block walls, seat walls, and
                  retaining structures that add dimension and value to your
                  property.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"></path>
                  </svg>
                </div>
                <h3 className="service-name">Irrigation Systems</h3>
                <p className="section-content">
                  Smart drip irrigation installation and repair to keep your
                  landscape thriving while conserving water in the Sonoran
                  Desert.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 3v2.107M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"></path>
                    <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938M3 15h5.253M3 9h8.228M8 15v6M8 3v6"></path>
                  </svg>
                </div>
                <h3 className="service-name">Fire Pits &amp; Kitchens</h3>
                <p className="section-content">
                  Custom-built fire features and outdoor cooking areas for
                  unforgettable evenings under the Arizona sky.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Zm4 0v3"></path>
                  </svg>
                </div>
                <h3 className="service-name">Tree &amp; Plant Installation</h3>
                <p className="section-content">
                  Expert selection and planting of desert-adapted trees, shrubs,
                  and flowering plants that thrive in the Valley heat.
                </p>
                <div className="card-gradient-border"></div>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"></path>
                  </svg>
                </div>
                <h3 className="service-name">Landscape Lighting</h3>
                <p className="section-content">
                  Low-voltage LED lighting design that highlights your
                  landscape, improves safety, and creates stunning curb appeal
                  at night.
                </p>
                <div className="card-gradient-border"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-section">
          <div className="gallery-inner">
            <div className="gallery-header">
              <span className="gallery-label">OUR WORK</span>
              <h2 className="home-section-title gallery-title section-title">
                Project Gallery
              </h2>
            </div>
            <div className="gallery-scroller-wrapper">
              <div id="galleryScroller" className="gallery-scroller">
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/36486483/pexels-photo-36486483.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Luxury Paver Patios"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">
                      Luxury Paver Patios
                    </span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/31970505/pexels-photo-31970505.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Desert Xeriscaping"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">
                      Desert Xeriscaping
                    </span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/14869677/pexels-photo-14869677.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Modern Pool Decks"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">Modern Pool Decks</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/9511502/pexels-photo-9511502.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Custom Fire Pits"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">Custom Fire Pits</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/20535430/pexels-photo-20535430.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Backyard Transformations"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">
                      Backyard Transformations
                    </span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.pexels.com/photos/20547052/pexels-photo-20547052.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Outdoor Living Spaces"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">
                      Outdoor Living Spaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-controls">
              <button
                id="galleryPrev"
                aria-label="Previous image"
                className="gallery-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                id="galleryNext"
                aria-label="Next image"
                className="gallery-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section id="reviews" className="reviews-section">
          <div className="reviews-container">
            <div className="reviews-header">
              <span className="home-section-label">WHAT OUR CLIENTS SAY</span>
              <h2 className="home-section-title section-title">
                Reviews &amp; Testimonials
              </h2>
            </div>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                    opacity="0.2"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z"></path>
                  </svg>
                </div>
                <div className="review-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="review-text">
                  &quot;They completely transformed our backyard into a desert
                  oasis. The paver patio and fire pit area are absolutely
                  stunning. Professional crew, on time, and the quality is
                  unmatched.&quot;
                </p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <span>MR</span>
                  </div>
                  <div className="reviewer-details">
                    <span className="reviewer-name">Maria R.</span>
                    <span className="reviewer-city">Tolleson, AZ</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                    opacity="0.2"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z"></path>
                  </svg>
                </div>
                <div className="review-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="review-text">
                  &quot;Best landscaping company in the West Valley, hands down.
                  They installed artificial turf and a full xeriscaping design.
                  Our water bill dropped and the yard looks incredible
                  year-round.&quot;
                </p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <span>JT</span>
                  </div>
                  <div className="reviewer-details">
                    <span className="reviewer-name">James T.</span>
                    <span className="reviewer-city">Avondale, AZ</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-quote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                    opacity="0.2"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v5c0 1.25.75 2 2 2h3c0 4-2 6-5 6v2z"></path>
                  </svg>
                </div>
                <div className="review-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                </div>
                <p className="review-text">
                  &quot;From the first consultation to the final walkthrough,
                  Done Right lived up to their name. Our pool deck remodel
                  exceeded every expectation. Highly recommend to anyone in the
                  area.&quot;
                </p>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    <span>SL</span>
                  </div>
                  <div className="reviewer-details">
                    <span className="reviewer-name">Sarah L.</span>
                    <span className="reviewer-city">Goodyear, AZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="why-section">
          <div className="why-container">
            <div className="why-content">
              <span className="home-section-label">
                THE DONE RIGHT DIFFERENCE
              </span>
              <h2 className="home-section-title section-title">
                Luxury Craftsmanship for the Desert Lifestyle
              </h2>
              <p className="why-description section-content">
                We don&apos;t just landscape; we engineer premium outdoor
                environments that harmonize with the unique Arizona climate. Our
                team combines high-end architectural aesthetics with water-wise
                Sonoran sustainability.
              </p>
              <div className="trust-points">
                <div className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Quality Materials</h4>
                    <p className="section-content">
                      We source only premium-grade pavers, turf, and plants
                      selected for desert longevity.
                    </p>
                  </div>
                </div>
                <div className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Local Knowledge</h4>
                    <p className="section-content">
                      Deep understanding of West Valley soil, drainage, and HOA
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="trust-point">
                  <div className="trust-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="trust-text">
                    <h4 className="trust-title">Guaranteed Workmanship</h4>
                    <p className="section-content">
                      Every project is backed by our signature commitment to
                      excellence and durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-image-wrapper">
              <img
                src="https://images.pexels.com/photos/13540014/pexels-photo-13540014.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Arizona Landscaping Excellence"
                className="why-image"
              />
            </div>
          </div>
        </section>
        <section id="booking" className="booking-section">
          <div className="booking-container">
            <div className="booking-grid">
              <div className="booking-info">
                <span className="home-section-label">GET STARTED</span>
                <h2 className="home-section-title section-title">
                  Let&apos;s Build Your Dream Outdoor Space
                </h2>
                <p className="section-content">
                  Ready to transform your property? Fill out the form or give us
                  a call for a free, no-obligation estimate. We serve Tolleson,
                  Avondale, Goodyear, Litchfield Park, Buckeye, and the entire
                  West Valley.
                </p>
                <div className="contact-methods">
                  <a href="tel:6235521310">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <span>(623) 552-1310</span>
                    </div>
                  </a>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span>Tolleson, AZ &amp; West Valley</span>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span>Mon–Sat: 7:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="booking-form-wrapper">
                <div className="form-card">
                  <div className="form-accent"></div>
                  <h3 className="form-title">Book Your Free Estimate</h3>
                  <p className="form-subtext section-content">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <form
                    action="/submit"
                    method="POST"
                    data-form-id="b31933b9-50a2-4948-8e61-8af4224d7ee0"
                    className="home-booking-form"
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          required="true"
                          placeholder="John"
                          data-form-field-id="first-name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          type="text"
                          id="last-name"
                          name="last-name"
                          required="true"
                          placeholder="Doe"
                          data-form-field-id="last-name"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required="true"
                          placeholder="(623) 555-0100"
                          data-form-field-id="phone"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required="true"
                          placeholder="john@example.com"
                          data-form-field-id="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        required="true"
                        data-form-field-id="service"
                      >
                        <option value="true" disabled="true" selected="true">
                          Select a Service
                        </option>
                        <option value="pavers">Paver Installation</option>
                        <option value="xeriscaping">Xeriscaping</option>
                        <option value="turf">Artificial Turf</option>
                        <option value="pool-deck">Pool Deck Remodeling</option>
                        <option value="walls">Retaining Walls</option>
                        <option value="irrigation">Irrigation Systems</option>
                        <option value="fire-kitchen">
                          Fire Pits &amp; Kitchens
                        </option>
                        <option value="plants">
                          Tree &amp; Plant Installation
                        </option>
                        <option value="lighting">Landscape Lighting</option>
                        <option value="full-remodel">
                          Full Backyard Remodel
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="details">Project Details</label>
                      <textarea
                        id="details"
                        name="details"
                        rows="4"
                        placeholder="Tell us about your project goals..."
                        data-form-field-id="details"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      id="thq_button_LlOe"
                      name="button"
                      data-form-field-id="thq_button_LlOe"
                      className="btn-full btn btn-accent btn-lg"
                    >
                      Request Free Estimate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-card">
              <h2 className="home-section-title section-title">
                Ready to Transform Your Outdoor Space?
              </h2>
              <p className="cta-text section-content">
                Join hundreds of satisfied West Valley homeowners who trusted
                Done Right Landscaping LLC for their premium outdoor living
                transformations.
              </p>
              <div className="cta-divider"></div>
              <div className="cta-buttons">
                <a href="#booking">
                  <div className="btn btn-accent btn-xl">
                    <span>Request Your Free Estimate</span>
                  </div>
                </a>
                <a href="tel:6235521310">
                  <div className="btn btn-outline btn-xl">
                    <span>Call (623) 552-1310</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes slowZoom {from {transform: scale(1);}
to {transform: scale(1.1);}}@keyframes scaleX {from {transform: scaleX(0);}
to {transform: scaleX(1);}}@keyframes bounce {0%,20%,50%,80%,100% {transform: translateY(0) translateX(-50%);}
40% {transform: translateY(-10px) translateX(-50%);}
60% {transform: translateY(-5px) translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="done-right-landscaping">
(function(){
  // Gallery Scroller Logic
  const scroller = document.getElementById("galleryScroller")
  const nextBtn = document.getElementById("galleryNext")
  const prevBtn = document.getElementById("galleryPrev")

  if (scroller && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      scroller.scrollBy({ left: 450, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      scroller.scrollBy({ left: -450, behavior: "smooth" })
    })
  }

  // Form Success State Simulation
  const bookingForm = document.querySelector(".booking-form")
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      // Allow native validation to run
      if (!bookingForm.checkValidity()) return

      // Prevent actual redirect for demo purposes in this environment
      e.preventDefault()

      const submitBtn = bookingForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      // Visual feedback
      submitBtn.textContent = "✓ Estimate Requested!"
      submitBtn.style.backgroundColor = "#2ecc71" // Success green
      submitBtn.disabled = true

      // Reset after delay
      setTimeout(() => {
        bookingForm.reset()
        submitBtn.textContent = originalText
        submitBtn.style.backgroundColor = ""
        submitBtn.disabled = false
      }, 3000)
    })
  }

  // Scroll Reveal Animation (Subtle)
  const revealElements = document.querySelectorAll(".service-card, .review-card, .trust-point, .why-image-wrapper")

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top
      if (elTop < triggerBottom) {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }
    })
  }

  // Initial styles for reveal
  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-hero-logo-image-elm {
            width: 140px;
            height: auto;
            display: block;
          }
          .home-thq-hero-overlay-elm {
            top: -92px;
            right: -15px;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .home-thq-hero-logo-image-elm {
              width: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
