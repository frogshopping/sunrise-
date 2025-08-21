export default function CodePreview() {
  return (
    <div className="relative max-w-2xl mx-auto mt-16">
      {/* Code Editor Window */}
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <span className="text-gray-300 text-sm">coderabbit</span>
            <span className="text-gray-500 text-xs">commented on Mar 18</span>
            <span className="text-gray-500 text-xs">edited</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm">
          <div className="space-y-1">
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">1</span>
              <span className="text-purple-400">public</span>
              <span className="text-blue-400 ml-2">static</span>
              <span className="text-blue-400 ml-2">void</span>
              <span className="text-yellow-300 ml-2">main</span>
              <span className="text-gray-300">(</span>
              <span className="text-blue-400">String</span>
              <span className="text-gray-300">[]</span>
              <span className="text-orange-300 ml-1">args</span>
              <span className="text-gray-300">) {"{"}</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">2</span>
              <span className="text-blue-400 ml-4">String</span>
              <span className="text-orange-300 ml-2">url</span>
              <span className="text-gray-300 ml-2">=</span>
              <span className="text-green-400 ml-2">&quot;jdbc:postgresql://localhost/ecommerce_db&quot;</span>
              <span className="text-gray-300">;</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">3</span>
              <span className="text-blue-400 ml-4">String</span>
              <span className="text-orange-300 ml-2">user</span>
              <span className="text-gray-300 ml-2">=</span>
              <span className="text-green-400 ml-2">&quot;your_username&quot;</span>
              <span className="text-gray-300">;</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">4</span>
              <span className="text-blue-400 ml-4">String</span>
              <span className="text-orange-300 ml-2">password</span>
              <span className="text-gray-300 ml-2">=</span>
              <span className="text-green-400 ml-2">&quot;your_password&quot;</span>
              <span className="text-gray-300">;</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">5</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 w-8 text-right mr-4">6</span>
              <span className="text-purple-400 ml-4">try</span>
              <span className="text-gray-300 ml-2">(</span>
              <span className="text-blue-400">Connection</span>
              <span className="text-orange-300 ml-2">conn</span>
              <span className="text-gray-300 ml-2">=</span>
              <span className="text-blue-400 ml-2">DriverManager</span>
              <span className="text-gray-300">.</span>
              <span className="text-yellow-300">getConnection</span>
              <span className="text-gray-300">(</span>
              <span className="text-orange-300">url</span>
              <span className="text-gray-300">,</span>
              <span className="text-orange-300 ml-2">user</span>
              <span className="text-gray-300">,</span>
              <span className="text-orange-300 ml-2">password</span>
              <span className="text-gray-300">) {"{"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Code Review Comment */}
      <div className="absolute top-24 right-0 transform translate-x-1/3">
        <div className="bg-pink-100 border border-pink-200 rounded-lg p-3 shadow-lg max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-700 text-sm font-medium">Code review</span>
          </div>
          <p className="text-gray-700 text-sm">Consider using environment variables for database credentials instead of hardcoding them.</p>
        </div>
      </div>

      {/* Another comment indicator */}
      <div className="absolute bottom-8 left-0 transform -translate-x-1/2">
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  );
}