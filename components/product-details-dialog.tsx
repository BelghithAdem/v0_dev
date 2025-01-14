'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Product } from "@/types/sales-order"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Package, BarChart2, DollarSign, Box, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ProductDetailsDialogProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailsDialog({ product, open, onOpenChange }: ProductDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Product Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.code}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{product.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold">Pricing</h3>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Unit Price:</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Box className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold">Inventory</h3>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Category:</span>
                  <span>{product.category}</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold">Statistics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Monthly Sales</p>
                <p className="text-lg font-semibold">127 units</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Reorder Point</p>
                <p className="text-lg font-semibold">15 units</p>
              </div>
            </div>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}

