export default function CartItem({
    item,
    onQuantityChange,
    onRemove,
  }: {
    item: any;
    onQuantityChange: (id: string, increment: boolean) => void;
    onRemove: (id: string) => void;
  }) {
    return (
      <div className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.productName}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold">{item.productName}</h2>
            <p className="text-gray-600">${item.price}</p>
            <p className="text-sm text-gray-500">Category: {item.category || "N/A"}</p>
            <p className="text-sm text-gray-500">Color: {item.colors || "N/A"}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onQuantityChange(item._id, false)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item._id, true)}
            className="bg-gray-200 px-2 py-1 rounded"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item._id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  