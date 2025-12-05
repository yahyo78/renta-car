"use client";

import { useGetCarByidMutation, useGetCarsQuery } from "@/api/carApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import imageKarobka from "@/public/Group (5).svg";
import imageOil from "@/public/g17 (1).svg";
import imageSeats from "@/public/Mask group (6).svg";
import imageMail from "@/public/Group (6).svg";
import imageDoor from "@/public/Clip path group.svg";

import {
  Car,
  Timer,
  TimerReset,
  CalendarDays,
  ArrowRight,
  SunSnow,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePostResMutation } from "@/api/resApi";
import { toast } from "react-toastify";
import CarCard from "@/components/myComponents/home/carCard";
import { LoginDialog } from "@/components/myComponents/info/infoModal";

export default function Infocar() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const attributeIcons = {
    "Вид топливо": imageOil,
    "Коробка передач": imageKarobka,
    Кузов: imageDoor,
  };

  const { id } = useParams();
  const { data: carData } = useGetCarsQuery();
  const [getCarByid, { data: CarByIdData }] = useGetCarByidMutation();
  const [postRes] = usePostResMutation();

  useEffect(() => {
    getCarByid(id);
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function checkRegister() {
    const token = localStorage.getItem("accsess_token");
    if (token) setOpen(true);
    else setOpenLogin(true);
  }

  async function ReservationFunc(event) {
    event.preventDefault();

    const start = event.target["startDate"].value;
    const end = event.target["endDate"].value;

    try {
      await postRes({
        carId: id,
        startDate: new Date(start).toISOString(),
        endDate: new Date(end).toISOString(),
      }).unwrap();

      toast.success("Ваш запрос принят!");
      setOpen(false);
    } catch (error) {
      toast.error("Произошла ошибка!");
    }
  }

  return (
    <>
      <section className="py-10 flex flex-col xl:flex-row gap-14">
        {/* LEFT */}
        <aside className="xl:w-[45%] space-y-6">
          <div className="space-y-1">
            <h1 className="text-[42px] font-semibold tracking-tight">
              {CarByIdData?.title}
            </h1>
            <p className="text-[28px] text-primary font-semibold">
              {CarByIdData?.pricePerHour}$
              <span className="text-muted-foreground text-[18px]"> / день</span>
            </p>
          </div>

          {/* MAIN IMAGE */}
          {CarByIdData?.images?.length > 0 && (
            <div className="rounded-2xl overflow-hidden border bg-white">
              <Image
                src={`http://localhost:5257/uploads/cars/${encodeURIComponent(
                  CarByIdData.images[0]
                )}`}
                width={650}
                height={350}
                alt=""
                className="w-full object-cover"
              />
            </div>
          )}

          {/* GALLERY */}
          <div className="grid grid-cols-3 gap-4">
            {CarByIdData?.images?.slice(1, 4).map((img, i) => (
              <div
                key={i}
                className="rounded-xl border hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={`http://localhost:5257/uploads/cars/${encodeURIComponent(
                    img
                  )}`}
                  width={250}
                  height={150}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT */}
        <aside className="xl:w-[55%] space-y-12">
          {/* CHARACTERISTICS SECTION */}
          <div className="space-y-4">
            <h2 className="text-[26px] font-semibold">Характеристики</h2>

            <div>{CarByIdData?.name}</div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {CarByIdData?.carAttributes.map((attr, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white shadow-sm border flex flex-col gap-3 hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image
                      src={attributeIcons[attr.attributeName] ?? imageKarobka}
                      width={26}
                      height={26}
                      alt=""
                    />
                  </div>

                  <p className="text-sm font-semibold">{attr.attributeName}</p>
                  <p className="text-muted-foreground text-sm">
                    {attr.valueName}
                  </p>
                </div>
              ))}

              {/* Extra attributes */}
              <div className="p-5 rounded-2xl bg-white shadow-sm border hover:shadow-md transition flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image src={imageDoor} width={26} height={26} alt="" />
                </div>
                <p className="text-sm font-semibold">Двери</p>
                <p className="text-muted-foreground">{CarByIdData?.doors}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white shadow-sm border hover:shadow-md transition flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <SunSnow size={20} />
                </div>
                <p className="text-sm font-semibold">Кондиционер</p>
                <p className="text-muted-foreground">
                  {CarByIdData?.tinting ? "Да" : "Нет"}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white shadow-sm border hover:shadow-md transition flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image src={imageSeats} width={26} height={26} alt="" />
                </div>
                <p className="text-sm font-semibold">Сиденья</p>
                <p className="text-muted-foreground">{CarByIdData?.seats}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white shadow-sm border hover:shadow-md transition flex flex-col gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <Image src={imageMail} width={26} height={26} alt="" />
                </div>
                <p className="text-sm font-semibold">Пробег</p>
                <p className="text-muted-foreground">{CarByIdData?.millage}</p>
              </div>
            </div>
          </div>

          {/* BUSY DATES — BEAUTIFUL TIMELINE STYLE */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <CalendarDays /> Занятые даты
            </h2>

            <div className="space-y-4">
              {CarByIdData?.busyDates.map((time, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">С</p>
                    <p className="font-semibold">{formatDate(time.start)}</p>
                  </div>

                  <ArrowRight className="text-muted-foreground" />

                  <div>
                    <p className="text-xs text-muted-foreground">По</p>
                    <p className="font-semibold">{formatDate(time.end)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RENT BUTTON */}
          <div className="flex justify-end">
            <Dialog open={open}>
              <DialogTrigger
                onClick={checkRegister}
                className="w-[55%] py-3 rounded-xl bg-primary text-white text-lg hover:bg-primary/90"
              >
                Арендовать авто
              </DialogTrigger>

              <DialogContent className="rounded-xl p-0 overflow-hidden max-w-lg">
                <DialogHeader className="p-6 border-b">
                  <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
                    <Car /> Аренда авто
                  </h2>
                </DialogHeader>

                <form onSubmit={ReservationFunc} className="p-6 space-y-5">
                  <div className="space-y-1">
                    <label className="font-medium">Начало аренды</label>
                    <Input type="datetime-local" name="startDate" required />
                  </div>

                  <div className="space-y-1">
                    <label className="font-medium">Конец аренды</label>
                    <Input type="datetime-local" name="endDate" required />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <DialogClose asChild>
                      <Button
                        onClick={() => setOpen(false)}
                        className="bg-red-500 hover:bg-red-400 transition-all duration-300 text-white px-6"
                      >
                        Отмена
                      </Button>
                    </DialogClose>

                    <DialogClose asChild>
                      <Button
                        type="submit"
                        className="bg-[#5937e0] transition-all duration-400 hover:bg-[#836ddb] text-white px-8"
                      >
                        Сохранить
                      </Button>
                    </DialogClose>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </aside>
      </section>

      {/* OTHER CARS */}
      <section className="mt-16">
        <div className="flex justify-between items-center">
          <h1 className="text-[32px] font-bold">Похожие автомобили</h1>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-medium">Смотреть все</p>
            <ArrowRight />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {carData?.slice(0, 6).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <LoginDialog openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </>
  );
}
