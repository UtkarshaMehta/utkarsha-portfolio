import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react'

const Results = () => {
  const results = [
    {
      id: 1,
      title: "60% MoM Cost Reduction",
      description: "Streamlined procurement processes and optimized supplier negotiations",
      impact: "Significant cost savings through strategic sourcing initiatives",
      category: "Cost Optimization",
      experienceId: 3,
      icon: DollarSign,
      color: "green"
    },
    {
      id: 2,
      title: "8x Sales Improvement",
      description: "Enhanced supply chain efficiency and demand planning accuracy",
      impact: "Dramatic revenue growth through operational excellence",
      category: "Revenue Growth",
      experienceId: 5,
      icon: TrendingUp,
      color: "blue"
    },
    {
      id: 3,
      title: "1600+ Hours Streamlined",
      description: "Automated manual processes and eliminated operational inefficiencies",
      impact: "Massive productivity gains through process optimization",
      category: "Process Efficiency",
      experienceId: 7,
      icon: Clock,
      color: "purple"
    },
    {
      id: 4,
      title: "Cross-Functional Team Leadership",
      description: "Led diverse teams across multiple departments and geographies",
      impact: "Successful delivery of complex initiatives through collaborative leadership",
      category: "Leadership",
      experienceId: 2,
      icon: Users,
      color: "orange"
    },
    {
      id: 5,
      title: "Supply Chain Resilience",
      description: "Built robust supply networks capable of handling disruptions",
      impact: "Enhanced business continuity and risk mitigation",
      category: "Risk Management",
      experienceId: 1,
      icon: TrendingUp,
      color: "red"
    },
    {
      id: 6,
      title: "Data-Driven Decision Making",
      description: "Implemented analytics frameworks for strategic insights",
      impact: "Improved decision quality through quantitative analysis",
      category: "Analytics",
      experienceId: 4,
      icon: TrendingUp,
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      red: "bg-red-100 text-red-800 border-red-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200"
    }
    return colorMap[color] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getIconColorClasses = (color) => {
    const colorMap = {
      green: "bg-green-600",
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600",
      red: "bg-red-600",
      indigo: "bg-indigo-600"
    }
    return colorMap[color] || "bg-gray-600"
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold michigan-blue mb-6">
            Measurable Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quantifiable impact across supply chain optimization, cost reduction, 
            and operational excellence initiatives. Results that matter to executives.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {results.map((result) => {
            const IconComponent = result.icon
            return (
              <div key={result.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 ${getIconColorClasses(result.color)} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(result.color)}`}>
                    {result.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {result.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {result.description}
                </p>
                
                <p className="text-sm text-gray-500 mb-6 italic">
                  {result.impact}
                </p>
                
                <Link 
                  to={`/experience/${result.experienceId}`}
                  className="inline-flex items-center text-michigan-blue hover:text-blue-800 font-semibold transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold michigan-blue mb-6">
              Ready to Drive Similar Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how these proven methodologies and strategic approaches 
              can be applied to your organization's unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-michigan-blue text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                Let's Connect
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link 
                to="/experience"
                className="inline-flex items-center px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-lg"
              >
                View All Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results

