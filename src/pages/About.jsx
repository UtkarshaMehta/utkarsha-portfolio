import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold michigan-blue mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the professional achievements
          </p>
        </div>

        {/* About Me Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold michigan-blue mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I run sourcing and factory execution programs that stay steady when the plan meets real world turbulence. 
                Mechanical engineering taught how tight a tolerance must be. A Michigan Ross MS taught me the cost of every trade off. 
                Leading global supply chains showed me execution means nothing unless every detail aligns.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My operating principle is simple: keep supply flowing, operations informed, and teams aligned even in uncertainty. 
                To learn more about my experience or plans must flex, execution must hold, and clarity must persist—especially in uncertainty.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/about-me-photo.jpg" 
                  alt="Utkarsha Mehta - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section 
          className="mb-12 rounded-lg p-8 relative"
          style={{
            backgroundImage: 'url(/about-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                  My Story
              </h2>
            </div>
            <p className="text-lg text-white mb-4 leading-relaxed">
                Growing up in Solapur, India, one missing CNC tool or market shift meant business disruption. 
                Later, delays in critical medicines during COVID made those stakes profoundly personal. 
                These experiences shaped my belief in robust planning combined with relentless adaptability.
            </p>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold michigan-blue mb-4">
                  My Purpose
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                  What drives me today is execution that holds under pressure—materials arrive on time, 
                  production flows uninterrupted, promises are kept with quality and consistency. 
                  My goal is to build ecosystems that reduce global fragility, balance cost with conscience, 
                  and keep products affordable and on schedule—whether they ship to a kid in Boise or my cousin in Solapur.
              </p>
            </div>
            <h3 className="text-xl font-bold text-white mb-6 text-center">
                Principles That Guide Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-95 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🔍</span>
                </div>
                <h4 className="text-lg font-bold michigan-blue mb-1">
                    Pluralism
                </h4>
                <h5 className="text-sm text-gray-600 mb-3">
                    (Anekāntavāda)
                </h5>
                <p className="text-gray-700">
                    Multiple perspectives can hold truth.
                </p>
              </div>
              <div className="bg-white bg-opacity-95 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⚡</span>
                </div>
                <h4 className="text-lg font-bold michigan-blue mb-1">
                    Magnanimity
                </h4>
                <h5 className="text-sm text-gray-600 mb-3">
                    (Shishtāchāra Praśansak)
                </h5>
                <p className="text-gray-700">
                    Recognize and value the good in others.
                </p>
              </div>
              <div className="bg-white bg-opacity-95 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🎯</span>
                </div>
                <h4 className="text-lg font-bold michigan-blue mb-1">
                    Fairness/Integrity
                </h4>
                <h5 className="text-sm text-gray-600 mb-3">
                    (Avarṇavāda Na Kwāpi)
                </h5>
                <p className="text-gray-700">
                    Never assign fault without cause.
                </p>
              </div>
            </div>
            <p className="text-lg text-white mt-6 leading-relaxed text-center">
                My strength lies at the intersection of strategic sourcing decisions and operational execution—ensuring boardroom clarity translates seamlessly to frontline reality.
            </p>
          </div>
        </section>

        {/* Core Values (SCALE) */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold michigan-blue mb-4">Core Values: SCALE</h2>
            <p className="text-xl text-gray-600">
              The principles that guide my approach to work and life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Simplify</h3>
              <p className="text-sm text-gray-600">
                Streamlining processes and eliminating unnecessary complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Challenge</h3>
              <p className="text-sm text-gray-600">
                Questioning assumptions and pushing boundaries for continuous improvement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Accelerate</h3>
              <p className="text-sm text-gray-600">
                Driving rapid execution and achieving impactful results efficiently.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">L</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Lead by Example</h3>
              <p className="text-sm text-gray-600">
                Inspiring and guiding teams through integrity and hands-on involvement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Empower</h3>
              <p className="text-sm text-gray-600">
                Fostering growth and enabling others to take ownership and succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Accomplishments */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold michigan-blue mb-4">Accomplishments</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4 leading-relaxed ml-4">
                <li>Reduced BOM costs by 60%+ to achieve profitability and enable competitive pricing with superior quality</li>
                <li>Merit Scholarship recipient, Ross School of Business</li>
                <li>3+ technical publications</li>
                <li>Select Distinguished Club Award, Toastmasters International (as President)</li>
                <li>Outstanding Contribution Award recipient</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <video 
                controls 
                className="w-full max-w-md rounded-lg shadow-lg"
                poster="/journey-6.jpg"
              >
                <source src="/achievement-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Extra-curricular */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold michigan-blue mb-4">Beyond Work</h2>
            <p className="text-xl text-gray-600">
              Activities and interests that keep me balanced and inspired
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-maize-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Volunteer Mentorship</h3>
              <p className="text-gray-600">
                Guiding early-career professionals has helped me strengthen my own leadership and communication.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-maize-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Photography</h3>
              <p className="text-gray-600">
                Capturing moments and perspectives through the lens.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-maize-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛰️</span>
              </div>
              <h3 className="text-lg font-semibold michigan-blue mb-2">Hiking</h3>
              <p className="text-gray-600">
                Exploring nature and finding inspiration in the outdoors.
              </p>
            </div>
          </div>
        </section>

        {/* Frames from the Journey / Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold michigan-blue mb-4">Frames from the Journey</h2>
            <p className="text-xl text-gray-600">
              A visual diary of moments that shaped my path
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-1.jpg" alt="Professional collaboration in yellow dress" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-2.jpg" alt="Professional meeting with colleague" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-3.jpg" alt="Michigan Ross group selfie" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-4.jpg" alt="Michigan Ross formal group photo" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-5.jpg" alt="Michigan Ross team with faculty" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/journey-6.jpg" alt="Professional networking event" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About

