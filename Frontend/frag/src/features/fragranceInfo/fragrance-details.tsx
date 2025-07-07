import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import type { Fragrance } from "@/lib/fragrance";
import { YouMayAlsoLike } from "./you-may-also-like";

interface FragranceDetailsProps {
  fragrance: Fragrance;
}

export const FragranceDetails = ({ fragrance }: FragranceDetailsProps) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Fragrance</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{fragrance.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container mx-auto p-4 flex justify-center gap-6">
        <div>
          <Card className="bg-[#F5F2EB] rounded-none m-0 p-0">
            <div className="flex justify-center items-center object-fill h-[650px] w-[650px] shadow-xl m-0 p-0">
              <img
                src={fragrance.image}
                alt="fragrance"
                className="w-full h-138 object-contain rounded"
              />
            </div>
          </Card>
          {/* // image below the main image */}
          <div className="flex mt-4 gap-8">
            <Card className="bg-[#F5F2EB] rounded-none m-0 p-0">
              <div className="flex justify-center items-center object-fill h-[110px] w-[110px] shadow-xl m-0 p-0">
                <img
                  src={fragrance.image}
                  alt="fragrance"
                  className="w-full h-22 object-contain rounded"
                />
              </div>
            </Card>
            <Card className="bg-[#F5F2EB] rounded-none m-0 p-0">
              <div className="flex justify-center items-center object-fill h-[110px] w-[110px] shadow-xl m-0 p-0">
                <img
                  src={fragrance.image}
                  alt="fragrance"
                  className="w-full h-22 object-contain rounded"
                />
              </div>
            </Card>
            <Card className="bg-[#F5F2EB] rounded-none m-0 p-0">
              <div className="flex justify-center items-center object-fill h-[110px] w-[110px] shadow-xl m-0 p-0">
                <img
                  src={fragrance.image}
                  alt="fragrance"
                  className="w-full h-22 object-contain rounded"
                />
              </div>
            </Card>
          </div>
        </div>
        <div>
          <Card className="bg-[#FAF9F5] rounded-none h-fit w-[650px] shadow-xl">
            <CardHeader>
              <h2 className="text-2xl font-bold">{fragrance.name}</h2>
              <p className="text-sm text-gray-500">{fragrance.brand}</p>
            </CardHeader>
            <CardContent>
              <Accordion
                type="multiple"
                className="w-full px-2"
                defaultValue={["item-1", "item-2"]}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-ubuntu font-bold">
                    Details
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-sm">{fragrance.details}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Key Notes</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <div className="flex mt-2">
                      {fragrance.keynotesImage.map((image, index) => (
                        <div>
                          <div
                            className="w-30 h-30 bg-[#F5F2EB] flex flex-col justify-center items-center shadow-lg ml-2"
                            key={index}
                          >
                            <img
                              src={image}
                              alt={`Keynote ${index + 1}`}
                              className="w-24 h-24 object-cover rounded"
                            />
                          </div>
                          {fragrance.keynotes[index] && (
                            <p className="text-center mt-2 text-sm font-semibold">
                              {fragrance.keynotes[index]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Ingredients</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-sm">{fragrance.ingredients}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How to Use</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-sm">{fragrance.howToUse}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-[200px]">
        <YouMayAlsoLike />
      </div>
    </>
  );
};
