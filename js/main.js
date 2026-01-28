// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- UTILITY: OPEN MODAL ---
    window.openModal = (contentHTML) => {
        const modal = document.getElementById('universal-modal');
        const modalBody = document.getElementById('modal-body');
        const modalContentBox = document.getElementById('modal-content-box');
        
        if(modal && modalBody) {
            modalBody.innerHTML = contentHTML;
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('opacity-100');
                modalContentBox.classList.remove('scale-95');
                modalContentBox.classList.add('scale-100');
            }, 10);
        }
    };

    // --- 1. PROJECT LOGIC ---
    const projectList = document.getElementById('project-list');
    const projectFilters = document.getElementById('project-filters');

    if (projectList && typeof projectsData !== 'undefined') {
        
        // Render Filters
        if(projectFilters) {
            projectFilters.innerHTML = Object.entries(projectCategories).map(([key, label]) => `
                <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${key === 'all' ? 'active' : ''}" 
                        data-filter="${key}" onclick="filterProjects('${key}')">
                    ${label}
                </button>
            `).join('');
        }

        // Render Projects
        window.renderProjects = (category = 'all') => {
            const filtered = category === 'all' 
                ? projectsData 
                : projectsData.filter(p => p.category === category);
            
            if (filtered.length === 0) {
                projectList.innerHTML = `<div class="col-span-full text-center py-12 text-secondary">No projects found in this category.</div>`;
                return;
            }

            projectList.innerHTML = filtered.map(project => {
                const catLabel = projectCategories[project.category] || project.category;
                // Note the onclick event calling openProjectDetail
                return `
                <div class="bg-surface rounded-lg overflow-hidden shadow-lg card-hover group h-full flex flex-col">
                    <div class="relative overflow-hidden h-48 cursor-pointer" onclick="openProjectDetail('${project.id}')">
                        <img src="${project.image}" alt="${project.title}" onerror="this.src='https://placehold.co/600x400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span class="text-white font-semibold border border-white px-4 py-2 rounded-full">View Details</span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <div class="text-accent text-xs font-bold uppercase tracking-wider mb-2">${catLabel}</div>
                        <h3 class="text-xl font-bold text-primary mb-2 cursor-pointer hover:text-accent" onclick="openProjectDetail('${project.id}')">${project.title}</h3>
                        <p class="text-secondary text-sm mb-4 line-clamp-3 flex-grow">${project.summary || project.details.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...'}</p>
                        <div class="border-t border-custom pt-4 mt-auto">
                            <div class="flex justify-between text-sm text-secondary">
                                <span><i class="fas fa-user-tie mr-2"></i>${project.client || 'Client'}</span>
                                <button onclick="openProjectDetail('${project.id}')" class="text-accent font-semibold hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        };

        // Filter Function
        window.filterProjects = (category) => {
            document.querySelectorAll('#project-filters .filter-btn').forEach(btn => {
                if(btn.dataset.filter === category) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            window.renderProjects(category);
        };

        // Modal Function for Projects
        window.openProjectDetail = (id) => {
            const project = projectsData.find(p => p.id === id);
            if (!project) return;

            const content = `
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <img src="${project.image}" class="w-full rounded-lg shadow-lg mb-6" alt="${project.title}">
                        <div class="bg-background p-6 rounded-lg border border-custom">
                            <h4 class="font-bold text-primary mb-4">Project Details</h4>
                            <ul class="space-y-3 text-sm text-secondary">
                                <li class="flex justify-between border-b border-custom pb-2"><span>Client:</span> <span class="text-primary font-medium">${project.client}</span></li>
                                <li class="flex justify-between border-b border-custom pb-2"><span>Location:</span> <span class="text-primary font-medium">${project.location}</span></li>
                                <li class="flex justify-between border-b border-custom pb-2"><span>Category:</span> <span class="text-primary font-medium">${projectCategories[project.category]}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-primary mb-2">${project.title}</h2>
                        <div class="text-accent font-medium mb-6 uppercase tracking-wider text-sm">${projectCategories[project.category]}</div>
                        <div class="prose text-secondary leading-relaxed">
                            ${project.details}
                        </div>
                    </div>
                </div>
            `;
            window.openModal(content);
        };

        // Init Projects
        window.renderProjects('all');
    }

    // --- 2. BLOG LOGIC ---
    const blogList = document.getElementById('blog-list');
    
    if (blogList && typeof blogPosts !== 'undefined') {
        
        window.renderBlogPosts = () => {
             blogList.innerHTML = blogPosts.map(post => `
                <article class="bg-surface rounded-lg overflow-hidden shadow-lg card-hover flex flex-col h-full">
                    <div class="h-56 overflow-hidden cursor-pointer" onclick="openBlogModal(${post.id})">
                        <img src="${post.image}" alt="${post.title}" onerror="this.src='https://placehold.co/600x400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center text-sm text-secondary mb-3 space-x-4">
                            <span class="text-accent font-semibold">${post.category}</span>
                            <span><i class="far fa-calendar-alt mr-2"></i>${post.date}</span>
                        </div>
                        <h3 class="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer" onclick="openBlogModal(${post.id})">
                            ${post.title}
                        </h3>
                        <p class="text-secondary mb-4 flex-grow text-sm line-clamp-3">${post.summary}</p>
                        <button onclick="openBlogModal(${post.id})" class="inline-flex items-center text-accent font-semibold hover:underline bg-transparent border-none cursor-pointer p-0 text-left">
                            Read Article <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </article>
            `).join('');
        };

        window.openBlogModal = (id) => {
            const post = blogPosts.find(p => p.id == id); // loose comparison for string/int ids
            if (!post) return;

            const content = `
                <div class="max-w-3xl mx-auto">
                    <img src="${post.image}" class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-8" alt="${post.title}">
                    <div class="flex items-center justify-between text-sm text-secondary mb-6 border-b border-custom pb-4">
                        <span class="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full font-medium">${post.category}</span>
                        <span><i class="far fa-calendar-alt mr-2"></i>${post.date}</span>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">${post.title}</h1>
                    <div class="blog-content">
                        ${post.content}
                    </div>
                </div>
            `;
            window.openModal(content);
        };

        // Init Blog
        window.renderBlogPosts();
    }
});