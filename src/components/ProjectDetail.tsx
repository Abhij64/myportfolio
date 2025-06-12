import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/data';

const ProjectDetail = () => {
    const { id } = useParams();
    // Fix: convert project id to string for comparison
    const project = projects.find(p => String(p.id) === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-cyber-darker">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">Project Not Found</h1>
                    <Link to="/" className="text-accent-parrot underline text-lg">Go back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="flex">
                {/* Main Content */}
                <main className="flex-1 px-12 py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="text-4xl font-bold text-green-400">Project Detail</h1>
                        <nav className="flex items-center space-x-2 text-lg">
                            <Link to="/" className="text-white hover:text-green-400">Home</Link>
                            <span className="text-gray-500">/</span>
                            <span className="text-gray-400">Project Details</span>
                        </nav>
                    </div>

                    {/* Main Project Image */}
                    <div className="mb-8">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>

                    {/* Project Title */}
                    <h2 className="text-4xl font-bold text-white mb-12">{project.title}</h2>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-green-400 font-semibold text-lg mb-2">Year:</h3>
                            <p className="text-white text-lg">{project.timeline}</p>
                        </div>
                        <div>
                            <h3 className="text-green-400 font-semibold text-lg mb-2">Category:</h3>
                            <p className="text-white text-lg">{project.type}</p>
                        </div>
                        <div>
                            <h3 className="text-green-400 font-semibold text-lg mb-2">My Role:</h3>
                            <p className="text-white text-lg">{project.role}</p>
                        </div>
                        <div>
                            <h3 className="text-green-400 font-semibold text-lg mb-2">Timeline:</h3>
                            <p className="text-white text-lg">{project.duration}</p>
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-6">Project Overview :</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {project.overview}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {project.problem}
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-white mb-8">Tech Stack:</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {project.skills.slice(0, 6).map((skill, idx) => (
                                <div key={idx} className="flex items-center text-gray-300 text-lg">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="mb-12 pl-6 border-l-4 border-green-400">
                        <blockquote className="text-xl text-gray-300 leading-relaxed mb-4">
                            "{project.research}"
                        </blockquote>
                        <cite className="text-gray-400 text-lg">– {project.type}</cite>
                    </div>

                    {/* Project Description */}
                    <div className="mb-16">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {project.process} {project.outcome}
                        </p>
                    </div>

                    {/* Recent Projects Section */}
                    <div className="mb-12">
                        <h2 className="text-5xl font-bold text-white text-center mb-12">Recent Projects</h2>
                        <div className="grid grid-cols-3 gap-8">
                            {projects.slice(0, 3).map((recentProject, idx) => (
                                <div key={idx} className="group">
                                    <Link to={`/project/${recentProject.id}`}>
                                        <img
                                            src={recentProject.image}
                                            alt={recentProject.title}
                                            className="w-full h-48 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="w-80 bg-gray-800 p-8 min-h-screen">
                    {/* Project Details */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-white">Details:</h3>

                        {/* Year */}
                        <div className="mb-6">
                            <h4 className="text-green-400 font-semibold text-lg mb-2">📅 Year</h4>
                            <p className="text-white text-lg">{project.timeline}</p>
                        </div>

                        {/* Timeline */}
                        <div className="mb-6">
                            <h4 className="text-green-400 font-semibold text-lg mb-2">⏰ Timeline</h4>
                            <p className="text-white text-lg">{project.duration}</p>
                        </div>

                        {/* Role */}
                        <div className="mb-6">
                            <h4 className="text-green-400 font-semibold text-lg mb-2">👨‍💻 Role</h4>
                            <p className="text-white text-lg">{project.role}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h4 className="text-green-400 font-semibold text-lg mb-3">🛠️ Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full border border-gray-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                🚀 Live Demo
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-600"
                            >
                                📂 GitHub Repo
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ProjectDetail;
