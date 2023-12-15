type ItemComponentProps = {
  title: string;
  text: string;
};

const ItemComponent: React.FC<ItemComponentProps> = ({ title, text }) => {
  return (
    <div className="border-4 border-white p-4">
      <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  );
};

export default ItemComponent;
