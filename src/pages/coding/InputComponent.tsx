import DropdownMenu from "@/components/common/DropdownMenuComponent";
import { useSelectedOption } from "@/contexts/SelectedOptionContext";

const InputComponent = () => {
  // Use the useSelectedOption hook to access the selectedOption and setSelectedOption functions
  const { selectedOption, setSelectedOption } = useSelectedOption();

  // Define your options
  const options = ["Option 1", "Option 2"];

  // Handle the change in selected option
  const handleOptionChange = (newOption: string) => {
      setSelectedOption(newOption);
  };

  return (
    <div className="mt-4">
      <DropdownMenu options={options} onOptionChange={handleOptionChange} selectedOption={"Option 1"} />

      {selectedOption === "Option 1" ? (
        <div className="mt-4">
          <label htmlFor="text-field" className="block text-sm font-medium text-gray-700">
            Text Field
          </label>
          <input
            type="text"
            id="text-field"
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      ) : selectedOption === "Option 2" ? (
        <div className="mt-4">
          <label htmlFor="textarea-field" className="block text-sm font-medium text-gray-700">
            Text Area
          </label>
          <textarea
            id="textarea-field"
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md resize-none"
            rows={8}
          >
            {}
          </textarea>
        </div>
      ) : null }

      <div className="mt-4">
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
}

export default InputComponent