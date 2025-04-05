// ScholarshipCards.jsx
import React, { useState } from 'react';

const Scholarship = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Scholarship data
  const scholarships = [
    {
      id: 1,
      title: "Post-Matric Scholarship for SC Students",
      category: "government",
      course: "All undergraduate and postgraduate courses",
      year: "All years",
      provider: "Ministry of Social Justice and Empowerment",
      eligibility: "SC students with family income below ₹2.5 lakhs per annum",
      benefits: "Covers tuition fees, maintenance allowance, and other allowances",
      documents: ["Caste certificate", "Income certificate", "Previous year marksheet", "Aadhaar card", "Bank account details"],
      applicationLink: "https://scholarships.gov.in"
    },
    {
      id: 2,
      title: "Post-Matric Scholarship for ST Students",
      category: "government",
      course: "All undergraduate and postgraduate courses",
      year: "All years",
      provider: "Ministry of Tribal Affairs",
      eligibility: "ST students with family income below ₹2.5 lakhs per annum",
      benefits: "Covers tuition fees, maintenance allowance, and other allowances",
      documents: ["Tribe certificate", "Income certificate", "Previous year marksheet", "Aadhaar card", "Bank account details"],
      applicationLink: "https://scholarships.gov.in"
    },
    {
      id: 3,
      title: "Central Sector Scheme of Scholarships (CSSS)",
      category: "government",
      course: "UG and PG programs in any discipline",
      year: "First year (renewable for subsequent years)",
      provider: "Ministry of Education",
      eligibility: "Students who are in top 20 percentile in their class 12 board exams with family income below ₹8 lakhs per annum",
      benefits: "₹12,000 per annum",
      documents: ["Class 12 marksheet", "Income certificate", "Aadhaar card", "Bank account details"],
      applicationLink: "https://scholarships.gov.in"
    },
    {
      id: 4,
      title: "Prime Minister's Scholarship Scheme for CAPF and AR",
      category: "government",
      course: "All undergraduate and professional courses",
      year: "All years",
      provider: "Ministry of Home Affairs",
      eligibility: "Wards/widows of CAPF & AR personnel",
      benefits: "₹3,000 per month for boys and ₹3,300 per month for girls",
      documents: ["Service certificate", "Death certificate (if applicable)", "Student's academic records"],
      applicationLink: "https://scholarships.gov.in"
    },
    {
      id: 5,
      title: "AICTE Pragati Scholarship for Girls",
      category: "government",
      course: "AICTE approved technical courses",
      year: "All years",
      provider: "AICTE",
      eligibility: "Girl students in technical courses with family income below ₹8 lakhs",
      benefits: "₹50,000 per annum",
      documents: ["Income certificate", "Admission letter", "Aadhaar card"],
      applicationLink: "https://www.aicte-india.org"
    },
    {
      id: 6,
      title: "Tata Scholarships",
      category: "private",
      course: "All undergraduate courses",
      year: "All years",
      provider: "Tata Trusts",
      eligibility: "Merit-based with annual family income below ₹6 lakhs",
      benefits: "Up to ₹1 lakh per annum",
      documents: ["Academic records", "Income proof", "Admission offer letter"],
      applicationLink: "https://www.tatatrusts.org"
    },
    {
      id: 7,
      title: "Reliance Foundation Scholarships",
      category: "private",
      course: "Undergraduate courses in Engineering, Sciences, Law, Management",
      year: "All years",
      provider: "Reliance Foundation",
      eligibility: "Merit-based with annual family income below ₹8 lakhs",
      benefits: "Up to ₹2 lakhs per annum",
      documents: ["Income certificate", "Academic records", "Admission letter"],
      applicationLink: "https://www.reliancefoundation.org"
    },
    {
      id: 8,
      title: "L&T Build India Scholarship",
      category: "private",
      course: "Engineering programs",
      year: "Second year onwards",
      provider: "Larsen & Toubro",
      eligibility: "Engineering students with min. 60% marks and annual family income below ₹6 lakhs",
      benefits: "Up to ₹40,000 per annum",
      documents: ["Academic records", "Income certificate", "College ID"],
      applicationLink: "#"
    },
    {
      id: 9,
      title: "Aditya Birla Scholarship",
      category: "private",
      course: "Various professional courses",
      year: "First year",
      provider: "Aditya Birla Group",
      eligibility: "Students admitted to top-tier institutes (IITs, IIMs, NLSIU, etc.)",
      benefits: "Covers tuition fees up to ₹1.75 lakhs per annum",
      documents: ["Admission letter", "Academic records", "Recommendation letters"],
      applicationLink: "https://www.adityabirla.com/scholarships"
    },
    {
      id: 10,
      title: "MCM Scholarship",
      category: "institution",
      course: "All courses at IITs",
      year: "All years",
      provider: "IITs",
      eligibility: "Merit-cum-means with family income below ₹5 lakhs",
      benefits: "Full tuition fee waiver",
      documents: ["Income certificate", "Academic records"],
      applicationLink: "Check respective IIT websites"
    },
    {
      id: 11,
      title: "KVPY Fellowship",
      category: "institution",
      course: "Basic Science courses",
      year: "All years",
      provider: "Department of Science and Technology",
      eligibility: "Students pursuing basic science courses who have cleared KVPY exam",
      benefits: "Monthly stipend of ₹5,000 to ₹7,000",
      documents: ["KVPY selection letter", "Academic records"],
      applicationLink: "http://www.kvpy.iisc.ernet.in"
    }
  ];

  // Get category color style
  const getCategoryColor = (category) => {
    switch(category) {
      case 'government':
        return 'bg-green-500';
      case 'private':
        return 'bg-red-500';
      case 'institution':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  // Filter scholarships based on category and search term
  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesCategory = activeCategory === 'all' || scholarship.category === activeCategory;
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Scholarships for Indian College Students</h1>
        <div className="flex flex-col space-y-4">
          <div className="w-full max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search scholarships..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory('government')}
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'government' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Government
            </button>
            <button 
              onClick={() => setActiveCategory('private')}
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'private' ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Private
            </button>
            <button 
              onClick={() => setActiveCategory('institution')}
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'institution' ? 'bg-yellow-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Institution
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map(scholarship => (
          <div key={scholarship.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="p-6 border-b border-gray-200 relative">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 pr-16">{scholarship.title}</h2>
              <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full text-white font-medium uppercase ${getCategoryColor(scholarship.category)}`}>
                {scholarship.category}
              </span>
            </div>
            <div className="p-6 flex-grow">
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Course: </span>
                <span className="text-sm">{scholarship.course}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Year: </span>
                <span className="text-sm">{scholarship.year}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Provider: </span>
                <span className="text-sm">{scholarship.provider}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Eligibility: </span>
                <span className="text-sm">{scholarship.eligibility}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Benefits: </span>
                <span className="text-sm">{scholarship.benefits}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Documents: </span>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  {scholarship.documents.map((doc, index) => (
                    <li key={index} className="mb-1">{doc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-center">
              <a 
                href={scholarship.applicationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredScholarships.length === 0 && (
        <div className="bg-gray-100 rounded-lg p-8 text-center mt-6">
          <p className="text-gray-600">No scholarships match your search criteria. Try adjusting your filters.</p>
        </div>
      )}
      
      <div className="mt-16 bg-gray-100 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Common Required Documents</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Aadhaar Card</li>
            <li>Income Certificate (typically issued by Tehsildar/SDM)</li>
            <li>Caste/Category Certificate (if applicable)</li>
            <li>Previous Academic Marksheets</li>
            <li>Current Admission Proof/College ID</li>
            <li>Passport-sized photographs</li>
            <li>Bank Account details (Account should be in the applicant's name)</li>
            <li>Domicile/Residence Certificate</li>
            <li>Mobile number linked with Aadhaar</li>
            <li>Email ID</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Application Tips</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Apply early as many scholarships operate on a first-come, first-served basis</li>
            <li>Keep all documents ready in digital format (PDF, typically under 200KB each)</li>
            <li>Ensure bank account is active and linked with Aadhaar</li>
            <li>Check eligibility criteria carefully before applying</li>
            <li>Follow up on applications regularly</li>
            <li>Set up email/SMS alerts for important dates</li>
            <li>Check with your college's scholarship cell for institution-specific opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;