import { Mail, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold michigan-blue mb-8">
            Let's Connect
          </h1>
        </div>

        {/* Contact Options */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a                href="mailto:utkarsha@umich.edu"              className="inline-flex items-center px-8 py-4 bg-michigan-blue text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                <Mail className="mr-3 h-5 w-5" />
                Email Me Directly
              </a>
              <a 
                href="https://www.linkedin.com/in/utkarshamehta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

