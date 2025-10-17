import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Home as HomeIcon, Ruler, Download, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Thomasville Tiny Homes</h1>
              <p className="text-xs text-gray-600">Design Your Dream Tiny House</p>
            </div>
          </div>
          <Link href="/designer">
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
              Start Designing
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16">
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
          <img src="/interior1.jpg" alt="" className="absolute top-0 right-0 w-96 h-64 object-cover rounded-lg shadow-2xl" />
          <img src="/exterior4.jpg" alt="" className="absolute bottom-0 left-0 w-96 h-64 object-cover rounded-lg shadow-2xl" />
          <img src="/interior3.jpg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 object-cover rounded-lg shadow-2xl" />
        </div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-orange-50/85 to-yellow-50/90"></div>
        <div className="relative grid md:grid-cols-2 gap-12 items-center z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Powered by Thomas "The Tiny House Guy"
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Design Your Perfect Tiny House in Minutes
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Meet Thomas, your virtual tiny house expert! He'll guide you through creating a custom tiny house design and generate professional blueprints ready for construction.
            </p>
            <div className="flex gap-4">
              <Link href="/designer">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  Start Free Design
                </Button>
              </Link>
              <Link href="/templates">
                <Button size="lg" variant="outline">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Thomas Character Card */}
          <Card className="bg-white shadow-2xl border-2 border-amber-200">
            <CardHeader className="text-center pb-4">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-6xl">
                👷
              </div>
              <CardTitle className="text-2xl">Thomas "The Tiny House Guy"</CardTitle>
              <CardDescription className="text-base">Your Personal Tiny House Design Assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-gray-700 italic">
                  "Hey there! I'm Thomas, and I've helped thousands of people design their dream tiny homes. Whether you're going for modern minimalism or rustic charm, I'll walk you through every step. Let's build something amazing together!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-amber-400 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-amber-600" />
              </div>
              <CardTitle>1. Design Your Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Choose your dimensions, add rooms, place windows and doors. Thomas will guide you through best practices and building codes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-amber-400 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <CardTitle>2. Customize Everything</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Pick your style, adjust features, and see your design come to life. Start from scratch or use one of our proven templates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-amber-400 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-amber-600" />
              </div>
              <CardTitle>3. Get Your Blueprints</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Download professional PDF blueprints with floor plans, elevations, and material lists. Ready for permits and construction!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Design for free. Pay only when you're ready to download blueprints.</p>
        </div>
        
        {/* Build Service Notice */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏗️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Want Us to Build Your Tiny House?</h3>
                  <p className="text-gray-700 mb-3">
                    We offer full construction services! If you'd like Thomasville Industries LLC to build your custom tiny house, we require <strong>50% of the total build cost upfront</strong> to begin construction.
                  </p>
                  <p className="text-sm text-gray-600">
                    Contact us at <a href="mailto:bigtinyhousebuilder@gmail.com" className="text-blue-600 hover:underline font-medium">bigtinyhousebuilder@gmail.com</a> for a custom build quote based on your design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Image Only</CardTitle>
              <div className="text-3xl font-bold text-gray-900 mt-2">$15</div>
              <CardDescription>Quick visual reference</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>2-page PDF</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>AI-generated 3D rendering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Basic floor plan with dimensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>High-res download</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <div className="text-3xl font-bold text-gray-900 mt-2">$39</div>
              <CardDescription>Perfect for DIY builders</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>2-page PDF package</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>AI-generated 3D rendering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Detailed floor plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>All measurements included</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-4 border-amber-400 shadow-xl relative scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <div className="text-3xl font-bold text-gray-900 mt-2">$69</div>
              <CardDescription>Best value for most builders</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Multi-page PDF package</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>3D rendering (page 1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Floor plan + elevations (page 2+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Window & door schedules</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <div className="text-3xl font-bold text-gray-900 mt-2">$99</div>
              <CardDescription>Complete construction package</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Complete PDF package</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Multiple 3D renderings (page 1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Full blueprints (page 2+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Material list & cost estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Email support from Thomas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Showcase Section */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Inspiration Gallery</h2>
            <p className="text-gray-600">See what's possible with tiny house living</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/tiny-house-1.jpg" alt="Modern tiny house exterior" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-gray-700">Modern Design</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/tiny-house-2.jpg" alt="Contemporary tiny home" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-gray-700">Contemporary Style</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/tiny-house-3.jpg" alt="Cozy tiny house interior" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-gray-700">Cozy Interiors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-0 text-white">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Design Your Tiny House?</h3>
            <p className="text-xl mb-8 text-amber-50">Thomas is waiting to help you create something amazing!</p>
            <Link href="/designer">
              <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50">
                Start Designing Now - It's Free!
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex gap-6 text-sm">
              <Link href="/track" className="text-gray-600 hover:text-amber-600 transition-colors">
                Track Your Order
              </Link>
              <a href="mailto:bigtinyhousebuilder@gmail.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                Contact Us
              </a>
              <Link href="/admin" className="text-gray-600 hover:text-amber-600 transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-600">
            <p>© 2025 Thomasville Tiny Homes - A Division of Thomasville Industries LLC</p>
            <p className="text-sm mt-2">Designed with ❤️ by Thomas "The Tiny House Guy"</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

