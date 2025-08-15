import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react'
import fullExperienceData from '../experience_data_full'

const Experience = () => {
  console.log('Experience component rendering, data:', fullExperienceData);
  
  if (!fullExperienceData || fullExperienceData.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Loading experiences...</h1>
        </div>
      </div>
    );
  }

  // Group experiences by key attributes
  const supplyChainExperiences = fullExperienceData.filter(exp => 
    exp.category && (
      exp.category.includes('Supply Chain') || 
      exp.category.includes('Vendor Management') || 
      exp.category.includes('Trade Compliance') ||
      exp.category.includes('Supply Management') ||
      exp.category.includes('Procurement') ||
      exp.category.includes('Logistics')
    )
  );
  
  const programManagementExperiences = fullExperienceData.filter(exp => 
    exp.category && (
      exp.category.includes('Strategic Program') || 
      exp.category.includes('Data Governance') ||
      (exp.category.includes('Change Management') && !exp.category.includes('Design-to-Cost')) ||
      exp.category.includes('Program Management')
    )
  );
  
  const engineeringExperiences = fullExperienceData.filter(exp => 
    exp.category && (
      exp.category.includes('Engineering-Led') || 
      exp.category.includes('Systems Integration') ||
      exp.category.includes('Design-to-Cost') ||
      (exp.category.includes('Change Management') && exp.category.includes('Design-to-Cost'))
    )
  );

  const createExperienceCard = (experience) => {
    const bgColors = [
      'from-blue-600 to-blue-800',
      'from-green-600 to-green-800',
      'from-purple-600 to-purple-800',
      'from-orange-600 to-orange-800',
      'from-red-600 to-red-800'
    ];
    
    const icons = [
      '📊', '🔧', '🌐', '💡', '⚡',
      '📈', '📦', '⚙️', '⏱️', '📉',
      '💰', '🚀', '✅', '📍', '💡'
    ];

    return (
      <Link
        key={experience.id}
        to={`/experience/${experience.id}`}
        className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border hover:border-maize-yellow transform hover:-translate-y-1"
      >
         {/* Header with gradient background */}
        <div className={`h-24 bg-gradient-to-br ${bgColors[(experience.id - 1) % 5]} flex items-center justify-between p-4 text-white relative overflow-hidden`}>
          <div className="flex items-center">
            <span className="text-2xl mr-2">{icons[(experience.id - 1) % 15]}</span>
            <div>
              <div className="bg-white rounded-full px-3 py-1 text-xs font-medium mb-1 text-gray-900">
                {experience.category}
              </div>
              <div className="text-xs opacity-75">{experience.duration}</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 opacity-75 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-michigan-blue transition-colors line-clamp-2">
            {experience.title}
          </h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {experience.subtitle}
          </p>
          
          {/* Company and Role */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span className="font-medium truncate">{experience.company}</span>
            <span className="truncate ml-2">{experience.role}</span>
          </div>
          
          {/* Key Results */}
          {experience.results && experience.results.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-gray-800 mb-1">Key Results:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {experience.results.slice(0, 2).map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-1">•</span>
                    {typeof result === 'string' ? result : result.metric || result.value || result}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Skills */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {experience.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
                {experience.skills.length > 3 && (
                  <span className="text-xs text-gray-500">+{experience.skills.length - 3} more</span>
                )}
              </div>
            </div>
          )}
          
          {/* View Details */}
          <div className="flex items-center text-michigan-blue text-xs font-medium group-hover:text-blue-800">
            View Details
            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold michigan-blue mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A comprehensive portfolio of strategic sourcing and supply chain transformation initiatives 
            across manufacturing, consulting, and technology sectors
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-michigan-blue">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-michigan-blue mr-2" />
                <span className="text-2xl font-bold michigan-blue">15+</span>
              </div>
              <p className="text-gray-600 font-medium text-sm">Strategic Initiatives</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-2xl font-bold text-green-500">7+</span>
              </div>
              <p className="text-gray-600 font-medium text-sm">Cross-Functional Teams</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-maize-yellow">
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-6 w-6 text-yellow-600 mr-2" />
                <span className="text-2xl font-bold text-yellow-600">5</span>
              </div>
              <p className="text-gray-600 font-medium text-sm">Global Regions</p>
            </div>
          </div>
        </div>

        {/* Supply Chain Experiences */}
        <section id="supply-chain" className="mb-10">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Supply Chain Excellence</h2>
            <p className="text-base text-gray-600">End-to-end supply chain optimization, vendor management, and compliance initiatives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supplyChainExperiences.map(createExperienceCard)}
          </div>
        </section>

        {/* Program Management Experiences */}
        <section id="program-management" className="mb-10">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Program Management</h2>
            <p className="text-base text-gray-600">Leading cross-functional teams and strategic initiatives to successful completion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programManagementExperiences.map(createExperienceCard)}
          </div>
        </section>

        {/* Engineering Experiences */}
        <section id="engineering" className="mb-10">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-michigan-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Engineering Excellence</h2>
            <p className="text-base text-gray-600">Engineering-led cost optimization and operational efficiency through systematic approaches</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringExperiences.map(createExperienceCard)}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience

