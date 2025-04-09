import React from 'react'

const HomePage = () => {
    return (
        
            <div class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans">
                {/* <!-- Header (Hero Section) --> */}
                <header class="relative">
                    {/* <!-- Navigation Bar (Glassmorphism) --> */}
                    {/* <div class="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 fixed top-0 w-full z-50">
                        <div class="container mx-auto flex justify-between items-center">
                            <h1 class="text-2xl font-bold text-white">LaborFinder</h1>
                            <nav class="hidden md:flex space-x-6">
                                <a href="#" class="text-white hover:text-gray-200">Home</a>
                                <a href="#" class="text-white hover:text-gray-200">Services</a>
                                <a href="#" class="text-white hover:text-gray-200">About</a>
                                <a href="#" class="text-white hover:text-gray-200">Login/Signup</a>
                            </nav>
                        </div>
                    </div> */}
                    {/* <!-- Hero Content --> */}
                    <div class="pt-24 pb-16 text-center">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Find Trusted Labor Contractors Near You</h2>
                        <p class="text-lg md:text-xl text-gray-600 mt-2">Hire skilled workers for house building, painting, plumbing, and more.</p>
                        <div class="mt-6 max-w-md mx-auto flex">
                            <input type="text" placeholder="Enter your location" class="w-full p-3 rounded-l-md border border-gray-300 focus:outline-none" />
                                <button class="bg-green-500 text-white p-3 rounded-r-md font-semibold">Search</button>
                        </div>
                    </div>
                </header>

                {/* <!-- Services Section --> */}
                <section class="py-16 bg-white">
                    <div class="container mx-auto">
                        <h3 class="text-3xl font-bold text-center text-gray-900 mb-8">What We Offer</h3>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center">
                                <div class="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1h3a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1z" /></svg>
                                </div>
                                <h4 class="text-xl font-semibold mt-4">House Building</h4>
                                <p class="text-gray-600 mt-2">Expert contractors for construction.</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center">
                                <div class="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 2h16v16H2V2zm2 2v12h12V4H4z" /></svg>
                                </div>
                                <h4 class="text-xl font-semibold mt-4">Painting</h4>
                                <p class="text-gray-600 mt-2">Professional painters for any job.</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center">
                                <div class="w-12 h-12 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8z" /></svg>
                                </div>
                                <h4 class="text-xl font-semibold mt-4">Plumbing</h4>
                                <p class="text-gray-600 mt-2">Fix leaks, install pipes, and more.</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center">
                                <div class="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l-8 8h6v8h4v-8h6l-8-8z" /></svg>
                                </div>
                                <h4 class="text-xl font-semibold mt-4">Electrical Work</h4>
                                <p class="text-gray-600 mt-2">Safe and reliable electricians.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- How It Works Section --> */}
                <section class="py-16 bg-gray-50">
                    <div class="container mx-auto">
                        <h3 class="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h3>
                        <div class="flex flex-col md:flex-row justify-center gap-8 px-4">
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500">
                                    <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8 8a3 3 0 100-6 3 3 0 000 6zm7 7a5 5 0 00-10 0h10z" /></svg>
                                </div>
                                <p class="mt-4 text-gray-600">1. Search your location and service.</p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500">
                                    <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l-4-4h8l-4 4z" /></svg>
                                </div>
                                <p class="mt-4 text-gray-600">2. Choose from verified contractors.</p>
                            </div>
                            <div class="text-center">
                                <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500">
                                    <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 00-8 8h16a8 8 0 00-8-8z" /></svg>
                                </div>
                                <p class="mt-4 text-gray-600">3. Hire with confidence.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- CTA Section --> */}
                <section class="bg-green-500 py-16 text-center text-white">
                    <h3 class="text-3xl font-bold">Ready to Find a Contractor?</h3>
                    <p class="text-lg mt-2">Get started now and connect with local experts.</p>
                    <button class="mt-6 bg-white text-green-500 px-6 py-3 rounded-lg font-semibold shadow-md">Search Now</button>
                </section>

                {/* <!-- Footer --> */}
                <footer class="bg-gray-800 text-white p-4 text-center">
                    <p>© 2025 LaborFinder. All rights reserved.</p>
                </footer>
            </div>
    )
}

export default HomePage
