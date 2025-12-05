import Image from "next/image";
import React, { useState, useEffect } from "react";

// images
import imageGearShift from "@/public/gear-shift(1) 1.svg";
import imageOil from "@/public/g17.svg";

import { CarFront, ThermometerSnowflake, Heart } from "lucide-react";

import Link from "next/link";
import { useDeleteFavoriteMutation, useGetPostMutation } from "@/api/favoriteApi";

const CarCard = ({ car, favoriteIds = [] }) => {
  
  const isFav = favoriteIds.includes(car.id);

  const [like, setLike] = useState(isFav);

  useEffect(() => {
    setLike(isFav);
  }, [isFav]);

  const [postFavorite] = useGetPostMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const attributeIcons = {
    "Вид топливо": <Image src={imageOil} alt="fuel" />,
    "Коробка передач": <Image src={imageGearShift} alt="gearbox" />,
    Кузов: <CarFront />,
  };

  return (
    <div className="xl:w-[400px] p-[20px] flex flex-col gap-[20px] bg-[#FAFAFA] py-[30px] rounded-[20px]">

      {/* Images */}
      {car?.images?.slice(0,1).map((imageCar, i) => (
        <div className="relative" key={i}>
          <Link href={`/infoCar/${car.id}`}>
            <Image
              width={500}
              height={100}
              src={`http://localhost:5257/uploads/cars/${imageCar}`}
              alt=""
              className="rounded-[10px]"
            />
          </Link>

          {/* Heart Icon */}
          {!like ? (
            <Heart
              onClick={() => {
                postFavorite(car.id);
                setLike(true);
              }}
              size={30}
              className="text-red-500 absolute top-[5px] right-[5px] cursor-pointer"
            />
          ) : (
            <Heart
              onClick={() => {
                deleteFavorite(car.id);
                setLike(false);
              }}
              size={30}
              className="text-red-500 fill-red-500 absolute top-[5px] right-[5px] cursor-pointer"
            />
          )}
        </div>
      ))}

      {/* Info */}
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[23px]">{car.title}</h2>
            <p className="text-[#5937E0] font-bold text-[20px]">
              {car.pricePerHour}$
            </p>
          </div>

          <div className="flex justify-between items-center">
            <h2>{car.color}</h2>
            <p className="text-[#00000099]">per day</p>
          </div>
        </div>

        {/* Attributes */}
        <div className="flex flex-wrap gap-[20px] justify-between">
          {car.carAttributes?.map((atr) => (
            <div key={atr.attributeId} className="flex gap-[10px]">
              {attributeIcons[atr.attributeName] ?? null}
              <h2 className="text-[#00000099]">{atr.valueName}</h2>
            </div>
          ))}

          <div className="flex gap-[10px]">
            <ThermometerSnowflake />
            <h2 className="text-[#00000099]">Air Conditioner</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
