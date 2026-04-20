import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ProjectGallery = (props) => {
  return (
    <>
      <div className="project-gallery-container1">
        <Head>
          <title>Project-Gallery - Substantial Golden Peafowl</title>
          <meta
            property="og:title"
            content="Project-Gallery - Substantial Golden Peafowl"
          />
          <link
            rel="canonical"
            href="https://substantial-golden-peafowl-ly89h7.teleporthq.site/project-gallery"
          />
          <meta
            property="og:url"
            content="https://substantial-golden-peafowl-ly89h7.teleporthq.site/project-gallery"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-gallery">
          <div className="hero-gallery__bg-wrapper">
            <img
              src="https://images.pexels.com/photos/9173338/pexels-photo-9173338.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Luxury Arizona Backyard"
              className="hero-gallery__image"
            />
            <div className="hero-gallery__overlay"></div>
          </div>
          <div className="hero-gallery__content">
            <h1 className="project-gallery-hero-title hero-title">
              Project Gallery
            </h1>
            <p className="hero-subtitle">
              Curated excellence in luxury landscaping. Explore our portfolio of
              premium outdoor living spaces across the Arizona West Valley.
            </p>
            <div className="hero-gallery__divider"></div>
            <div className="hero-gallery__scroll-indicator">
              <div className="hero-gallery__scroll-dot"></div>
            </div>
          </div>
        </section>
        <section className="filterable-gallery">
          <div className="filterable-gallery__header">
            <div className="filterable-gallery__filters">
              <button data-filter="all" className="filter-chip active">
                All Projects
              </button>
              <button data-filter="pavers" className="filter-chip">
                Pavers
              </button>
              <button data-filter="xeriscape" className="filter-chip">
                Xeriscape
              </button>
              <button data-filter="pool" className="filter-chip">
                Pool Deck
              </button>
              <button data-filter="turf" className="filter-chip">
                Artificial Turf
              </button>
              <button data-filter="lighting" className="filter-chip">
                Lighting
              </button>
            </div>
          </div>
          <div className="filterable-gallery__scroller-container">
            <div id="galleryTrack" className="filterable-gallery__track">
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-08.jpg"
                    alt="Luxury Paver Patio"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Camelback Estate Patio</h3>
                    <button
                      data-project="camelback"
                      className="open-modal btn btn-sm btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-09.jpg"
                    alt="Modern Xeriscape"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Desert Modern Oasis</h3>
                    <button
                      data-project="desert-modern"
                      className="open-modal btn btn-sm btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-10.jpg"
                    alt="Pool Deck Transformation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Verrado Pool Remodel</h3>
                    <button
                      data-project="verrado"
                      className="open-modal btn btn-sm btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-11.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Evening Glow Estate</h3>
                    <button
                      data-project="evening-glow"
                      className="open-modal btn btn-sm btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-12.jpg"
                    alt="Artificial Turf Lawn"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Goodyear Greenery</h3>
                    <button
                      data-project="goodyear"
                      className="open-modal btn btn-sm btn-outline"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-17.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-18.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-19.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-20.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-21.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-22.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-23.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-24.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-25.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-26.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-27.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-28.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-29.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-30.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-31.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-32.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-33.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-34.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-35.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-36.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-37.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-38.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-39.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-40.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-41.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-42.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-43.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-44.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-45.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-46.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-47.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-48.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-50.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-51.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-52.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-53.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-54.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-55.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-56.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-57.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-58.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-60.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
              <article data-category="pool" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-61.jpg"
                    alt="Pool Deck Build"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Pool Deck Build</h3>
                  </div>
                </div>
              </article>
              <article data-category="lighting" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-62.jpg"
                    alt="Landscape Lighting"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Landscape Lighting</h3>
                  </div>
                </div>
              </article>
              <article data-category="turf" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-63.jpg"
                    alt="Turf Installation"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Turf Installation</h3>
                  </div>
                </div>
              </article>
              <article data-category="pavers" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-64.jpg"
                    alt="Paver Project"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Paver Project</h3>
                  </div>
                </div>
              </article>
              <article data-category="xeriscape" className="project-card">
                <div className="project-card__media">
                  <img
                    src="/photos/photo-66.jpg"
                    alt="Xeriscape Design"
                  />
                  <div className="project-card__overlay">
                    <h3 className="section-subtitle">Xeriscape Design</h3>
                  </div>
                </div>
              </article>
            </div>
            <div className="filterable-gallery__nav">
              <button id="scrollPrev" className="nav-btn prev">
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
              <button id="scrollNext" className="nav-btn next">
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
        <section className="project-showcase">
          <div id="showcaseCarousel" className="project-showcase__carousel">
            <div className="showcase-item active">
              <div className="showcase-item__media">
                <img
                  src="/photos/photo-13.jpg"
                  alt="Signature Estate Project"
                />
              </div>
              <div className="showcase-item__content">
                <span className="project-gallery-thq-section-subtitle-elm6 section-subtitle">
                  Featured Signature Project
                </span>
                <h2 className="section-title">The Estrella Mountain Retreat</h2>
                <p className="section-content">
                  A complete backyard transformation featuring custom travertine
                  pavers, a sunken fire pit lounge, and integrated smart
                  irrigation for native desert flora.
                </p>
                <div className="showcase-item__specs">
                  <div className="spec-tag">
                    <span>Service:</span>
                    <span>
                      {' '}
                      Full Remodel
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="spec-tag">
                    <span>Location:</span>
                    <span>
                      {' '}
                      Goodyear, AZ
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="spec-tag">
                    <span>Timeline:</span>
                    <span>
                      {' '}
                      8 Weeks
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <a href="#contact">
                  <div className="btn btn-primary">
                    <span>Request Similar Project</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="comparison-section">
          <div className="comparison-section__container">
            <header className="comparison-section__header">
              <h2 className="section-title">The Transformation</h2>
              <p className="section-content">
                Drag the slider to see how we turn ordinary spaces into
                extraordinary outdoor living environments.
              </p>
            </header>
            <div id="mainComparison" className="comparison-slider">
              <div className="comparison-slider__after">
                <img
                  src="/photos/photo-14.jpg"
                  alt="After Transformation"
                />
              </div>
              <div className="comparison-slider__before">
                <img
                  src="/photos/photo-15.jpg"
                  alt="Before Transformation"
                />
              </div>
              <div className="comparison-slider__handle">
                <div className="handle-line"></div>
                <div className="handle-circle">
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
                    <path d="m18 15-3-3 3-3"></path>
                    <path d="m6 9 3 3-3 3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <dialog id="projectDetailModal" className="project-modal">
          <div className="project-modal__container">
            <button id="closeModal" className="project-modal__close">
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <div className="project-modal__grid">
              <div className="project-modal__gallery">
                <img
                  id="modalMainImg"
                  src="/photos/photo-16.jpg"
                  alt="Project Detail"
                />
              </div>
              <div className="project-modal__info">
                <h2 id="modalTitle" className="section-title">
                  Camelback Estate Patio
                </h2>
                <p id="modalDesc" className="section-content">
                  This expansive patio project utilized premium Belgard pavers
                  to create a seamless transition between the indoor living
                  space and the outdoor pool area. The design incorporates
                  custom drainage and heat-resistant materials perfect for
                  Tolleson summers.
                </p>
                <div className="project-modal__details">
                  <div className="detail-item">
                    <strong>Services:</strong>
                    <span id="modalServices">
                      Paver Installation, Landscape Lighting
                    </span>
                  </div>
                  <div className="detail-item">
                    <strong>Materials:</strong>
                    <span id="modalMaterials">
                      Travertine Pavers, Low-Voltage LED
                    </span>
                  </div>
                </div>
                <a href="#contact">
                  <div className="btn btn-accent btn-lg">
                    <span>Request Similar Estimate</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </dialog>
        <section className="gallery-testimonials">
          <div className="gallery-testimonials__container">
            <div className="testimonial-mini-card">
              <div className="testimonial-mini-card__quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                </svg>
                <p className="section-content">
                  &quot;The paver patio and fire pit area are absolutely
                  stunning. Professional crew, on time, and the quality is
                  unmatched.&quot;
                </p>
              </div>
              <div className="testimonial-mini-card__author">
                <strong>Maria R.</strong>
                <span>Tolleson, AZ</span>
              </div>
            </div>
            <div className="testimonial-mini-card">
              <div className="testimonial-mini-card__quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                </svg>
                <p className="section-content">
                  &quot;Best landscaping company in the West Valley. They
                  installed artificial turf and a full xeriscaping design.&quot;
                </p>
              </div>
              <div className="testimonial-mini-card__author">
                <strong>James T.</strong>
                <span>Avondale, AZ</span>
              </div>
            </div>
            <div className="testimonial-mini-card">
              <div className="testimonial-mini-card__quote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                </svg>
                <p className="section-content">
                  &quot;Our pool deck remodel exceeded every expectation. Highly
                  recommend to anyone in the area.&quot;
                </p>
              </div>
              <div className="testimonial-mini-card__author">
                <strong>Sarah L.</strong>
                <span>Goodyear, AZ</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="gallery-cta">
          <div className="gallery-cta__video-bg">
            <video
              autoPlay="true"
              muted="true"
              loop="true"
              playsInline="true"
              poster="https://images.pexels.com/videos/17380735/pictures/preview-0.jpeg"
              src="https://videos.pexels.com/video-files/17380735/17380735-hd_1920_1080_25fps.mp4"
            ></video>
            <div className="gallery-cta__overlay"></div>
          </div>
          <div className="gallery-cta__content">
            <h2 className="project-gallery-hero-title hero-title">
              Ready to Transform Your Landscape?
            </h2>
            <p className="section-content">
              Join hundreds of satisfied West Valley homeowners. Let&apos;s
              build your dream outdoor space together.
            </p>
            <div className="gallery-cta__actions">
              <a href="#">
                <div className="btn btn-accent btn-xl">
                  <span>Book a Free Estimate</span>
                </div>
              </a>
              <a href="tel:6235521310">
                <div className="project-gallery-thq-btn-elm9 btn btn-outline btn-xl">
                  <span>Call (623) 552-1310</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="project-gallery-container2">
          <div className="project-gallery-container3">
            <Script
              html={`<style>
        @keyframes heroZoom {from {transform: scale(1);}
to {transform: scale(1.15);}}@keyframes scrollAnim {0% {transform: translateY(0);
opacity: 1;}
100% {transform: translateY(15px);
opacity: 0;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="project-gallery-container4">
          <div className="project-gallery-container5">
            <Script
              html={`<script defer data-name="gallery-logic">
(function(){
  // Filter Logic
  const filterChips = document.querySelectorAll(".filter-chip")
  const projectCards = document.querySelectorAll(".project-card")

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // UI Update
      filterChips.forEach((c) => c.classList.remove("active"))
      chip.classList.add("active")

      const filter = chip.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 10)
        } else {
          card.style.opacity = "0"
          card.style.transform = "scale(0.95)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Horizontal Scroller Navigation
  const track = document.getElementById("galleryTrack")
  const nextBtn = document.getElementById("scrollNext")
  const prevBtn = document.getElementById("scrollPrev")

  if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: 400, behavior: "smooth" })
    })
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -400, behavior: "smooth" })
    })
  }

  // Before & After Slider
  const slider = document.getElementById("mainComparison")
  if (slider) {
    const beforeImg = slider.querySelector(".comparison-slider__before")
    const handle = slider.querySelector(".comparison-slider__handle")

    const moveSlider = (e) => {
      const rect = slider.getBoundingClientRect()
      let x = (e.pageX || e.touches[0].pageX) - rect.left

      // Bounds check
      if (x < 0) x = 0
      if (x > rect.width) x = rect.width

      const percent = (x / rect.width) * 100
      beforeImg.style.width = \`\${percent}%\`
      handle.style.left = \`\${percent}%\`
    }

    slider.addEventListener("mousemove", moveSlider)
    slider.addEventListener("touchmove", (e) => moveSlider(e), { passive: true })
  }

  // Modal Logic
  const modal = document.getElementById("projectDetailModal")
  const openModalBtns = document.querySelectorAll(".open-modal")
  const closeModalBtn = document.getElementById("closeModal")

  const projectData = {
    camelback: {
      title: "Camelback Estate Patio",
      desc: "This expansive patio project utilized premium Belgard pavers to create a seamless transition between indoor and outdoor living. Heat-resistant materials ensure comfort during peak Arizona summers.",
      services: "Paver Installation, Landscape Lighting",
      materials: "Travertine, Low-Voltage LED",
      img: "/photos/photo-08.jpg",
    },
    "desert-modern": {
      title: "Desert Modern Oasis",
      desc: "A minimalist xeriscape design focusing on structural beauty and water efficiency. Features architectural cacti and a decorative river rock bed.",
      services: "Xeriscape, Irrigation",
      materials: "Native Plants, River Rock, Smart Drip",
      img: "/photos/photo-09.jpg",
    },
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pId = btn.getAttribute("data-project")
      const data = projectData[pId]

      if (data) {
        document.getElementById("modalTitle").textContent = data.title
        document.getElementById("modalDesc").textContent = data.desc
        document.getElementById("modalServices").textContent = data.services
        document.getElementById("modalMaterials").textContent = data.materials
        document.getElementById("modalMainImg").src = data.img
        modal.showModal()
      }
    })
  })

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => modal.close())
  }

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.close()
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .project-gallery-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .project-gallery-thq-section-subtitle-elm6 {
            color: var(--color-secondary);
          }
          .project-gallery-thq-btn-elm9 {
            color: var(--color-surface);
            background: transparent;
            border-color: var(--color-surface);
          }
          .project-gallery-container2 {
            display: none;
          }
          .project-gallery-container3 {
            display: contents;
          }
          .project-gallery-container4 {
            display: none;
          }
          .project-gallery-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default ProjectGallery
