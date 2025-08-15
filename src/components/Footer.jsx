import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-michigan-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Professional Portfolio</h3>
            <div className="flex space-x-4">
              <a                href="mailto:utkarsha@umich.edu"             className="text-gray-300 hover:text-maize-yellow transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/utkarshamehta/"
                className="text-gray-300 hover:text-maize-yellow transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-maize-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-maize-yellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-maize-yellow transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-maize-yellow transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>utkarsha@umich.edu</span>
              <span>utkarsha@umich.edu</span>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2" />
                <a href="https://www.linkedin.com/in/utkarshamehta/" className="hover:text-maize-yellow transition-colors">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-300">
          <p>&copy; 2025 Professional Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

