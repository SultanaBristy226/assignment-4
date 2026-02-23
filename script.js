(function() {
    
    const jobs = [
        {
            id: 1,
            company: "Mobile First Corp",
            position: "React Native Developer",
            location: "Remote",
            type: "Full-time",
            salary: "$130,000 - $175,000",
            description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
            status: "all"
        },
        {
            id: 2,
            company: "WebFlow Agency",
            position: "Web Designer & Developer",
            location: "Los Angeles, CA",
            type: "Part-time",
            salary: "$80,000 - $120,000",
            description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
            status: "all"
        },
        {
            id: 3,
            company: "DataViz Solutions",
            position: "Data Visualization Specialist",
            location: "Boston, MA",
            type: "Full-time",
            salary: "$125,000 - $165,000",
            description: "Transform complex data into compelling visualizations. Required skills: D3js, React, and strong analytical thinking.",
            status: "all"
        },
        {
            id: 4,
            company: "CloudFirst Inc",
            position: "Backend Developer",
            location: "Seattle, WA",
            type: "Full-time",
            salary: "$140,000 - $190,000",
            description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
            status: "all"
        },
        {
            id: 5,
            company: "Innovation Labs",
            position: "UI/UX Engineer",
            location: "Austin, TX",
            type: "Full-time",
            salary: "$110,000 - $150,000",
            description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
            status: "all"
        },
        {
            id: 6,
            company: "MegaCorp Solutions",
            position: "JavaScript Developer",
            location: "New York, NY",
            type: "Full-time",
            salary: "$130,000 - $170,000",
            description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
            status: "all"
        },
        {
            id: 7,
            company: "StartupXYZ",
            position: "Full Stack Engineer",
            location: "Remote",
            type: "Full-time",
            salary: "$120,000 - $160,000",
            description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
            status: "all"
        },
        {
            id: 8,
            company: "TechCorp Industries",
            position: "Senior Frontend Developer",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$130,000 - $175,000",
            description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
            status: "all"
        }
    ];

    let currentTab = "all";

    // DOM 
    const jobsGrid = document.getElementById('jobsGrid');
    const emptyState = document.getElementById('emptyState');
    const allTab = document.getElementById('allTab');
    const interviewTab = document.getElementById('interviewTab');
    const rejectedTab = document.getElementById('rejectedTab');
    const totalCount = document.getElementById('totalCount');
    const interviewCount = document.getElementById('interviewCount');
    const rejectedCount = document.getElementById('rejectedCount');
    const jobCount = document.getElementById('jobCount');

    
    function getBadgeHtml(status) {
        if (status === 'all') {
            return `
            <div class="bg-white text-[#64748B] text-[13px] font-semibold px-4 py-1.5 rounded-full inline-flex items-center border border-[#E2E8F0] mb-3">
                NOT APPLIED
            </div>
            `;
        } else if (status === 'interview') {
            return `
            <div class="bg-green-100 text-green-700 text-[13px] font-semibold px-4 py-1.5 rounded-full inline-flex items-center border border-green-200 mb-3">
                INTERVIEW
            </div>
            `;
        } else if (status === 'rejected') {
            return `
            <div class="bg-red-100 text-red-700 text-[13px] font-semibold px-4 py-1.5 rounded-full inline-flex items-center border border-red-200 mb-3">
                REJECTED
            </div>
            `;
        }
        return '';
    }

    