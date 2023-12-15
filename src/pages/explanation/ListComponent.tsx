import { useState } from "react";
import ItemComponent from "./ItemComponent";

type ItemComponentProps = {
    title: string;
    text: string;
}

type ListComponentProps = {
    items: ItemComponentProps[];
}

const ListComponent: React.FC<ListComponentProps> = ({ items }) => {
    const [showInstructions, setShowInstructions] = useState(Array(items.length).fill(false));
    
    const toggleInstructions = (index: number) => {
        const updatedShowInstructions = [...showInstructions];
        updatedShowInstructions[index] = !updatedShowInstructions[index];
        setShowInstructions(updatedShowInstructions);
    }

    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                    <div className="w-96 bg-gray-200 dark:bg-gray-800 shadow-lg py-2 px-4 rounded-lg">
                        <button
                            onClick={() => toggleInstructions(index)}
                            className="py-3 px-7 border-4 border-black bg-teal-300 dark:bg-teal-700 w-full rounded-md hover:bg-teal-400 dark:hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-transform transform-gpu duration-200 ease-in-out"
                        >
                            Show {index + 1}
                        </button>
                        <div className={`mt-4 transition-all ${showInstructions[index] ? 'duration-1000 ease-in-out' : 'duration-[300ms] ease-in-out'} overflow-hidden ${showInstructions[index] ? 'max-h-screen' : 'max-h-0'}`}>
                            <ItemComponent title={item.title} text={item.text} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListComponent;
