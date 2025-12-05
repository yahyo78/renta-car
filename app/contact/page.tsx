"use client"
import Image from "next/image";
import React from "react";

// images
import imageBlur from "@/public/Img (24).svg";
import imageBlurCard from "@/public/Img (25).svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputData from "@/components/myComponents/inputData";
import FooterCard from "@/components/myComponents/footer/footerCard";
import imageCardLocation from "@/public/Icon+bg (2).svg";
import ContactCard from "@/components/myComponents/contact/contactCard";

const Contact = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center py-[50px] gap-[10px]">
          <h1 className="xl:text-[50px] font-black text-[40px]">Связаться с нами</h1>
          <p className="text-gray-400">
            Главная / <span className="text-black">Связаться с нами</span>
          </p>
        </div>
      </section>

      <section className="flex w-[100%] xl:flex-row-reverse xl:px-0 px-[20px] items-center flex-col">
        <aside className=" xl:w-[2500px]">
          <Image className="w-[100%]" alt="" src={imageBlur} />
        </aside>
        <aside className=" text-white xl:py-0 py-[20px] w-[100%]">
          <div className="bg-[#5937E0] w-[100%]  xl:w-[400px] h-full p-[20px] py-[53px] rounded-[20px]">
            <div className="flex justify-center py-[20px]">
              <h1 className="text-[25px] text-white font-bold">
                Забронируйте автомобиль
              </h1>
            </div>
            <div className="flex flex-col gap-[20px] items-center">

              {/* car type */}
              <Select>
                <SelectTrigger className="w-full text-white shadow border-none bg-[#694BE3] [&>span]:text-white">
                  <SelectValue placeholder="Тип автомобиля" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="light">Лёгкий</SelectItem>
                  <SelectItem value="dark">Тёмный</SelectItem>
                  <SelectItem value="system">Системный</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full border-none shadow bg-[#694BE3] text-white [&>span]:text-white">
                  <SelectValue placeholder="Тип автомобиля" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="light">Лёгкий</SelectItem>
                  <SelectItem value="dark">Тёмный</SelectItem>
                  <SelectItem value="system">Системный</SelectItem>
                </SelectContent>
              </Select>

              {/* place of rental */}
              <Select>
                <SelectTrigger className="w-[100%] border-none shadow bg-[#694BE3] [&>span]:text-white">
                  <SelectValue placeholder="Место аренды" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Лёгкий</SelectItem>
                  <SelectItem value="dark">Тёмный</SelectItem>
                  <SelectItem value="system">Системный</SelectItem>
                </SelectContent>
              </Select>

              {/* date input */}
              <div className="flex items-center border-none bg-[#694BE3] rounded-[10px] shadow w-full pr-[10px]">
                <InputData name="data1" />
              </div>

              <div className="flex items-center border-none bg-[#694BE3] rounded-[10px] shadow w-full pr-[10px]">
                <InputData name="data2" />
              </div>

              <button className="w-[100%] p-[10px] bg-[#FF9E0C] rounded-[10px]">
                Забронировать
              </button>
            </div>
          </div>
        </aside>
      </section>

      <section className="pt-[140px]">
        <div className="flex xl:flex-row flex-col items-center gap-[20px] justify-between">
          <FooterCard
            img={imageCardLocation}
            text={"Адрес"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Адрес"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Адрес"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
          <FooterCard
            img={imageCardLocation}
            text={"Адрес"}
            description={"Oxford Ave. Cary, NC 27511"}
          />
        </div>
      </section>

      <section className="py-[50px]">
        <div className="flex flex-col items-center py-[40px]">
          <h1 className="text-[40px] text-center font-bold xl:text-[50px]">
            Последние статьи и новости
          </h1>
        </div>
        <div className="flex xl:flex-row xl:px-0 px-[20px] gap-[20px] flex-col items-center justify-between">
          <ContactCard
            img={imageBlurCard}
            text={"Как выбрать подходящий автомобиль"}
            date={"Новости / 12 апреля 2024"}
          />
          <ContactCard
            img={imageBlurCard}
            text={"Как выбрать подходящий автомобиль"}
            date={"Новости / 12 апреля 2024"}
          />
          <ContactCard
            img={imageBlurCard}
            text={"Как выбрать подходящий автомобиль"}
            date={"Новости / 12 апреля 2024"}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
