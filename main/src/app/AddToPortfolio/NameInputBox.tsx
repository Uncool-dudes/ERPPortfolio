export default function NameInput() {
    return (
      <div className="p-3">
        <label htmlFor="portfolioItemName" className="block text-sm/6 font-medium text-foreground">
          Name
        </label>
        <div className="mt-2">
          <input
            id="portfolioItemName"
            name="portfolioItemName"
            type="text"
            placeholder="Your Portfolio Item Name"
            className="block w-full rounded-md border-0 px-3 py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6"
          />
        </div>
      </div>
    )
  }