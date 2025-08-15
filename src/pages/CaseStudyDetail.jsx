import { useParams } from 'react-router-dom'
import caseStudiesData from '../case_studies_data'
import CaseStudyDetailTemplate from '../components/CaseStudyDetailTemplate'

const CaseStudyDetail = () => {
  const { id } = useParams()
  const caseStudy = caseStudiesData.find(cs => cs.id === parseInt(id))

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600">The case study you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return <CaseStudyDetailTemplate caseStudy={caseStudy} />
}

export default CaseStudyDetail

