import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Target, Settings, Play, BarChart3, TrendingUp, TrendingDown, Users, FileText, CheckCircle, AlertTriangle, Lightbulb, Zap, Clock, DollarSign, Package, Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experience16DetailTemplate = ({ experience }) => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    problemDiagnosis: true,
    keyDecisions: true,
    keyActions: true,
    keyLessons: true,
    challenges: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ title, children, icon: Icon, defaultExpanded = false, sectionKey }) => {
    const isExpanded = expandedSections[sectionKey] ?? defaultExpanded;
    
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="w-5 h-5 text-blue-600" />}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>
    );
  };

  const ResultCard = ({ metric, value, detail, icon: Icon, color = "blue" }) => (
    <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg p-4 border border-${color}-200`}>
      <div className="flex items-center justify-between mb-2">
        {Icon && <Icon className={`w-6 h-6 text-${color}-600`} />}
        <span className={`text-2xl font-bold text-${color}-700`}>{value}</span>
      </div>
      <h4 className={`font-semibold text-${color}-800 mb-1`}>{metric}</h4>
      {detail && <p className={`text-sm text-${color}-600`}>{detail}</p>}
    </div>
  );

  const ExecutiveSummaryCard = ({ title, content, icon: Icon, color }) => (
    <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg p-6 border border-${color}-200`}>
      <div className="flex items-center mb-3">
        <Icon className={`w-6 h-6 text-${color}-600 mr-3`} />
        <h3 className={`text-lg font-semibold text-${color}-800`}>{title}</h3>
      </div>
      <p className={`text-${color}-700 leading-relaxed`}>{content}</p>
    </div>
  );

  const DecisionCard = ({ decision, index }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{decision.title}</h4>
          <p className="text-gray-700">{decision.description}</p>
        </div>
      </div>
    </div>
  );

  const ActionCard = ({ action, index }) => {
    const icons = {
      "Strategic Alignment": Target,
      "MTS Program Structuring": Settings,
      "Execution Support": Play
    };
    
    const Icon = icons[action.category] || Target;
    const colors = ['blue', 'green', 'purple'];
    const color = colors[index % colors.length];
    
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 bg-${color}-600 rounded-full flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{action.category}</h4>
            <div className="space-y-2">
              {action.actions.map((actionItem, actionIndex) => (
                <div key={actionIndex} className="flex items-start space-x-2">
                  <div className={`w-2 h-2 bg-${color}-600 rounded-full mt-2 flex-shrink-0`}></div>
                  <p className="text-sm text-gray-700">{actionItem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LessonCard = ({ lesson, index }) => {
    const colors = ['green', 'blue', 'purple', 'orange'];
    const color = colors[index % colors.length];
    
    return (
      <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg p-4 border border-${color}-200`}>
        <div className="flex items-center mb-2">
          <Lightbulb className={`w-5 h-5 text-${color}-600 mr-2`} />
          <h4 className={`font-semibold text-${color}-800`}>{lesson.title}</h4>
        </div>
        <p className={`text-sm text-${color}-700`}>{lesson.description}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-3">{experience.title}</h1>
              <p className="text-xl text-indigo-100 mb-4">{experience.subtitle}</p>
              <p className="text-lg text-indigo-50">{experience.description}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Project Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-indigo-200">Company:</span>
                  <span className="font-medium">{experience.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Role:</span>
                  <span className="font-medium">{experience.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Duration:</span>
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-200">Category:</span>
                  <span className="font-medium">{experience.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Executive Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <ExecutiveSummaryCard
                title="Challenge"
                content={experience.executiveSummary.challenge}
                icon={AlertTriangle}
                color="red"
              />
              <ExecutiveSummaryCard
                title="Solution"
                content={experience.executiveSummary.solution}
                icon={Target}
                color="blue"
              />
              <ExecutiveSummaryCard
                title="Impact"
                content={experience.executiveSummary.impact}
                icon={TrendingUp}
                color="green"
              />
            </div>

            {/* Context */}
            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-orange-800">
                <Target className="w-6 h-6 mr-3" />
                Context & Challenge
              </h2>
              <p className="text-orange-700">{experience.context}</p>
            </div>

            {/* Problem Diagnosis */}
            <CollapsibleSection
              title="Problem Diagnosis"
              icon={AlertTriangle}
              defaultExpanded={true}
              sectionKey="problemDiagnosis"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {experience.problemDiagnosis?.map((problem, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-red-800 text-sm">{problem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Key Decisions */}
            <CollapsibleSection
              title="Key Decisions"
              icon={CheckCircle}
              defaultExpanded={true}
              sectionKey="keyDecisions"
            >
              <div className="space-y-6 mt-4">
                {experience.keyDecisions?.map((decision, index) => (
                  <DecisionCard key={index} decision={decision} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Key Actions */}
            <CollapsibleSection
              title="Key Actions Taken"
              icon={Play}
              defaultExpanded={true}
              sectionKey="keyActions"
            >
              <div className="space-y-6 mt-4">
                {experience.keyActions?.map((action, index) => (
                  <ActionCard key={index} action={action} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Key Lessons */}
            <CollapsibleSection
              title="Key Lessons Learned"
              icon={Lightbulb}
              defaultExpanded={true}
              sectionKey="keyLessons"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {experience.keyLessons?.map((lesson, index) => (
                  <LessonCard key={index} lesson={lesson} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Challenges */}
            <CollapsibleSection
              title="Challenges & Solutions"
              icon={Zap}
              defaultExpanded={true}
              sectionKey="challenges"
            >
              <div className="space-y-3 mt-4">
                {experience.challenges?.map((challenge, index) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <p className="text-yellow-800 text-sm">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Strategic Outcome */}
            <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-green-800">
                <CheckCircle className="w-6 h-6 mr-3" />
                Strategic Outcome
              </h2>
              <p className="text-green-700">{experience.strategicOutcome}</p>
            </div>

            {/* Quote */}
            {experience.quote && (
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-l-4 border-indigo-500 rounded-lg p-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "{experience.quote}"
                </blockquote>
                <cite className="text-sm font-medium text-gray-600">— {experience.quoteAuthor}</cite>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Results & Impact */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Results & Impact
              </h3>
              <div className="space-y-4">
                {experience.results?.map((result, index) => {
                  const colors = ['green', 'blue', 'purple', 'orange', 'indigo', 'pink'];
                  const color = colors[index % colors.length];
                  
                  // Choose appropriate icon based on metric type
                  let icon = TrendingUp;
                  if (result.value.includes('↓') || result.metric.toLowerCase().includes('cost') || result.metric.toLowerCase().includes('time')) {
                    icon = result.value.includes('↓') ? TrendingDown : Clock;
                  } else if (result.metric.toLowerCase().includes('capacity') || result.metric.toLowerCase().includes('production')) {
                    icon = Factory;
                  } else if (result.metric.toLowerCase().includes('cost') || result.metric.toLowerCase().includes('savings')) {
                    icon = DollarSign;
                  } else if (result.metric.toLowerCase().includes('coverage') || result.metric.toLowerCase().includes('volume')) {
                    icon = Package;
                  }
                  
                  return (
                    <ResultCard 
                      key={index}
                      metric={result.metric}
                      value={result.value}
                      detail={result.detail}
                      icon={icon}
                      color={color}
                    />
                  );
                })}
              </div>
            </div>

            {/* My Role */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-indigo-600" />
                My Role
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Title:</span>
                  <p className="text-gray-600">{experience.myRole?.title}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Scope:</span>
                  <p className="text-gray-600">{experience.myRole?.scope}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Key Responsibilities:</span>
                  <ul className="text-gray-600 mt-1 space-y-1">
                    {experience.myRole?.keyResponsibilities?.map((resp, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Stakeholders:</span>
                  <p className="text-gray-600">{experience.myRole?.stakeholders}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Team Influenced:</span>
                  <p className="text-gray-600">{experience.myRole?.teamInfluenced}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Reporting Line:</span>
                  <p className="text-gray-600">{experience.myRole?.reportingLine}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Timeframe:</span>
                  <p className="text-gray-600">{experience.myRole?.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/experience')}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Experience</span>
          </button>
          
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/experience/14')}
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => navigate('/experience/1')}
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience16DetailTemplate;

