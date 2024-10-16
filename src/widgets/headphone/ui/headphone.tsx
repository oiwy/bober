import Image from "next/image";
import { FC } from "react";

const HeadphoneData = [
  {
    id: 1,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Bober",
    price: 200,
    image: "https://via.placeholder.com/1200x1200.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HeadphoneWidget: FC = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl">Headphone</h2>
          <select name="" id="">
            <option value="">Most Popular</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {HeadphoneData.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-neutral-300 rounded-lg p-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1200}
                  height={1200}
                  className="w-full h-60q object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-neutral-500">$ {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeadphoneWidget;
