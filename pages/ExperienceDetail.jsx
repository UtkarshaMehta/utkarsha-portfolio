import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Target, TrendingUp, CheckCircle, AlertTriangle, Award } from 'lucide-react'
import fullExperienceData from '../experience_data_full'
import DetailedCaseStudyTemplate from '../components/DetailedCaseStudyTemplate'
import Experience1DetailTemplate from '../components/Experience1DetailTemplate'
import Experience2DetailTemplate from '../components/Experience2DetailTemplate'
import Experience3DetailTemplate from '../components/Experience3DetailTemplate'
import Experience4DetailTemplate from '../components/Experience4DetailTemplate'
import Experience5DetailTemplate from '../components/Experience5DetailTemplate'
import Experience8DetailTemplate from '../components/Experience8DetailTemplate'
import Experience9DetailTemplate from '../components/Experience9DetailTemplate'
import Experience11DetailTemplate from '../components/Experience11DetailTemplate'
import Experience12DetailTemplate from '../components/Experience12DetailTemplate'
import Experience16DetailTemplate from '../components/Experience16DetailTemplate'
import Experience17DetailTemplate from '../components/Experience17DetailTemplate'

const ExperienceDetail = () => {
  const { id } = useParams()
  
  const experience = fullExperienceData.find(exp => exp.id === parseInt(id))

  // Use custom template for Experience 1
  if (experience && experience.id === 1) {
    return <Experience1DetailTemplate experience={experience} />
  }
  
  // Use custom template for Experience 2
  if (experience && experience.id === 2) {
    return <Experience2DetailTemplate experience={experience} />
  }
  
  // Use custom template for Experience 3
  if (experience && experience.id === 3) {
    return <Experience3DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 4
  if (experience && experience.id === 4) {
    return <Experience4DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 5
  if (experience && experience.id === 5) {
    return <Experience5DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 8
  if (experience && experience.id === 8) {
    return <Experience8DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 9
  if (experience && experience.id === 9) {
    return <Experience9DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 11
  if (experience && experience.id === 11) {
    return <Experience11DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 12
  if (experience && experience.id === 12) {
    return <Experience12DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 16
  if (experience && experience.id === 16) {
    return <Experience16DetailTemplate experience={experience} />
  }

  // Use custom template for Experience 17
  if (experience && experience.id === 17) {
    return <Experience17DetailTemplate experience={experience} />
  }

  if (!experience) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/experience" className="inline-flex items-center text-michigan-blue hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Experience
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-3xl font-bold michigan-blue mb-4">Experience Not Found</h1>
            <p className="text-xl text-gray-600 mb-6">The experience you are looking for does not exist.</p>
            <Link
              to="/experience"
              className="inline-flex items-center px-6 py-3 bg-michigan-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Experiences
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8 flex justify-between items-center">
          <Link to="/experience" className="inline-flex items-center text-michigan-blue hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Experience
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold michigan-blue mb-4">
                {experience.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {experience.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>
            
            {/* Key Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold michigan-blue mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">
                    {experience.company}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">
                    {experience.role}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">
                    {experience.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">
                    {experience.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Context & Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Context
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {experience.context}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Business Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {experience.businessObjective}
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        {experience.problem && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {experience.problem.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {experience.problem.description}
            </p>
            <ul className="space-y-2">
              {experience.problem.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Decision Logic */}
        {experience.decisionLogic && (
          <div className="bg-gradient-to-br from-michigan-blue to-blue-800 text-white rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Decision Logic</h2>
            <p className="leading-relaxed">
              {experience.decisionLogic}
            </p>
          </div>
        )}

        {/* Solution */}
        {experience.solution && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Solution
            </h2>
            {experience.solution.initiatives && (
              <ul className="space-y-4">
                {experience.solution.initiatives.map((initiative, index) => (
                  <li key={index}>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {initiative.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {initiative.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {experience.solution.productInsight && (
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-2">Product Insight</h3>
                <ul className="space-y-2">
                  {experience.solution.productInsight.featureArchitecture && experience.solution.productInsight.featureArchitecture.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-michigan-blue mr-2">•</span>
                      <span className="text-gray-700">
                        {feature.component}: {feature.function}
                      </span>
                    </li>
                  ))}
                </ul>
                {experience.solution.productInsight.mvpScope && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-1">MVP Scope:</h4>
                    <ul className="space-y-1">
                      {experience.solution.productInsight.mvpScope.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-michigan-blue mr-2">-</span>
                          <span className="text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {experience.solution.executionStrategy && (
              <div className="mt-4">
                <h3 className="font-bold text-gray-800 mb-2">Execution Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  {experience.solution.executionStrategy}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Execution Strategy */}
        {experience.execution && experience.execution.phases && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Execution Strategy
            </h2>
            <ol className="space-y-4 border-l-2 border-gray-200 pl-4">
              {experience.execution.phases.map((phase, index) => (
                <li key={index}>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-michigan-blue rounded-full -ml-5 mr-3"></div>
                    <h3 className="font-bold text-gray-800">
                      {phase.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {phase.description}
                  </p>
                  {phase.outcome && (
                    <p className="text-sm text-gray-500 mt-1">
                      Outcome: {phase.outcome}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Governance & Collaboration */}
        {experience.governanceCollaboration && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Governance & Collaboration
            </h2>
            <ul className="space-y-2">
              {experience.governanceCollaboration.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-michigan-blue mr-2">•</span>
                  <span className="text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {experience.challenges && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Challenges
            </h2>
            <ul className="space-y-2">
              {experience.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {experience.results && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experience.results.map((result, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  {result.icon && <span className="text-2xl mr-3">{result.icon}</span>}
                  <div>
                    <div className="text-lg font-bold michigan-blue">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {result.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Outcome */}
        {experience.strategicOutcome && (
          <div className="bg-gradient-to-br from-michigan-blue to-blue-800 text-white rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Strategic Outcome</h2>
            <p className="leading-relaxed">
              {experience.strategicOutcome}
            </p>
            {experience.quote && (
              <p className="italic mt-4 text-gray-200">
                "{experience.quote}"
              </p>
            )}
          </div>
        )}

        {/* My Role */}
        {experience.myRole && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              My Role
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Title:</span> {experience.myRole.title}
              </p>
              {experience.myRole.scope && (
                <div>
                  <p className="font-semibold text-gray-700">Scope:</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {Array.isArray(experience.myRole.scope) ? (
                      experience.myRole.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{experience.myRole.scope}</li>
                    )}
                  </ul>
                </div>
              )}
              {experience.myRole.teamInfluenced && (
                <p className="text-gray-700">
                  <span className="font-semibold">Team Influenced:</span> {experience.myRole.teamInfluenced}
                </p>
              )}
              {experience.myRole.reportingLine && (
                <p className="text-gray-700">
                  <span className="font-semibold">Reporting Line:</span> {experience.myRole.reportingLine}
                </p>
              )}
              {experience.myRole.timeframe && (
                <p className="text-gray-700">
                  <span className="font-semibold">Timeframe:</span> {experience.myRole.timeframe}
                </p>
              )}
              {experience.myRole.stakeholders && (
                <p className="text-gray-700">
                  <span className="font-semibold">Stakeholders:</span> {experience.myRole.stakeholders}
                </p>
              )}
              {experience.myRole.teamLed && (
                <p className="text-gray-700">
                  <span className="font-semibold">Team Led:</span> {experience.myRole.teamLed}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Visual Timeline */}
        {experience.visualTimeline && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Visual Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <ul className="space-y-6">
                {experience.visualTimeline.map((item, index) => (
                  <li key={index} className="relative flex items-start">
                    <div className="w-3 h-3 bg-michigan-blue rounded-full absolute -left-1.5 top-2.5"></div>
                    <div className="ml-8">
                      <h3 className="font-bold text-gray-800">{item.phase}</h3>
                      <p className="text-gray-700">{item.status}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {experience.timelineCaption && (
              <p className="text-sm text-gray-500 mt-4 italic">
                {experience.timelineCaption}
              </p>
            )}
          </div>
        )}

        {/* Before & After */}
        {experience.beforeAfter && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Before & After
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.beforeAfter.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Before:</p>
                  <p className="font-semibold text-red-600 mb-2">{item.before}</p>
                  <p className="text-sm text-gray-600 mb-1">After:</p>
                  <p className="font-semibold text-green-600">{item.after}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard Image */}
        {experience.dashboardImage && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <details className="group">
              <summary className="cursor-pointer list-none">
                <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center group-open:mb-6">
                  <Target className="h-5 w-5 mr-2" />
                  {experience.dashboardImage.title}
                  <svg className="w-5 h-5 ml-auto transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
              </summary>
              <div className="mt-4">
                <p className="text-gray-700 mb-4">{experience.dashboardImage.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <img 
                    src={experience.dashboardImage.imagePath} 
                    alt={experience.dashboardImage.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </details>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/experience"
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Experience
            </Link>
            
            <div className="flex space-x-4">
              {experience.id > 1 && (
                <Link 
                  to={`/experience/${experience.id - 1}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </Link>
              )}
              
              {experience.id < 15 && (
                <Link 
                  to={`/experience/${experience.id + 1}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceDetail


