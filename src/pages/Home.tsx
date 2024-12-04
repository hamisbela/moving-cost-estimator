import React from 'react';
import Calculator from '../components/Calculator';
import { DollarSign, Truck, Clock, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Calculate Your Moving Costs</h1>
      <Calculator />
      
      <div className="mt-16 max-w-4xl mx-auto">
        {/* Trust Indicators */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <p className="text-sm text-gray-700">All our recommended movers are licensed and insured for your protection</p>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-blue-600" />
              <p className="text-sm text-gray-700">Get accurate moving cost estimates to plan your budget effectively</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Moving Cost Estimator - Your Comprehensive Guide to Moving Expenses</h2>
            <div className="prose max-w-none text-gray-700">
              <p>Welcome to MovingCostEstimator.com, your trusted moving cost estimator for accurate moving cost calculations. Our moving cost calculator helps you plan your relocation budget with confidence, whether you're moving locally or across the country.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Average Moving Costs in {new Date().getFullYear()}</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Local Move</h4>
                  <p className="text-2xl font-bold text-blue-600">$1,250</p>
                  <p className="text-sm text-gray-600">Average for 2-3 bedroom home</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Long Distance Move</h4>
                  <p className="text-2xl font-bold text-blue-600">$4,890</p>
                  <p className="text-sm text-gray-600">Average for 1,000 miles</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Factors Affecting Moving Costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Distance:</strong> Local moves are typically charged hourly, while long-distance moves are priced by weight and mileage</li>
                <li><strong>Home Size:</strong> More rooms mean more items to move, increasing the total cost</li>
                <li><strong>Moving Date:</strong> Peak season (May-September) typically costs 20-30% more</li>
                <li><strong>Additional Services:</strong> Packing, specialty items, and storage can add to your total</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Cost Breakdown by Home Size</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">Home Size</th>
                      <th className="px-6 py-3 text-left">Local Move</th>
                      <th className="px-6 py-3 text-left">Long Distance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Studio</td>
                      <td className="px-6 py-4">$501 - $985</td>
                      <td className="px-6 py-4">$1,500 - $3,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">1 Bedroom</td>
                      <td className="px-6 py-4">$750 - $1,500</td>
                      <td className="px-6 py-4">$2,000 - $4,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">2-3 Bedrooms</td>
                      <td className="px-6 py-4">$1,250 - $2,500</td>
                      <td className="px-6 py-4">$3,500 - $7,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">4+ Bedrooms</td>
                      <td className="px-6 py-4">$2,000 - $3,500</td>
                      <td className="px-6 py-4">$5,000 - $10,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Money-Saving Tips</h3>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Choose Off-Peak Times</h4>
                    <p>Moving during off-peak season (October-April) or mid-month can save you up to 30% on moving costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Compare Multiple Quotes</h4>
                    <p>Get at least three moving quotes to ensure you're getting the best rate for your move.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Why Use Our Moving Cost Estimator?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instant, accurate moving cost estimates</li>
                <li>Comprehensive cost breakdown</li>
                <li>Updated pricing data for {new Date().getFullYear()}</li>
                <li>User-friendly calculator interface</li>
                <li>Detailed moving cost guides and resources</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;