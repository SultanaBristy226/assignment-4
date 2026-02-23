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

    // Render function
    function renderJobs() {
        let filtered = jobs;
        if (currentTab === 'interview') {
            filtered = jobs.filter(j => j.status === 'interview');
        } else if (currentTab === 'rejected') {
            filtered = jobs.filter(j => j.status === 'rejected');
        }

        jobCount.textContent = filtered.length + ' jobs';

        if (filtered.length === 0) {
            emptyState.classList.remove('hidden');
            jobsGrid.innerHTML = '';
            return;
        }
        
        emptyState.classList.add('hidden');

        jobsGrid.innerHTML = filtered.map(job => {
            const badgeHtml = getBadgeHtml(job.status);
            
            return `
            <div class="bg-white border border-[#E2E8F0] rounded-2xl p-6 transition-all relative">
                <!-- Delete Icon -->
                <button onclick="window.deleteJob(${job.id})" class="absolute top-4 right-4 w-8 h-8 bg-[#F7F9FC] hover:bg-red-100 rounded-full flex items-center justify-center text-[#A0AEC0] hover:text-red-500 transition-all cursor-pointer">
                    <i class="fa-regular fa-trash-can text-sm"></i>
                </button>
                
                <!-- Company Name (top) -->
                <h3 class="font-bold text-[#002C5C] text-xl mb-3">${job.company}</h3>
                
                <!-- Position -->
                <h4 class="text-lg text-[#64748B] mb-2">${job.position}</h4>
                
                <!-- Location, Type, Salary in one line with dots -->
                <div class="flex items-center gap-2 text-sm text-[#64748B] mb-4">
                    <span>${job.location}</span>
                    <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>${job.type}</span>
                    <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>${job.salary}</span>
                </div>
                
                <!-- Status Badge -->
                ${badgeHtml}
                
                <!-- Description -->
                <p class="text-[#323B49] text-sm leading-relaxed mb-6">
                    ${job.description}
                </p>
                
                <!-- Action Buttons side by side - width কমানো হয়েছে -->
                <div class="flex gap-2">
                    <button onclick="window.toggleStatus(${job.id}, 'interview')" 
                        class="bg-white text-green-600 border border-green-600 px-3 py-1 rounded-lg font-semibold text-sm hover:bg-green-50 transition-all cursor-pointer">
                        INTERVIEW
                    </button>
                    
                    <button onclick="window.toggleStatus(${job.id}, 'rejected')" 
                        class="bg-white text-red-600 border border-red-600 px-3 py-1 rounded-lg font-semibold text-sm hover:bg-red-50 transition-all cursor-pointer">
                        REJECTED
                    </button>
                </div>
            </div>
        `}).join('');
        
        updateCounts();
    }

    window.toggleStatus = function(id, status) {
        const job = jobs.find(j => j.id === id);
        
        if (job.status === status) {
            job.status = 'all';
        } else {
            job.status = status;
        }
        
        renderJobs();
    };

    // Delete
    window.deleteJob = function(id) {
        const index = jobs.findIndex(j => j.id === id);
        if (index !== -1) {
            jobs.splice(index, 1);
        }
        renderJobs();
    };
    function updateCounts() {
        const total = jobs.length;
        const interview = jobs.filter(j => j.status === 'interview').length;
        const rejected = jobs.filter(j => j.status === 'rejected').length;
        
        totalCount.textContent = total;
        interviewCount.textContent = interview;
        rejectedCount.textContent = rejected;
    }
    window.switchTab = function(tab) {
        currentTab = tab;
        
        allTab.className = tab === 'all' 
            ? 'bg-[#3B82F6] text-white rounded-2xl px-6 py-2 font-medium text-sm cursor-pointer'
            : 'bg-white border border-[#E2E8F0] rounded-2xl px-6 py-2 text-[#64748B] font-medium text-sm cursor-pointer';
        
        interviewTab.className = tab === 'interview'
            ? 'bg-[#3B82F6] text-white rounded-2xl px-6 py-2 font-medium text-sm cursor-pointer'
            : 'bg-white border border-[#E2E8F0] rounded-2xl px-6 py-2 text-[#64748B] font-medium text-sm cursor-pointer';
        
        rejectedTab.className = tab === 'rejected'
            ? 'bg-[#3B82F6] text-white rounded-2xl px-6 py-2 font-medium text-sm cursor-pointer'
            : 'bg-white border border-[#E2E8F0] rounded-2xl px-6 py-2 text-[#64748B] font-medium text-sm cursor-pointer';
        
        renderJobs();
    };
    renderJobs();
})();