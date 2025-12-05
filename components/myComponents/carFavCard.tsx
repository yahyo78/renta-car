"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CarFront, Heart } from "lucide-react";

// Icons
import imageOil from "@/public/g17.svg";
import imageGearShift from "@/public/gear-shift(1) 1.svg";
import imageShadowCar from "@/public/Img (23).svg";

import { useDeleteFavoriteMutation } from "@/api/favoriteApi";

const CarCardFavorite = ({ fav }) => {
  const car = fav?.car; 
  const [like, setLike] = useState(true);

  const [deleteFavorite] = useDeleteFavoriteMutation();

  if (!car) return null;

  const attributeIcons = {
    "Вид топливо": (
      <Image src={imageOil} alt="fuel" className="w-[20px] h-[20px]" />
    ),
    "Коробка передач": (
      <Image src={imageGearShift} alt="gearbox" className="w-[20px] h-[20px]" />
    ),
    Кузов: <CarFront size={20} />,
  };

  return (
    <div className="xl:w-[400px] p-[20px] flex flex-col gap-[20px] bg-[#FAFAFA] py-[30px] rounded-[20px]">
      {/* Images */}
      {Array.isArray(car.images) && car.images.length > 0 ? (
        car.images.map((imageCar, i) => (
          <div className="relative" key={i}>
            <Link href={`/infoCar/${car.id}`}>
              <Image
                width={500}
                height={300}
                src={`http://localhost:5257/uploads/cars/${imageCar}`}
                alt={car.title}
                className="rounded-[10px]"
              />
            </Link>

            {/* LIKE BUTTON */}
            <Heart
              onClick={() => {
                deleteFavorite(car.id);
                setLike(false);
              }}
              size={30}
              className={`
                absolute top-[5px] right-[5px] 
                transition-all duration-300 cursor-pointer
                ${like ? "text-red-500 cursor-pointer fill-red-500" : "text-gray-400 cursor-pointer"}
              `}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-400">Нет фото</p>
      )}

      {/* INFO BLOCK */}
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

        {/* ATTRIBUTES */}
        <div className="flex flex-wrap gap-[20px] justify-between">
          {car.carAttributes?.map((atr) => (
            <div key={atr.id} className="flex gap-[10px]">
              {attributeIcons[atr.attributeName] ?? null}
              <h2 className="text-[#00000099]">{atr.valueName}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCardFavorite;
