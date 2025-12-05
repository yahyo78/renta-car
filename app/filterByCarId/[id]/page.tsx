"use client";
import { useGetByFiltersMutation } from "@/api/filterApi";
import { useEffect, useState } from "react";
import CarCard from "@/components/myComponents/home/carCard";
import { useGetMakesQuery } from "@/api/makeApi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useGetModelsQuery } from "@/api/modelApi";
import { useGetCarAtributQuery } from "@/api/carAtribiut";
import { useParams } from "next/navigation";

const FilterById = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [makeId, setMakeId] = useState(id);
  const [attrValueIds, setAttrValueIds] = useState<number[]>([]);

  const { data: makeData } = useGetMakesQuery("");
  const { data: modelData } = useGetModelsQuery("");
  const { data: carAtribiutWithVluesData } = useGetCarAtributQuery("");
  const [getByFilter, { data: filterData }] = useGetByFiltersMutation();

  useEffect(() => {
    if (id) {
      setMakeId(id);
    }
  }, [id]);

  useEffect(() => {
    const formData = new FormData();

    formData.append("MakeId", makeId);
    formData.append("ModelId", "");
    formData.append("MileageFrom", "");
    formData.append("MileageTo", "");
    formData.append("YearFrom", "");
    formData.append("YearTo", "");
    formData.append("PriceFrom", "");
    formData.append("PriceTo", "");
    formData.append("MileageFrom", "");
    formData.append("MileageTo", "");

    attrValueIds.forEach((value, index) =>
      formData.append(`AttributeValueIds[${index}]`, value)
    );

    getByFilter(formData);
  }, []);

  function pushAtributValueArray(valueId: number) {
    setAttrValueIds((prev) => {
      if (prev.includes(valueId)) return prev;

      const allValues = carAtribiutWithVluesData?.flatMap((a) => a.values);
      const newValueObj = allValues?.find((v) => v.id === valueId);
      if (!newValueObj) return prev;

      const filtered = prev.filter((id) => {
        const found = allValues?.find((v) => v.id === id);
        return found?.carAttributeId !== newValueObj.carAttributeId;
      });

      return [...filtered, valueId];
    });
  }

  async function subMitFilterUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("MakeId", makeId);

    attrValueIds.forEach((value, index) =>
      formData.append(`AttributeValueIds[${index}]`, value)
    );

    await getByFilter(formData);
  }

  // ---------- STYLES ----------
  const selectStyle =
    "w-full rounded-[14px] p-[25px] bg-gray-50 border border-gray-200 text-[16px] h-[56px]";
  const inputStyle =
    "w-full border border-gray-200 p-[15px] rounded-[14px] bg-gray-50 text-[16px] h-[56px]";
  const inputStyleDoubleLeft =
    "w-full border border-gray-200 p-[15px] rounded-l-[14px] bg-gray-50 text-[16px] h-[56px]";
  const inputStyleDoubleRight =
    "w-full border border-gray-200 p-[15px] rounded-r-[14px] bg-gray-50 text-[16px] h-[56px]";

  return (
    <section className="py-[30px] flex flex-col gap-[40px]">
      {/* TOP FILTER BAR */}
      <form
        onSubmit={subMitFilterUser}
        className="
          w-[100%] bg-white rounded-[22px] shadow-lg p-[20px]
          border border-gray-100 flex flex-wrap gap-[20px]
        "
      >
        {/* Make */}
        <div className="w-full sm:w-[330px]">
          <p className="font-semibold mb-[6px] text-gray-700">Make</p>
          <Select value={makeId} onValueChange={(v) => setMakeId(v)}>
            <SelectTrigger className={selectStyle}>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>

            <SelectContent>
              {makeData?.map((make) =>
                make.isActive ? (
                  <SelectItem key={make.id} value={String(make.id)}>
                    {make.name}
                  </SelectItem>
                ) : null
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Model */}
        <div className="w-full sm:w-[330px]">
          <p className="font-semibold mb-[6px] text-gray-700">Model</p>
          <Select name="ModelId" disabled={!makeId}>
            <SelectTrigger
              className={`${selectStyle} ${
                !makeId ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <SelectValue placeholder="Select model" />
            </SelectTrigger>

            <SelectContent>
              {modelData
                ?.filter((m) => String(m.makeId) === makeId)
                ?.map((model) => (
                  <SelectItem key={model.id} value={String(model.id)}>
                    {model.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dynamic attributes */}
        {carAtribiutWithVluesData?.map((attr) => (
          <div className="w-full sm:w-[200px]" key={attr.id}>
            <p className="font-semibold mb-[6px] text-gray-700">{attr.name}</p>

            <Select
              onValueChange={(value) => pushAtributValueArray(Number(value))}
            >
              <SelectTrigger className={selectStyle}>
                <SelectValue placeholder={attr.name} />
              </SelectTrigger>

              <SelectContent>
                {attr.values.map((v) => (
                  <SelectItem key={v.id} value={String(v.id)}>
                    {v.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}

        {/* Year */}
        <div className="flex gap-[0px] w-full sm:w-[260px]">
          <input
            name="yearFrom"
            type="number"
            placeholder="Year from"
            className={inputStyleDoubleLeft}
            onWheel={(e) => e.target.blur()}
          />
          <input
            name="yearTo"
            type="number"
            placeholder="To"
            className={inputStyleDoubleRight}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Price */}
        <div className="flex gap-[0px] w-full sm:w-[260px]">
          <input
            name="priceFrom"
            type="number"
            placeholder="$ From"
            className={inputStyleDoubleLeft}
            onWheel={(e) => e.target.blur()}
          />
          <input
            name="priceTo"
            type="number"
            placeholder="$ To"
            className={inputStyleDoubleRight}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Price */}
        <div className="flex gap-[0px] w-full sm:w-[260px]">
          <input
            name="MileageFrom"
            type="number"
            placeholder="MileageFrom"
            className={inputStyleDoubleLeft}
            onWheel={(e) => e.target.blur()}
          />
          <input
            name="MileageTo"
            type="number"
            placeholder="MileageTo"
            className={inputStyleDoubleRight}
            onWheel={(e) => e.target.blur()}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full sm:w-[500px] bg-[#5937e0] text-white py-[15px] rounded-[14px]
            font-semibold tracking-wide hover:bg-gray-800 transition
          "
        >
          Filter
        </button>
      </form>

      {/* CAR LIST */}
      <div className="flex-1">
        {/* <h1 className="xl:text-[50px] text-[40px] font-bold text-center text-gray-900">
          
        </h1> */}

        <div className="flex flex-wrap py-[40px] gap-[40px]">
          {filterData?.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterById;
