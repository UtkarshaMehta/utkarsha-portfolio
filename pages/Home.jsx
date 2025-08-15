import { ArrowRight, ChevronRight, Globe, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(135deg, #00274C 0%, #1a4a7a 100%), url('/hero-background.png')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Utkarsha Mehta
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Supply chain leader | Program Manager | Material Planner
            </p>
            <p className="text-lg mb-8 text-blue-50 leading-relaxed">
              I optimize supply chains and streamline processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl">
                <img 
                  src="/profile-photo-original.jpg" 
                  alt="Professional Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From First Principles to Factory Operations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From First Principles to Factory Operations
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Forward-looking supply chain leader with a Master's in Supply Chain Management from Ross School of Business - University of Michigan, Ann Arbor. Proven track record in driving transformative changes, reducing costs, and enhancing operational efficiency. Skilled in supply strategy, total cost to serve (TCO), and Sales and Operations Planning (S&OP). Committed to build a resilient supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg relative group">
              <a href="#companies" className="block">
                <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 cursor-pointer">
                  5+
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Experience</h3>
                <p className="text-gray-600">Driving operational excellence across industries</p>
              </a>
              
              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-gray-900 text-white text-sm rounded-lg p-3 whitespace-nowrap shadow-lg">
                  <div className="space-y-1">
                    <div>Cover: 2.5 Yr</div>
                    <div>Atlas Copco: 1.5 Yr</div>
                    <div>Kearney: 4 Mo</div>
                    <div>Refraction AI: 4 Mo</div>
                    <div>Michigan Ross: 4 Mo</div>
                    <div>Arihant Engineering: 1.5 Yr</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Link to="/experience#program-management" className="block">
                <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3+
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Programs Led</h3>
                <p className="text-gray-600">Leading cross-functional initiatives to successful completion</p>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <button 
                onClick={() => setShowResults(!showResults)}
                className="block w-full text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Results Driven</h3>
                <p className="text-gray-600">Delivering measurable impact and value</p>
              </button>
            </div>
          </div>
          
          {/* Collapsible Results Section */}
          {showResults && (
            <div className="mt-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Executive Impact Summary</h3>
                <p className="text-blue-100">
                  Proven track record of delivering transformational results across supply chain operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-blue-50">
                    <strong className="text-white">Achieved 60% month-over-month cost reduction</strong> through strategic vendor consolidation and commercial term renegotiation at Cover
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-blue-50">
                    <strong className="text-white">Delivered 8x sales improvement</strong> by optimizing supply chain processes and implementing demand forecasting models
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-blue-50">
                    <strong className="text-white">Streamlined 1600+ hours annually</strong> through process automation and workflow optimization initiatives
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-blue-50">
                    <strong className="text-white">Reduced inventory by 49%</strong> using ABC-XYZ analysis and demand planning optimization at Atlas Copco
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-blue-50">
                    <strong className="text-white">Generated $2.3M annual savings</strong> through parametric cost modeling and regional sourcing strategy optimization
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <button 
                  onClick={() => setShowResults(false)}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                >
                  Collapse ↑
                </button>
              </div>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get to Know Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Companies I've Worked With
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading organizations across industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            <div className="relative">
              <a href="https://buildcover.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm w-40 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src="/download.png" 
                  alt="Cover Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Full-time</span>
              </div>
            </div>
            
            <div className="relative">
              <a href="https://refraction.ai" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm w-40 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src="/download(1).png" 
                  alt="Refraction AI Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Internship</span>
              </div>
            </div>
            
            <div className="relative">
              <a href="https://www.kearney.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm w-40 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src="/download(2).png" 
                  alt="Kearney Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Internship</span>
              </div>
            </div>
            
            <div className="relative">
              <a href="https://michiganross.umich.edu" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm w-40 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src="/download(3).png" 
                  alt="Michigan Ross Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Internship</span>
              </div>
            </div>
            
            <div className="relative">
              <a href="https://www.atlascopco.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm w-40 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                <img 
                  src="/download(4).png" 
                  alt="Atlas Copco Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </a>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Capabilities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills & Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Core competencies that drive operational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sourcing & Vendor Management */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sourcing & Vendor Management</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Should-cost modeling</li>
                <li>• Dual-source strategies</li>
                <li>• Negotiation, Service level agreement</li>
                <li>• Total Cost of Ownership (TCO)</li>
              </ul>
            </div>

            {/* NPI & Ramp Execution */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">NPI & Ramp Execution</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• EVT/DVT/PVT phases</li>
                <li>• Ramp readiness reviews</li>
                <li>• Line-side issue closure</li>
                <li>• Change management</li>
                <li>• ERP, MRP, SAP</li>
              </ul>
            </div>

            {/* Planning & Operations */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-yellow-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planning & Operations</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• S&OP/MRP planning</li>
                <li>• Inventory/allocations</li>
                <li>• OTIF, EOQ optimization</li>
                <li>• ABC, ABC-XYZ analysis</li>
              </ul>
            </div>

            {/* Supplier Development & Quality */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supplier Development & Quality</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• APQP/PPAP processes</li>
                <li>• 8D/CAPA methodologies</li>
                <li>• Yield/DPPM tracking</li>
                <li>• VSM, RCA, DMAIC</li>
              </ul>
            </div>

            {/* Risk, Compliance & Trade */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk, Compliance & Trade</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Continuity scenarios</li>
                <li>• HTS classification</li>
                <li>• AD/CVD compliance</li>
              </ul>
            </div>

            {/* Data Analytics and BI */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-indigo-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Analytics and BI</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tableau, Power BI</li>
                <li>• Metabase, SQL</li>
                <li>• KPI tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Attributes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Attributes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain</h3>
              <p className="text-gray-600 mb-6">
                End-to-end supply chain optimization, from strategic sourcing to delivery excellence
              </p>
              <Link 
                to="/experience#supply-chain" 
                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
              >
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Management</h3>
              <p className="text-gray-600 mb-6">
                Leading cross-functional teams to deliver complex initiatives on time and within budget
              </p>
              <Link 
                to="/experience#program-management" 
                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
              >
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering</h3>
              <p className="text-gray-600 mb-6">
                Engineering-led cost optimization and operational efficiency through systematic approaches
              </p>
              <Link 
                to="/experience#engineering" 
                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
              >
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Education
            </h2>
            <p className="text-xl text-gray-200">
              Academic foundation that shapes my analytical approach
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Graduate Education */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-maize-yellow rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white bg-gray-900 bg-opacity-70 px-3 py-1 rounded">Master's Degree</h3>
                  <p className="text-gray-900 text-sm bg-white bg-opacity-90 px-2 py-1 rounded mt-1">Graduate Studies</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 bg-white bg-opacity-90 p-2 rounded">MS in Supply Chain Management</h4>
              <p className="text-gray-900 mb-4 bg-white bg-opacity-80 p-2 rounded">Stephen M. Ross School of Business</p>
              <p className="text-gray-900 font-medium bg-white bg-opacity-80 p-2 rounded">University of Michigan, Ann Arbor</p>
            </div>

            {/* Undergraduate Education */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white bg-gray-900 bg-opacity-70 px-3 py-1 rounded">Bachelor's Degree</h3>
                  <p className="text-gray-900 text-sm bg-white bg-opacity-90 px-2 py-1 rounded mt-1">Undergraduate Studies</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 bg-white bg-opacity-90 p-2 rounded">BE in Mechanical Engineering</h4>
              <p className="text-gray-900 mb-4 bg-white bg-opacity-80 p-2 rounded">Walchand Institute of Technology</p>
              <p className="text-gray-900 font-medium bg-white bg-opacity-80 p-2 rounded">Solapur University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommendations
            </h2>
            <p className="text-xl text-gray-600">
              Thoughtful reflections from those who've shared this path with me
            </p>
          </div>
          
          {/* Horizontal Slider Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{width: 'max-content'}}>
                {/* Recommendation 1 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "Utkarsha is incredibly sharp and thoughtful. Her ability to bring structure to chaos is unmatched."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Supply Chain Manager
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Cover
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 2 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "Utkarsha's efforts have directly contributed to substantial cost savings and improved operational efficiencies, distinguishing her as a key asset to our team."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Vishal Mane, Manager
                      </p>
                      <p className="text-sm opacity-90">
                        Cover
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 3 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "She has a deep passion for analysis and she has been one of the few exceptionally enthusiastic and confident engineers that I have encountered."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Logistics Manager
                      </p>
                      <p className="text-sm opacity-90">
                        Atlas Copco ISC, Pune
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 4 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "Her enthusiasm and dedication towards the work is clearly more than the other management trainees. She's unflappable and focused."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Gaurav Joshi, Plant Manager
                      </p>
                      <p className="text-sm opacity-90">
                        Hempel Paints
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 5 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "After the completion of the project, the inventory was reduced by 49% optimizing costs and space."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Logistics Manager
                      </p>
                      <p className="text-sm opacity-90">
                        Atlas Copco ISC, Pune
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 6 */}
                <div className="w-96 bg-white rounded-xl shadow-lg relative overflow-hidden flex-shrink-0"
                     style={{backgroundImage: 'url(/WhatsAppImage2025-08-10at19.18.23_3295def2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="relative z-10 p-8 text-white">
                    <blockquote className="text-lg italic mb-6">
                      "Utkarsha consistently demonstrates exceptional analytical skills and strategic thinking in complex supply chain challenges."
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold">
                        Senior Supply Chain Director
                      </p>
                      <p className="text-sm opacity-90">
                        Fortune 500 Manufacturing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-michigan-blue rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Bridge the Gap!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready when you are. If something here resonates with you—whether it's a project, a role, or just a shared interest in building better systems, I'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

