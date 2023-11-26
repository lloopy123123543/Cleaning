import Image from 'next/image'
import MainThingComponent from "@/app/components/MainThingComponent/MainThingComponent";
import TableComponent from "@/app/components/TableComponent/TableComponent";
import AboutUsComponent from "@/app/components/AboutUsComponent/AboutUsComponent";
import TimeLineComponent from "@/app/components/TimeLine/TimeLineComponent";
import PricingComponent from "@/app/components/PricingComponent/PricingComponent";
import OneTimePaymentComponent from "@/app/components/OneTimePayment/OneTimePaymentComponent";
import FeaturesComponent from "@/app/components/FeaturesComponent/FeaturesComponent";
import WhyUsComponent from "@/app/components/WhyUsComponent/WhyUsComponent";
import CalculatorComponent from "@/app/components/CalculatorComponent/CalculatorComponent";

export default function Home() {
  return (
      <div className={"w-full container p-0"}>
          <MainThingComponent/>
          <AboutUsComponent/>
          <WhyUsComponent/>
          <TableComponent/>
          <OneTimePaymentComponent/>
          <TimeLineComponent/>
          <PricingComponent/>
          <FeaturesComponent/>
          <CalculatorComponent/>
      </div>
  )
}
