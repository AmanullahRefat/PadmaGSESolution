// js/data.js

// --- CATEGORIES ---
const projectCategories = {
    'all': 'All Projects',
    'gis': 'GIS & Spatial Analysis',        
    'remote-sensing': 'Remote Sensing',
    'environment': 'Environmental & Coastal',
    'urban': 'Urban Planning',
    'survey': 'Survey & Engineering',
    'web': 'Web GIS'
};

const blogCategories = {
    'all': 'All Posts',
    'Environment': 'Environment',
    'Technology': 'Technology',
    'Urban Planning': 'Urban Planning'
};

// --- PROJECTS DATA ---
const projectsData = [
    { 
        id: 'social-capital', 
        category: 'gis', 
        title: 'Social Capital Dynamics', 
        client: 'DRTMC', 
        location: 'Rural Bangladesh', 
        image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Community+Analysis', 
        summary: 'Analyzing spatial distribution of social networks in rural areas.',
        details: `
            <h4 class="text-xl font-bold mb-4">Project Overview</h4>
            <p class="mb-4">In our project on 'Social Capital Dynamics,' we conducted an in-depth analysis to understand how social networks are distributed spatially and how they influence socio-economic outcomes. Using advanced geospatial techniques, we mapped indicators of social capital, such as the density of community organizations and levels of civic participation.</p>
            <h4 class="text-xl font-bold mb-4">Key Outcomes</h4>
            <ul class="list-disc pl-5 space-y-2">
                <li>Mapped community organization density across 50 villages.</li>
                <li>Identified correlation between social hubs and economic resilience.</li>
                <li>Provided actionable data for local NGO intervention planning.</li>
            </ul>
        ` 
    },
    { 
        id: 'cyclone-shelter', 
        category: 'environment', 
        title: 'Cyclone Shelter Accessibility', 
        client: 'University of Dhaka', 
        location: 'Coastal Areas', 
        image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Coastal+Safety', 
        summary: 'Evaluating accessibility satisfaction for coastal cyclone shelters.',
        details: `
            <h4 class="text-xl font-bold mb-4">Project Overview</h4>
            <p class="mb-4">This study introduces a Cyclone Shelter Accessibility Satisfaction Index (CSASI). By integrating data on road networks, land use/land cover (LULC), and population distribution, we developed an accessibility model to evaluate how satisfied the coastal population is with their access to cyclone shelters.</p>
            <h4 class="text-xl font-bold mb-4">Methodology</h4>
            <p class="mb-4">We utilized Network Analysis in ArcGIS to calculate travel times and service areas. Population data was overlaid to identify underserved communities.</p>
        ` 
    },
    { 
        id: 'lulc-arial-beel', 
        category: 'remote-sensing', 
        title: 'LULC of Arial Beel', 
        client: 'Individual Researcher', 
        location: 'Arial Beel Wetland', 
        image: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Wetland+Monitoring', 
        summary: 'Seasonal Land Use/Land Cover classification using Google Earth Engine.',
        details: `
            <h4 class="text-xl font-bold mb-4">Project Overview</h4>
            <p class="mb-4">This study focuses on classifying the seasonal Land Use/Land Cover (LULC) of Arial Beel using the Google Earth Engine (GEE) platform. We utilized Sentinel-2 satellite imagery and employed the Random Forest (RF) machine learning algorithm to map dynamic changes in the wetland.</p>
            <h4 class="text-xl font-bold mb-4">Technologies Used</h4>
            <ul class="list-disc pl-5 space-y-2">
                <li>Google Earth Engine (GEE)</li>
                <li>Sentinel-2 Imagery</li>
                <li>Machine Learning (Random Forest)</li>
            </ul>
        ` 
    },
    {
        id: 'urban-heat',
        category: 'urban',
        title: 'Urban Heat Island Effect',
        client: 'City Corp',
        location: 'Dhaka City',
        image: 'https://placehold.co/600x400/EF4444/FFFFFF?text=Urban+Heat',
        summary: 'Analyzing surface temperature variations in dense urban areas.',
        details: `
            <h4 class="text-xl font-bold mb-4">Project Overview</h4>
            <p class="mb-4">We analyzed Land Surface Temperature (LST) using Landsat 8 thermal bands to identify urban heat islands in Dhaka. The study proposed green intervention zones to mitigate heat stress.</p>
        `
    }
];

// --- BLOG POSTS ---
const blogPosts = [
    {
        id: 1,
        title: "Integrated Coastal Zone Management (ICZM)",
        date: "March 10, 2026",
        category: "Environment",
        image: "https://www.tuckermanreef.com/images/MSP-master-diagram2.jpg",
        summary: "A deep dive into various aspects of coastal management, assessing strengths and weaknesses.",
        content: `
            <div class="prose max-w-none text-lg text-secondary leading-relaxed">
                <p class="mb-4">Coastal zones are among the most dynamic and productive ecosystems on Earth, but they are also highly vulnerable to pressures from both human activities and natural phenomena like climate change. Effective management is crucial for their long-term sustainability. Integrated Coastal Zone Management (ICZM) is a widely recognized framework for achieving this.</p>
                <img src="https://www.tuckermanreef.com/images/MSP-master-diagram2.jpg" class="w-full rounded-lg shadow-md my-6" alt="ICZM Diagram">
                <h3 class="font-bold text-2xl mt-8 mb-4 text-primary">What is ICZM?</h3>
                <p class="mb-4">ICZM is a dynamic, multidisciplinary, and iterative process to promote sustainable management of coastal zones. It covers the full cycle of information collection, planning, decision-making, management, and monitoring of implementation.</p>
                <h3 class="font-bold text-2xl mt-8 mb-4 text-primary">Why is it Important?</h3>
                <p class="mb-4">With rising sea levels and increasing population density in coastal areas, traditional management approaches are no longer sufficient. ICZM provides a holistic view, balancing environmental protection with economic development.</p>
                <h3 class="font-bold text-2xl mt-8 mb-4 text-primary">Key Principles</h3>
                <ul class="list-disc pl-6 space-y-2 mb-6">
                    <li>Integration of land and sea management.</li>
                    <li>Participatory approach involving all stakeholders.</li>
                    <li>Adaptive management based on scientific data.</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "The Future of GIS in Bangladesh",
        date: "January 15, 2026",
        category: "Technology",
        image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=GIS+Future",
        summary: "Exploring how spatial analysis is shaping urban planning in Dhaka.",
        content: `
            <div class="prose max-w-none text-lg text-secondary leading-relaxed">
                <p class="mb-4">Geographic Information Systems (GIS) are rapidly transforming how we plan and manage our cities in Bangladesh. From traffic management to drainage systems, spatial data is becoming the backbone of urban development.</p>
                <p class="mb-4">This article explores the emerging trends in GIS technology and how local firms are adopting these tools to solve indigenous problems.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Remote Sensing for Agriculture",
        date: "February 20, 2026",
        category: "Technology",
        image: "https://placehold.co/600x400/10B981/FFFFFF?text=Agri+Tech",
        summary: "How satellite imagery is helping farmers optimize crop yields.",
        content: `
             <div class="prose max-w-none text-lg text-secondary leading-relaxed">
                <p class="mb-4">Precision agriculture is no longer a futuristic concept. With readily available satellite data from Sentinel and Landsat, we can now monitor crop health, soil moisture, and pest infestation with remarkable accuracy.</p>
            </div>
        `
    }
];
