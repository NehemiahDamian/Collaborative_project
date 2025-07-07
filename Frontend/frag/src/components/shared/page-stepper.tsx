import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";

interface PageStepperProps {
  // Define any props you might need in the future
  brands?: string;
  fragrance?: string;
}

export const PageStepper = ({ brands, fragrance }: PageStepperProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/brands">Fragrances</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/brands">{brands}</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{fragrance}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
