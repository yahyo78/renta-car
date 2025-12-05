"use client";
import { useGetfavoriteQuery } from "@/api/favoriteApi";
import CarCardFavorite from "@/components/myComponents/carFavCard";
import React from "react";

const page = () => {
  const { data: favoriteData } = useGetfavoriteQuery();

  return (
    <div className="flex gap-[20px] flex-wrap">
      {favoriteData?.map((fav,i) => {
        return (
          <div key={i}>
            <CarCardFavorite key={i} fav={fav} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
