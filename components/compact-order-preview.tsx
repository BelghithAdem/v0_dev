'use client'

import { useState, useMemo } from 'react'
import { SalesOrder } from "@/types/sales-order"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Search } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

interface CompactOrderPreviewProps {
  order: Partial<SalesOrder>
}

export function CompactOrderPreview({ order }: CompactOrderPreviewProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    if (value.trim()) {
      const results = order.orderLines?.filter(line => 
        line.productName.toLowerCase().includes(value.toLowerCase()) ||
        line.productCode.toLowerCase().includes(value.toLowerCase())
      )
      toast({
        description: `Found ${results?.length || 0} matching items`
      })
    }
  }

  const filteredOrderLines = useMemo(() => {
    if (!searchTerm.trim()) return order.orderLines
    
    return order.orderLines?.filter(line => 
      line.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      line.productCode.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [order.orderLines, searchTerm])

  const calculateFilteredTotal = () => {
    return filteredOrderLines?.reduce((sum, line) => sum + (line.total ?? 0), 0) ?? 0
  }

  const calculateFilteredSubtotal = () => {
    return filteredOrderLines?.reduce((sum, line) => sum + (line.subTotal ?? 0), 0) ?? 0
  }

  const calculateFilteredDiscount = () => {
    return filteredOrderLines?.reduce((sum, line) => 
      sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0) ?? 0
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      
      <ScrollArea className="h-[400px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead className="text-right">Line Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrderLines?.map((line) => (
              <TableRow key={line.id}>
                <TableCell>
                  <div>
                    <div>{line.productName}</div>
                    <div className="text-sm text-muted-foreground">{line.productCode}</div>
                  </div>
                </TableCell>
                <TableCell>{line.quantity}</TableCell>
                <TableCell>${line.unitPrice.toFixed(2)}</TableCell>
                <TableCell>
                  {line.discount > 0 ? (
                    <span className="text-red-500">-{line.discount}%</span>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="space-y-1">
                    {line.discount > 0 && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${(line.quantity * line.unitPrice).toFixed(2)}
                      </div>
                    )}
                    <div>${line.total.toFixed(2)}</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>

      <div className="space-y-2 pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${calculateFilteredSubtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-red-500">
          <span>Total Discount</span>
          <span>-${calculateFilteredDiscount().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span>${calculateFilteredTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

