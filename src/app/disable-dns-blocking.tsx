export default function DisableDNSBlocking() {
    return (
        <div className="min-h-screen bg-black-100 p-8">
            <div className="max-w-2xl mx-auto bg-black rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-white-800 mb-6">Disable DNS Blocking</h1>
                
                <div className="space-y-4 flex flex-row gap-4">
                    <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        Disable Indefinitely
                    </button>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Disable for 30 Seconds
                    </button>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Disable for 5 Minutes
                    </button>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Disable for 30 Minutes
                    </button>

                    <div className="flex items-center space-x-4">
                        <input 
                            type="number" 
                            placeholder="Enter Minutes"
                            className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="1"
                        />
                        <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                            Disable for Custom Time
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

