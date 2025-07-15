import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PageSizeSelectProps {
  value: number;
  onChange: (value: string) => void;
}

export default function PageSizeSelect({
  value,
  onChange,
}: PageSizeSelectProps) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium">Rows per page</p>
      <Select value={`${value}`} onValueChange={onChange}>
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent side="top">
          {[1, 2, 5, 10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
