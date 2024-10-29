export default function ProjectOption() {
    return (
      <fieldset className="px-3 mt-2">
        <legend className="text-sm font-medium text-foreground">Select Type</legend>
        <div className="mt-2 space-y-6 sm:flex sm:items-center sm:space-x-5 sm:space-y-0">
          
          <div className="flex items-center">
            <input
              type="radio"
              name="itemType"
              id="hardware"
              className="h-4 w-4 border-gray-300 text-blue-300 focus:ring-primary"
            />
            <label
              htmlFor="hardware"
              className="ml-3 block text-sm font-medium text-foreground"
            >
              Hardware
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="itemType"
              id="software"
              className="h-4 w-4 border-gray-300 text-blue-300 focus:ring-primary"
            />
            <label
              htmlFor="software"
              className="ml-3 block text-sm font-medium text-foreground"
            >
              Software
            </label>
          </div>
          
        </div>
      </fieldset>
    );
  }
  