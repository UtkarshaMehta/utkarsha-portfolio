import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, TrendingUp, BarChart3, Calculator } from 'lucide-react'
import caseStudiesData from '../case_studies_data'

const CaseStudies = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Operations Research':
        return <BarChart3 className="h-6 w-6" />
      case 'Supply Chain Analytics':
        return <TrendingUp className="h-6 w-6" />
      case 'Network Design':
        return <Users className="h-6 w-6" />
      case 'Mathematical Optimization':
        return <Calculator className="h-6 w-6" />
      case 'Cost Engineering':
        return <BarChart3 className="h-6 w-6" />
      default:
        return <BarChart3 className="h-6 w-6" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Operations Research':
        return 'bg-blue-100 text-blue-800'
      case 'Supply Chain Analytics':
        return 'bg-green-100 text-green-800'
      case 'Network Design':
        return 'bg-purple-100 text-purple-800'
      case 'Mathematical Optimization':
        return 'bg-orange-100 text-orange-800'
      case 'Cost Engineering':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold michigan-blue mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            In-depth analytical projects showcasing quantitative problem-solving, 
            optimization techniques, and strategic decision-making across diverse business challenges
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-michigan-blue">
              <div className="text-2xl font-bold michigan-blue">15</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600">8+</div>
              <div className="text-sm text-gray-600">Analytical Tools</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-gray-600">Weeks of Analysis</div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Header with Category */}
              <div className="h-32 bg-gradient-to-br from-michigan-blue to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(caseStudy.category)}`}>
                    {getCategoryIcon(caseStudy.category)}
                    <span className="ml-2">{caseStudy.category}</span>
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1 line-clamp-2">{caseStudy.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{caseStudy.subtitle}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                  {caseStudy.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {caseStudy.keyMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold michigan-blue">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {caseStudy.tools.slice(0, 3).map((tool, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tool}
                      </span>
                    ))}
                    {caseStudy.tools.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{caseStudy.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <Link 
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-michigan-blue hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                >
                  View Detailed Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudies

