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
            <div id="servicesCarousel" className="services-carousel">
              <div className="services-carousel__track">
                <div className="services-slide is-active" data-slide="0" style={{ backgroundImage: "url(/photos/photo-12.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">01 / Premium Hardscape</span>
                    <h3 className="services-slide__title">Paver Installation</h3>
                    <p className="services-slide__desc">Custom driveways, patios, walkways, and pool decks with premium pavers built to withstand Arizona&apos;s heat and last a lifetime.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="1" style={{ backgroundImage: "url(/photos/photo-03.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">02 / Water-Wise Design</span>
                    <h3 className="services-slide__title">Xeriscaping</h3>
                    <p className="services-slide__desc">Water-efficient desert landscaping that&apos;s beautiful and sustainable with native plants, rock features, and drought-tolerant design.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="2" style={{ backgroundImage: "url(/photos/photo-05.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">03 / Year-Round Green</span>
                    <h3 className="services-slide__title">Artificial Turf</h3>
                    <p className="services-slide__desc">Lush green lawns year-round with zero water waste, perfect for families, pets, and Arizona&apos;s extreme climate.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="3" style={{ backgroundImage: "url(/photos/photo-57.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">04 / Resort-Style Decks</span>
                    <h3 className="services-slide__title">Pool Deck Remodeling</h3>
                    <p className="services-slide__desc">Cool-deck finishes, travertine pavers, and slip-resistant surfaces designed for the desert sun.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="4" style={{ backgroundImage: "url(/photos/photo-32.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">05 / Structural Beauty</span>
                    <h3 className="services-slide__title">Retaining Walls</h3>
                    <p className="services-slide__desc">Functional and decorative block walls, seat walls, and retaining structures that add dimension and value to your property.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="5" style={{ backgroundImage: "url(/photos/stock-irrigation.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">06 / Smart Watering</span>
                    <h3 className="services-slide__title">Irrigation Systems</h3>
                    <p className="services-slide__desc">Smart drip irrigation installation and repair to keep your landscape thriving while conserving water in the Sonoran Desert.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="6" style={{ backgroundImage: "url(/photos/photo-52.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">07 / Outdoor Living</span>
                    <h3 className="services-slide__title">Fire Pits &amp; Kitchens</h3>
                    <p className="services-slide__desc">Custom-built fire features and outdoor cooking areas for unforgettable evenings under the Arizona sky.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="7" style={{ backgroundImage: "url(/photos/stock-trees-plants.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">08 / Living Color</span>
                    <h3 className="services-slide__title">Tree &amp; Plant Installation</h3>
                    <p className="services-slide__desc">Expert selection and planting of desert-adapted trees, shrubs, and flowering plants that thrive in the Valley heat.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
                <div className="services-slide" data-slide="8" style={{ backgroundImage: "url(/photos/photo-14.jpg)" }}>
                  <div className="services-slide__overlay"></div>
                  <div className="services-slide__content">
                    <span className="services-slide__eyebrow">09 / Evening Ambiance</span>
                    <h3 className="services-slide__title">Landscape Lighting</h3>
                    <p className="services-slide__desc">Low-voltage LED lighting design that highlights your landscape, improves safety, and creates stunning curb appeal at night.</p>
                    <a href="#booking" className="services-slide__cta"><span>Get a Quote</span></a>
                  </div>
                </div>
              </div>
              <button id="servicesPrev" aria-label="Previous service" className="services-carousel__nav services-carousel__nav--prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
              </button>
              <button id="servicesNext" aria-label="Next service" className="services-carousel__nav services-carousel__nav--next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
              </button>
              <div id="servicesDots" className="services-carousel__dots">
                <button data-dot="0" className="services-carousel__dot is-active" aria-label="Go to service 1"></button>
                <button data-dot="1" className="services-carousel__dot" aria-label="Go to service 2"></button>
                <button data-dot="2" className="services-carousel__dot" aria-label="Go to service 3"></button>
                <button data-dot="3" className="services-carousel__dot" aria-label="Go to service 4"></button>
                <button data-dot="4" className="services-carousel__dot" aria-label="Go to service 5"></button>
                <button data-dot="5" className="services-carousel__dot" aria-label="Go to service 6"></button>
                <button data-dot="6" className="services-carousel__dot" aria-label="Go to service 7"></button>
                <button data-dot="7" className="services-carousel__dot" aria-label="Go to service 8"></button>
                <button data-dot="8" className="services-carousel__dot" aria-label="Go to service 9"></button>
              </div>
              <div className="services-carousel__progress"><div id="servicesProgress" className="services-carousel__progress-bar"></div></div>
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
                    src="/photos/photo-01.jpg"
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
                    src="/photos/photo-02.jpg"
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
                    src="/photos/photo-03.jpg"
                    alt="Modern Pool Decks"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">Modern Pool Decks</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="/photos/photo-04.jpg"
                    alt="Custom Fire Pits"
                  />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-name">Custom Fire Pits</span>
                  </div>
                </div>
                <div className="gallery-item">
                  <img
                    src="/photos/photo-05.jpg"
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
                    src="/photos/photo-06.jpg"
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
                src="/photos/photo-07.jpg"
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

  // Services Carousel
  const sCarousel = document.getElementById("servicesCarousel")
  if (sCarousel) {
    const slides = sCarousel.querySelectorAll(".services-slide")
    const dots = sCarousel.querySelectorAll(".services-carousel__dot")
    const prevBtn = document.getElementById("servicesPrev")
    const nextBtn = document.getElementById("servicesNext")
    const progressBar = document.getElementById("servicesProgress")
    let current = 0
    let timer = null
    let progressTimer = null
    const INTERVAL = 5000

    const goTo = (i) => {
      current = (i + slides.length) % slides.length
      slides.forEach((s, idx) => s.classList.toggle("is-active", idx === current))
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === current))
      restartProgress()
    }

    const next = () => goTo(current + 1)
    const prev = () => goTo(current - 1)

    const startAuto = () => {
      stopAuto()
      timer = setInterval(next, INTERVAL)
      restartProgress()
    }
    const stopAuto = () => {
      if (timer) { clearInterval(timer); timer = null }
      if (progressTimer) { cancelAnimationFrame(progressTimer); progressTimer = null }
    }
    const restartProgress = () => {
      if (!progressBar) return
      progressBar.style.transition = "none"
      progressBar.style.width = "0%"
      // force reflow
      void progressBar.offsetWidth
      if (timer) {
        progressBar.style.transition = "width " + INTERVAL + "ms linear"
        progressBar.style.width = "100%"
      }
    }

    nextBtn?.addEventListener("click", () => { next(); startAuto() })
    prevBtn?.addEventListener("click", () => { prev(); startAuto() })
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.getAttribute("data-dot"), 10)
        goTo(i)
        startAuto()
      })
    })

    // Pause on hover
    sCarousel.addEventListener("mouseenter", stopAuto)
    sCarousel.addEventListener("mouseleave", startAuto)

    // Keyboard
    sCarousel.setAttribute("tabindex", "0")
    sCarousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { next(); startAuto() }
      if (e.key === "ArrowLeft") { prev(); startAuto() }
    })

    // Touch swipe
    let touchStartX = 0
    let touchEndX = 0
    sCarousel.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX }, { passive: true })
    sCarousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        if (diff > 0) next(); else prev()
        startAuto()
      }
    }, { passive: true })

    // Pause when offscreen
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) startAuto(); else stopAuto()
      })
    }, { threshold: 0.25 })
    io.observe(sCarousel)
  }

    // Scroll Reveal Animation (Subtle)
  const revealElements = document.querySelectorAll(".review-card, .trust-point, .why-image-wrapper")

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
