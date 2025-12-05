"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// images
import imageBlurCar from "@/public/Imgs.svg";

// import components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { ArrowRight, Axe, CalendarDays } from "lucide-react";
import InputData from "./inputData";
import HomeCard1 from "./home/homeCard1";
import HomeCard2 from "./home/homeCard2";
import HomeCard3 from "./home/homeCard3";

// images
import imageCardLocation from "@/public/g3455.svg";
import imageBlur from "@/public/Img (17).svg";
import imageNumber1 from "@/public/Text+bg.svg";
import imageIconCar from "@/public/Icon+bg (1).svg";
import imageAppStore from "@/public/App Store.svg";
import imageMaketPhone from "@/public/Group 11.svg";
import imageCarShadow from "@/public/car(3) 1.svg";
import HomeListCard from "./home/homeListCard";
import { useGetMakesQuery } from "@/api/makeApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetCarsQuery } from "@/api/carApi";
import CarCard from "./home/carCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import imageSwiper from "@/public/s-l1200 (1).png";
import imageSwiper2 from "@/public/part_2_9f92bc3b-b84c-456f-a0ac-8f83b1ae6044.png";
import { useGetfavoriteQuery } from "@/api/favoriteApi";

const HomePage = () => {
  const { data: makesData } = useGetMakesQuery("");
  const { data: carData } = useGetCarsQuery();
  const { data: favList } = useGetfavoriteQuery();

  const favoriteIds = favList?.map((f) => f.car.id) ?? [];

  const router = useRouter();

  // if (!localStorage.getItem("accsess_token")) {
  //   router.push("/login");
  // }

  return (
    // <>
    //   <section className="py-[50px] bg-[#5937E0] flex xl:flex-row flex-col items-center justify-between xl:gap-[100px] xl:h-[70vh] gap-[200px]  xl:px-[50px] xl:py-[50px] px-[20px]  xl:rounded-[50px] xl:mt-[30px]">
    //     <aside className="w-full justify-end items-end h-full relative  xl:w-[65%] xl:flex-row flex flex-col gap-[20px]">
    //       <div className="flex xl:w-[90%] left-0  absolute top-0 flex-col gap-[20px]">
    //         <h1 className="xl:text-[60px] text-white text-[40px] font-bold">
    //           Experience the road like never before
    //         </h1>
    //         <p className="text-white">
    //           Aliquam adipiscing velit semper morbi. Purus non eu cursus
    //           porttitor tristique et gravida. Quis nunc interdum gravida
    //           ullamcorper
    //         </p>
    //         <button className="px-[30px] xl:w-[30%]  bg-[#FF9E0C] p-[10px] rounded-[12px] text-white">
    //           View all cars
    //         </button>
    //       </div>
    //       <Image
    //         className="xl:w-[450px] rounded-[20px]"
    //         src={imageBlurCar}
    //         alt="blueBlurCar"
    //       />
    //     </aside>

    //     <aside>
    //       <div className="bg-[#FFFFFF] w-[300px] p-[20px] py-[40px] rounded-[20px]">
    //         <div className="flex justify-center py-[20px]">
    //           <h1 className="text-[25px] font-bold text-black">
    //             Book your car
    //           </h1>
    //         </div>
    //         <div className="flex  flex-col gap-[20px] items-center">
    //           {/* car type */}
    //           <Select>
    //             <SelectTrigger className="w-[100%]">
    //               <SelectValue placeholder="Car type" />
    //             </SelectTrigger>
    //             <SelectContent>
    //               <SelectItem value="light">Light</SelectItem>
    //               <SelectItem value="dark">Dark</SelectItem>
    //               <SelectItem value="system">System</SelectItem>
    //             </SelectContent>
    //           </Select>

    //           {/* place of renter  */}
    //           <Select>
    //             <SelectTrigger className="w-[100%]">
    //               <SelectValue placeholder="Place of rental" />
    //             </SelectTrigger>
    //             <SelectContent>
    //               <SelectItem value="light">Light</SelectItem>
    //               <SelectItem value="dark">Dark</SelectItem>
    //               <SelectItem value="system">System</SelectItem>
    //             </SelectContent>
    //           </Select>

    //           {/* place of renter  */}
    //           <div className="flex items-center border rounded-[10px] shadow w-full pr-[10px]">
    //             <InputData name="data1" />
    //           </div>

    //           {/* place of renter  */}
    //           <div className="flex items-center border rounded-[10px] shadow w-full pr-[10px]">
    //             <InputData name="data2" />
    //           </div>
    //           <button className="w-[100%] p-[10px] bg-[#FF9E0C] rounded-[10px]">
    //             Book now
    //           </button>
    //         </div>
    //       </div>
    //     </aside>
    //   </section>

    //   <section className="py-[100px] flex xl:flex-row items-center flex-col justify-between gap-[70px]">
    //     <HomeCard1
    //       text={"Availability"}
    //       description={
    //         "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
    //       }
    //       image={imageCardLocation}
    //     />
    //     <HomeCard1
    //       text={"Availability"}
    //       description={
    //         "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
    //       }
    //       image={imageCardLocation}
    //     />
    //     <HomeCard1
    //       text={"Availability"}
    //       description={
    //         "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
    //       }
    //       image={imageCardLocation}
    //     />
    //   </section>

    //   <section className="flex w-[100%] py-[50px] px-[5%] xl:px-0 gap-[50px]  xl:flex-row flex-col items-center justify-between">
    //     <aside className="xl:w-[47%]">
    //       <Image src={imageBlur} alt="" />
    //     </aside>
    //     <aside className="xl:w-[50%]">
    //       <div className="flex flex-col gap-[40px]">
    //         <HomeCard2
    //           img={imageNumber1}
    //           text={"Erat at semper "}
    //           description={
    //             "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum "
    //           }
    //         />
    //         <HomeCard2
    //           img={imageNumber1}
    //           text={"Erat at semper "}
    //           description={
    //             "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum "
    //           }
    //         />
    //         <HomeCard2
    //           img={imageNumber1}
    //           text={"Erat at semper "}
    //           description={
    //             "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum "
    //           }
    //         />
    //         <HomeCard2
    //           img={imageNumber1}
    //           text={"Erat at semper "}
    //           description={
    //             "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum "
    //           }
    //         />
    //       </div>
    //     </aside>
    //   </section>

    //   <section className="xl:px-0 px-[20px] py-[70px]">
    //     <div className="flex justify-between">
    //       <h1 className="text-[40px] xl:w-[601px] font-bold xl:text-[50px]">Choose the car that suits you</h1>
    //       <div className="flex items-center gap-[10px]">
    //         <h1 className="font-bold">View All</h1>
    //         <ArrowRight />
    //       </div>
    //     </div>

    //     <div className="py-[50px]">
    //       <HomeListCard />
    //     </div>
    //   </section>

    //   <section className="py-[30px] xl:px-0 px-[10px]">
    //     <div className="bg-[#5937E0] xl:py-[70px] py-[50px] xl:rounded-[30px] rounded-[20px] w-[100%]">
    //       <div>
    //         <div className="flex flex-col items-center gap-[20px] text-white">
    //           <h1 className="xl:text-[50px] text-[35px] text-center font-bold">
    //             Facts in numbers
    //           </h1>
    //           <p className="text-center xl:w-[712px] xl:px-0 px-[20px]">
    //             Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
    //             bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
    //             fermentum
    //           </p>
    //         </div>
    //         <div className="flex  xl:flex-row flex-wrap xl:gap-[30px] gap-[20px] items-center justify-center xl:justify-evenly py-[40px] xl:py-0 xl:pt-[40px]">
    //           <HomeCard3
    //             img={imageIconCar}
    //             text={"540+"}
    //             description={"cars"}
    //           />
    //           <HomeCard3
    //             img={imageIconCar}
    //             text={"540+"}
    //             description={"cars"}
    //           />
    //           <HomeCard3
    //             img={imageIconCar}
    //             text={"540+"}
    //             description={"cars"}
    //           />
    //           <HomeCard3
    //             img={imageIconCar}
    //             text={"540+"}
    //             description={"cars"}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="xl:px-[5%] px-[20px] flex xl:flex-row flex-col-reverse justify-center gap-[70px] items-center py-[50px]">
    //     <aside className="xl:w-[47%] flex flex-col gap-[30px]">
    //       <h1 className="xl:text-[50px] xl:w-[313px] text-[40px] font-bold">
    //         Download mobile app
    //       </h1>
    //       <p>
    //         Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
    //         turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
    //         aliquet cras hendrerit enim condimentum. Condimentum interdum risus
    //         bibendum urna
    //       </p>
    //       <div className="flex  gap-[20px] xl:gap-[40px] ">
    //         <Image width={160} src={imageAppStore} alt="" />
    //         <Image width={160} src={imageAppStore} alt="" />
    //       </div>
    //     </aside>

    //     <aside className="relative flex xl:justify-end  justify-center xl:w-[47%] py-[40px] ">
    //       <Image
    //         className="absolute xl:right-[150px] right-[120px] top-[100px] xl:top-[100px]"
    //         src={imageMaketPhone}
    //         alt=""
    //       />
    //       <Image className="" src={imageMaketPhone} alt="" />
    //     </aside>
    //   </section>

    //   <section className="xl:px-0 px-[10px] py-[50px]">
    //     <div className="bg-[#5937E0] rounded-[30px] px-[30px] flex xl:flex-row flex-col justify-between items-center xl:px-[5%] py-[20px]">
    //       <aside className="bgImageDrift xl:w-[55%]">
    //         <div className="flex flex-col gap-[20px]">
    //           <h1 className="xl:text-[50px] font-bold text-white text-[40px]">
    //             Enjoy every mile with adorable companionship.
    //           </h1>
    //           <p className="text-white">
    //             Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
    //             bibendum ullamcorper in. Diam tincidunt tincidunt erat
    //           </p>

    //           <div className="xl:w-[100%] xl:px-[15px]  bg-white flex justify-between gap-[10px] p-[10px] rounded-[20px]">
    //             <input
    //               className="font-bold  w-[70%] outline-none border-none"
    //               placeholder="City"
    //               type="text"
    //             />
    //             <button className="p-[5px] px-[16px] rounded-[10px] bg-[#FF9E0C] text-white">
    //               Search
    //             </button>
    //           </div>
    //         </div>
    //       </aside>

    //       <aside>
    //         <Image src={imageCarShadow} alt="" />
    //       </aside>
    //     </div>
    //   </section>
    // </><>

    <>
      <div className="px-[5%] flex  items-center">
        <aside className="w-[79%]">
          <div className="pt-[20px]">
            <h1 className="text-[30px] font-bold">
              Хорошие автомобили — арендуйте их здесь!
            </h1>
          </div>

          <div className="flex items-center pt-[20px] gap-[30px] ">
            {makesData?.slice(0, 9).map((make) => {
              if (make.isActive) {
                return (
                  <Link
                    className="cursor-pointer"
                    key={make.id}
                    href={`filterByCarId/${make.id}`}
                  >
                    <Image
                      key={make.id}
                      src={`http://localhost:5257/uploads/makes/${make.image}`}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </Link>
                );
              }
            })}
          </div>

          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[20px] py-[30px]">
              {makesData?.slice(0, 5).map((make) => {
                if (make.isActive) {
                  return (
                    <Link
                      className="cursor-pointer  hover:text-[#5937e0] transition-all duration-300 font-bold"
                      key={make.id}
                      href={`filterByCarId/${make.id}`}
                    >
                      <h1>{make.name}</h1>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            <div className="flex flex-col  gap-[20px] py-[30px]">
              {makesData?.slice(5, 10).map((make) => {
                if (make.isActive) {
                  return (
                    <Link
                      className="cursor-pointer   hover:text-[#5937e0] transition-all duration-300 font-bold"
                      key={make.id}
                      href={`filterByCarId/${make.id}`}
                    >
                      <h1>{make.name}</h1>
                    </Link>
                  );
                }
              })}
            </div>

            <div className="flex flex-col  gap-[20px] py-[30px]">
              {makesData?.slice(10, 15).map((make) => {
                if (make.isActive) {
                  return (
                    <Link
                      className="cursor-pointer   hover:text-[#5937e0] transition-all duration-300 font-bold"
                      key={make.id}
                      href={`filterByCarId/${make.id}`}
                    >
                      <h1>{make.name}</h1>
                    </Link>
                  );
                }
              })}
            </div>

            <div className="flex flex-col  gap-[20px] py-[30px]">
              {makesData?.slice(15, 20).map((make) => {
                if (make.isActive) {
                  return (
                    <Link
                      className="cursor-pointer   hover:text-[#5937e0] transition-all duration-300 font-bold"
                      key={make.id}
                      href={`filterByCarId/${make.id}`}
                    >
                      <h1>{make.name}</h1>
                    </Link>
                  );
                }
              })}
            </div>

            <div className="flex flex-col  gap-[20px] py-[30px]">
              {makesData?.slice(20, 25).map((make) => {
                if (make.isActive) {
                  return (
                    <Link
                      className="cursor-pointer   hover:text-[#5937e0] transition-all duration-300 font-bold"
                      key={make.id}
                      href={`filterByCarId/${make.id}`}
                    >
                      <h1>{make.name}</h1>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </aside>
        <aside>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-[50vh] flex items-center justify-center">
                <div className="relative flex justify-end  text-start pb-[10px] w-[100%] h-[300px]">
                  <h1 className="font-bold w-[300px] left-0 absolute top-[20px]">
                    Выберите автомобиль, который подчёркивает ваш статус.
                  </h1>
                  <Image
                    src={imageSwiper}
                    alt="hero-car"
                    // fill
                    className="object-contain pt-[30px]"
                    width={350}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="w-full h-[50vh] flex items-center justify-center">
                <div className="relative w-[400px] h-[300px]">
                  <Image
                    src={imageSwiper2}
                    alt="hero-car"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </aside>
      </div>

      <div className="px-[5%] py-[0px]">
        <div className="flex items-center gap-[200px]">
          <h1 className="text-[40px] py-[20px] font-bold">Рекомендации</h1>
          <hr className="text-[20px] border-[#5937e0] border-1 w-[100%]" />
        </div>
        <div className="flex  gap-[30px]  flex-wrap">
          {carData?.map((car) => {
            return <CarCard car={car} key={car.id} favoriteIds={favoriteIds} />

          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
