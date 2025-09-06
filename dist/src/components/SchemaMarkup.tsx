import React from 'react';

interface SchemaMarkupProps {
  type: 'homepage' | 'about' | 'contact' | 'privacy' | 'terms';
}

function SchemaMarkup({ type }: SchemaMarkupProps) {
  const getSchemaData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://neetexamcountdown.com/#website",
          "url": "https://neetexamcountdown.com/",
          "name": "NEET Exam Countdown",
          "description": "Get accurate NEET 2026 exam countdown timer. Plan your studies efficiently with our interactive countdown clock and stay updated with exam information.",
          "publisher": {
            "@id": "https://neetexamcountdown.com/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://neetexamcountdown.com/?s={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        },
        {
          "@type": "Organization",
          "@id": "https://neetexamcountdown.com/#organization",
          "name": "NEET Exam Countdown",
          "url": "https://neetexamcountdown.com/",
          "logo": {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://neetexamcountdown.com/#/schema/logo/image/",
            "url": "https://i.postimg.cc/J01X0sD0/exam-time.png",
            "contentUrl": "https://i.postimg.cc/J01X0sD0/exam-time.png",
            "width": 32,
            "height": 32,
            "caption": "NEET Exam Countdown"
          },
          "image": {
            "@id": "https://neetexamcountdown.com/#/schema/logo/image/"
          },
          "sameAs": [
            "https://t.me/imayuu03"
          ]
        }
      ]
    };

    switch (type) {
      case 'homepage':
        baseSchema["@graph"].push({
          "@type": "WebPage",
          "@id": "https://neetexamcountdown.com/#webpage",
          "url": "https://neetexamcountdown.com/",
          "name": "NEET 2026 EXAM COUNTDOWN - Plan Your Preparation",
          "isPartOf": {
            "@id": "https://neetexamcountdown.com/#website"
          },
          "about": {
            "@id": "https://neetexamcountdown.com/#organization"
          },
          "description": "Get accurate countdown to NEET exam. Plan your preparation with our interactive countdown timer and comprehensive exam information.",
          "breadcrumb": {
            "@id": "https://neetexamcountdown.com/#breadcrumb"
          },
          "inLanguage": "en-US",
          "potentialAction": [
            {
              "@type": "ReadAction",
              "target": ["https://neetexamcountdown.com/"]
            }
          ]
        });

        // Add Event Schema for NEET Exam
        baseSchema["@graph"].push({
          "@type": "Event",
          "name": "NEET UG 2026 Exam",
          "description": "National Eligibility cum Entrance Test (NEET) UG 2026 for medical and dental college admissions in India",
          "startDate": "2026-05-03T14:00:00+05:30",
          "endDate": "2026-05-03T17:20:00+05:30",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Various Exam Centers across India",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "National Testing Agency (NTA)",
            "url": "https://neet.nta.nic.in/"
          },
          "offers": {
            "@type": "Offer",
            "price": "1700",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-02-07",
            "validThrough": "2026-03-07"
          }
        });

        // Add FAQ Schema
        baseSchema["@graph"].push({
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why is this website a countdown for NEET?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our website, NEETEXAMCOUNTDOWN.COM, is designed to help you plan your studies efficiently and stay motivated. The live countdown shows you exactly how much time is left until the NEET 2026 exam, helping you manage your study schedule and make every day count."
              }
            },
            {
              "@type": "Question",
              "name": "How many days are left until NEET 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The exact number of days, hours, minutes, and seconds are shown live on our homepage. This timer is based on the official, tentative exam date of May 3, 2026."
              }
            },
            {
              "@type": "Question",
              "name": "Is the NEET 2026 exam date confirmed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The official, confirmed date for the NEET 2026 exam will be released by the National Testing Agency (NTA). Based on the trend of previous years, the exam is expected to be held on the first Sunday of May. Our countdown reflects this and will be updated immediately if the official date changes."
              }
            },
            {
              "@type": "Question",
              "name": "Is this countdown accurate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our countdown is accurate and is regularly updated. It is synchronized with the most reliable information available regarding the NEET UG 2026 exam date."
              }
            },
            {
              "@type": "Question",
              "name": "What is the benefit of a countdown website for NEET?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A countdown website helps you: Stay Motivated - Seeing the time decrease creates a sense of urgency. Plan Better - It helps you break down your study goals into smaller, daily targets. Stay Focused - It's a constant reminder to use your time wisely."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I find more information about NEET 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can find a complete guide to the NEET UG 2026 exam on our website, including details on the syllabus, exam pattern, eligibility, and preparation tips. You can also visit the official NTA website for direct announcements."
              }
            }
          ]
        });
        break;

      case 'about':
        baseSchema["@graph"].push({
          "@type": "WebPage",
          "@id": "https://neetexamcountdown.com/about-neet-2026#webpage",
          "url": "https://neetexamcountdown.com/about-neet-2026",
          "name": "About NEET 2026 | Complete Guide to National Eligibility cum Entrance Test",
          "isPartOf": {
            "@id": "https://neetexamcountdown.com/#website"
          },
          "description": "Complete guide to NEET 2026 exam - eligibility criteria, exam pattern, syllabus, preparation strategies, and important dates. Everything you need to know about National Eligibility cum Entrance Test 2026.",
          "inLanguage": "en-US"
        });

        // Add Article Schema for About NEET 2026
        baseSchema["@graph"].push({
          "@type": "Article",
          "headline": "NEET 2026: The Complete Guide for Students",
          "description": "Complete guide to NEET 2026 exam - eligibility criteria, exam pattern, syllabus, preparation strategies, and important dates.",
          "author": {
            "@type": "Person",
            "name": "EpexAyush"
          },
          "publisher": {
            "@id": "https://neetexamcountdown.com/#organization"
          },
          "datePublished": "2025-01-18",
          "dateModified": "2025-01-18",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://neetexamcountdown.com/about-neet-2026"
          },
          "articleSection": "Education",
          "keywords": ["NEET 2026", "medical entrance exam", "NEET preparation", "NEET eligibility", "NEET exam pattern", "medical college admission"]
        });
        break;

      case 'contact':
        baseSchema["@graph"].push({
          "@type": "WebPage",
          "@id": "https://neetexamcountdown.com/contact#webpage",
          "url": "https://neetexamcountdown.com/contact",
          "name": "Contact Us | NEET Exam Countdown - Get Support and Assistance",
          "isPartOf": {
            "@id": "https://neetexamcountdown.com/#website"
          },
          "description": "Contact NEET Exam Countdown for support, feedback, or inquiries. Reach us via email or Telegram for assistance with our NEET preparation tools and services.",
          "inLanguage": "en-US"
        });

        // Add ContactPage Schema
        baseSchema["@graph"].push({
          "@type": "ContactPage",
          "name": "Contact Us",
          "description": "Get in touch with the NEET Exam Countdown team for support and assistance.",
          "mainEntity": {
            "@type": "Organization",
            "name": "NEET Exam Countdown",
            "email": "neetexamcountdown@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "email": "neetexamcountdown@gmail.com"
            }
          }
        });
        break;

      case 'privacy':
        baseSchema["@graph"].push({
          "@type": "WebPage",
          "@id": "https://neetexamcountdown.com/privacy-policy#webpage",
          "url": "https://neetexamcountdown.com/privacy-policy",
          "name": "Privacy Policy | NEET Exam Countdown - Updated Feb 18, 2025",
          "isPartOf": {
            "@id": "https://neetexamcountdown.com/#website"
          },
          "description": "Read our privacy policy to understand how NEET Exam Countdown protects your data. Learn about our data collection, usage, and protection practices.",
          "inLanguage": "en-US"
        });
        break;

      case 'terms':
        baseSchema["@graph"].push({
          "@type": "WebPage",
          "@id": "https://neetexamcountdown.com/terms-and-conditions#webpage",
          "url": "https://neetexamcountdown.com/terms-and-conditions",
          "name": "Terms and Conditions | NEET Exam Countdown - Updated Feb 18, 2025",
          "isPartOf": {
            "@id": "https://neetexamcountdown.com/#website"
          },
          "description": "Read our terms and conditions to understand your rights and obligations when using NEET Exam Countdown. Learn about our service terms, user responsibilities, and legal agreements.",
          "inLanguage": "en-US"
        });
        break;
    }

    return baseSchema;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaData(), null, 2)
      }}
    />
  );
}

export default SchemaMarkup;