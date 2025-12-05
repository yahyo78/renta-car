"use client"
import { useGetResMeQuery } from "@/api/resApi";
import CarCard from "@/components/myComponents/home/carCard";
import React from "react";

const page = () => {
  const { data: userResMe } = useGetResMeQuery();

  return (
    <div>
      {userResMe?.cars.map((res) => {
        return <>
        <CarCard car={res} key={res.id} />
        </>;
      })}
    </div>
  );
};

export default page;
