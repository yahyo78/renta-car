"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import imageBlur from "@/public/Img (20).svg";
import imageTrue from "@/public/Icon+ bg.svg";
import imagePhone from "@/public/Img (21).svg";
import imageAppStore from "@/public/App Store (1).svg";
import AboutCard from "@/components/myComponents/about/aboutCard";
import imageUser from "@/public/Img (22).svg";
import MyAccordion from "@/components/myComponents/about/myAccordion";
import imageCarShadowBlur from "@/public/Frame 130.svg";

const About = () => {
  return (
    <>
      <section className="xl:px-0 px-[20px]">
        <div className="flex flex-col items-center py-[50px] gap-[10px]">
          <h1 className="xl:text-[50px] font-black text-[40px]">О нас</h1>
          <p className="text-gray-400">
            Главная / <span className="text-black">О нас</span>
          </p>
        </div>

        <div className="flex xl:flex-row flex-col justify-between gap-[30px]">
          <div className="xl:w-[30%]">
            <h1 className="xl:text-[50px] font-bold text-[40px]">
              Где каждая поездка кажется особенной
            </h1>
          </div>
          <div className="xl:w-[30%] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Разнообразие брендов
              </h1>
              <p>
                Мы предлагаем широкий выбор автомобилей — комфорт, стиль и свобода движения для каждого клиента.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Максимальная свобода
              </h1>
              <p>
                Гибкие условия аренды, удобные тарифы и сервис, созданный для вашего полного комфорта.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Отличная поддержка
              </h1>
              <p>
                Наша служба поддержки всегда готова помочь — быстро, профессионально и дружелюбно.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h1 className="xl:text-[28px] text-[25px] font-bold">
                Гибкость на ходу
              </h1>
              <p>
                Простая аренда для любой ситуации — быстро, удобно и без лишних хлопот.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px] xl:px-0 px-[20px]">
        <div className="flex xl:flex-row flex-col py-[30px] justify-between gap-[50px] items-center">
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              20k+
            </h1>
            <p className="font-bold xl:text-[25px]">Довольных клиентов</p>
          </div>
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              540+
            </h1>
            <p className="font-bold xl:text-[25px]">Автомобилей в парке</p>
          </div>
          <div className="text-center">
            <h1 className="text-[#5937E0] xl:text-[70px] font-bold text-[55px]">
              25+
            </h1>
            <p className="font-bold xl:text-[25px]">Лет опыта</p>
          </div>
        </div>
      </section>

      <section className="flex xl:flex-row flex-col items-center gap-[50px] xl:px-0 px-[5%] py-[30px] justify-between">
        <aside className="xl:w-[50%] flex-col flex gap-[30px]">
          <h1 className="text-[40px] xl:text-[50px] font-bold">
            Откройте незабываемые впечатления на дороге
          </h1>
          <p>
            Комфортные автомобили, гибкие условия и высокое качество обслуживания — всё для вашей идеальной поездки.
          </p>
          <div className="flex xl:flex-row flex-col items-center gap-[40px] justify-between">
            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Удобные условия аренды для каждого клиента
              </p>
            </div>

            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Забота о вашем комфорте на протяжении всего пути
              </p>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col items-center gap-[40px] justify-between">
            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>
                Прозрачные условия аренды без скрытых платежей
              </p>
            </div>

            <div className="flex gap-[20px] items-start xl:w-[47%]">
              <Image alt="" src={imageTrue} />
              <p>Индивидуальный подход для каждого клиента</p>
            </div>
          </div>
        </aside>
        <aside>
          <Image src={imageBlur} alt="" />
        </aside>
      </section>

      <section className="relative h-[150vh] xl:h-[85vh] flex items-end xl:px-0 px-[20px]">
        <div className="bg-[#5937E0] xl:px-0 px-[20px] bgImageDrift flex rounded-[30px] xl:h-[60vh] h-[110vh] items-center xl:flex-row flex-col-reverse">
          <aside className="xl:w-[47%] flex justify-center">
            <Image
              className="absolute xl:top-[0px] top-1"
              src={imagePhone}
              alt=""
            />
          </aside>

          <aside className="xl:w-[47%] py-[20px] flex flex-col gap-[20px] text-white">
            <p>Скачайте наше приложение</p>
            <h1 className="text-[40px] font-bold xl:text-[50px]">
              Скачайте наше приложение
            </h1>
            <p>
              Быстрая аренда, удобное управление и эксклюзивные предложения — всё прямо в вашем смартфоне.
            </p>
            <div className="flex xl:flex-row gap-[20px] flex-col items-center xl:gap-[40px]">
              <Image
                className="w-[80%] xl:w-[30%]"
                src={imageAppStore}
                alt=""
              />
              <Image
                className="w-[80%] xl:w-[30%]"
                src={imageAppStore}
                alt=""
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-[50px] xl:px-0 px-[20px]">
        <div className="flex flex-col items-center">
          <h1 className="xl:text-[50px] text-[40px] text-center font-bold">
            Отзывы наших клиентов
          </h1>
        </div>
        <div className="flex xl:flex-row flex-col gap-[50px] items-center py-[40px] justify-between">
          <AboutCard
            text={
              " Замечательный сервис! Аренда прошла быстро и удобно. Машина была в идеальном состоянии."
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
          <AboutCard
            text={
              " Отличный опыт аренды! Сотрудники вежливые, цены адекватные — рекомендую!"
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
          <AboutCard
            text={
              " Всё прошло гладко. Машина чистая, оформление заняло пару минут. Очень доволен!"
            }
            ImageUser={imageUser}
            job={"Kuphal LLC"}
            name={"Emanuel Boyle"}
          />
        </div>
      </section>

      <section className="flex flex-col xl:px-0 px-[20px] gap-[20px]">
        <MyAccordion
          Content={
            "Мы делаем процесс аренды максимально простым — выберите авто, заполните данные и отправляйтесь в путь!"
          }
          trigger={"Как это работает?"}
        />
        <MyAccordion
          Content={
            "Да, вы можете арендовать авто без кредитной карты, если выберете альтернативные способы оплаты."
          }
          trigger={"Могу ли я арендовать авто без кредитной карты?"}
        />
        <MyAccordion
          Content={
            "Для аренды нужен паспорт, водительское удостоверение и возраст от 21 года (в некоторых случаях 25+)."
          }
          trigger={"Какие требования для аренды автомобиля?"}
        />
        <MyAccordion
          Content={
            "Использование фаркопов и буксировка запрещены по условиям аренды для безопасности и сохранности авто."
          }
          trigger={
            "Можно ли буксировать или устанавливать фаркоп на арендованное авто?"
          }
        />
        <MyAccordion
          Content={
            "Да, мы предлагаем различные страховые пакеты для вашей защиты во время аренды."
          }
          trigger={"Есть ли у вас дополнительные страховые продукты?"}
        />
      </section>

      <section className="xl:px-0 px-[10px] py-[60px]">
        <div className="bg-[#5937E0] rounded-[30px] xl:gap-[40px] px-[30px] flex xl:flex-row flex-col justify-between items-center xl:px-[5%] py-[30px]">
          <aside className="bgImageDrift xl:w-[55%]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="xl:text-[50px] font-bold text-white text-[40px]">
                Ищете автомобиль?
              </h1>
              <h1 className="xl:text-[40px] font-bold text-white text-[40px]">
                +537 547-6401
              </h1>
              <p className="text-white">
                Быстрая аренда, большой выбор автомобилей и удобные условия. Свяжитесь с нами прямо сейчас!
              </p>

              <button className="p-[10px] w-[150px] px-[16px] rounded-[10px] bg-[#FF9E0C] text-white">
                Забронировать
              </button>
            </div>
          </aside>

          <aside>
            <Image src={imageCarShadowBlur} alt="" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
