'use client'

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { OrderLine, Product } from "@/types/sales-order"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Package, ExternalLink, AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ProductDetailsDialog } from "./product-details-dialog"

interface OrderLineDialogProps {
  orderLine?: OrderLine
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (orderLine: Partial<OrderLine>) => void
  products: Product[]
  onAddExistingProduct: (product: Product) => void
  currencies: { code: string; symbol: string }[]
  exchangeRates: { [key: string]: number }
}

export function OrderLineDialog({ 
  orderLine, 
  open, 
  onOpenChange, 
  onSave, 
  products, 
  onAddExistingProduct,
  currencies,
  exchangeRates
}: OrderLineDialogProps) {
  const [formData, setFormData] = useState<Partial<OrderLine>>(orderLine || {
    qty: 1,
    product_price: 0,
    tax_rate: 0,
    discount: 0,
  })
  const [selectedProductId, setSelectedProductId] = useState<string>("")
  const [calculatedTotal, setCalculatedTotal] = useState<number>(0)
  const [stockWarning, setStockWarning] = useState(false)
  const [productDetailsOpen, setProductDetailsOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].code)

  useEffect(() => {
    if (orderLine) {
      setFormData(orderLine)
      setSelectedProductId(orderLine.product_id)
    } else {
      setFormData({
        qty: 1,
        product_price: 0,
        tax_rate: 0,
        discount: 0,
      })
      setSelectedProductId("")
    }
  }, [orderLine])

  useEffect(() => {
    // Calculate total when form data changes
    const quantity = formData.qty || 0
    const unitPrice = formData.product_price || 0
    const taxRate = formData.tax_rate || 0
    const discount = formData.discount || 0

    const subtotal = quantity * unitPrice
    const taxAmount = subtotal * (taxRate / 100)
    const discountAmount = subtotal * (discount / 100)
    const total = subtotal + taxAmount - discountAmount

    setCalculatedTotal(total)

    // Check stock levels
    if (selectedProductId) {
      const product = products.find(p => p.id === selectedProductId)
      if (product && quantity > product.inStock) {
        setStockWarning(true)
      } else {
        setStockWarning(false)
      }
    }
  }, [formData, selectedProductId, products])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onOpenChange(false)
  }

  const handleProductSelect = (productId: string) => {
    const selectedProduct = products.find(p => p.id === productId)
    if (selectedProduct) {
      setSelectedProductId(productId)
      setFormData({
        ...formData,
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        productCode: selectedProduct.code,
        unitPrice: selectedProduct.unitPrice,
        taxRate: selectedProduct.taxRate,
      })
    }
  }

  const selectedProduct = products.find(p => p.id === selectedProductId)

  const convertPrice = (price: number, fromCurrency: string, toCurrency: string) => {
    if (fromCurrency === toCurrency) return price
    return price * (exchangeRates[toCurrency] / exchangeRates[fromCurrency])
  }

  const getStockLevelBadge = (inStock: number) => {
    if (inStock > 20) return <Badge className="bg-green-500">In Stock</Badge>
    if (inStock > 0) return <Badge className="bg-yellow-500">Low Stock</Badge>
    return <Badge className="bg-red-500">Out of Stock</Badge>
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              {orderLine ? 'Edit Order Line' : 'Add Order Line'}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full pr-4">
            <form onSubmit={handleSubmit} className="grid gap-6 py-4">
              <div className="grid gap-4">
                <Label htmlFor="product">Product</Label>
                <Select
                  value={selectedProductId}
                  onValueChange={handleProductSelect}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{product.name}</span>
                          {getStockLevelBadge(product.inStock)}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedProduct && (
                  <Card className="p-4">
                    <div className="grid gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{selectedProduct.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedProduct.code}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            {currencies.find(c => c.code === selectedCurrency)?.symbol}
                            {convertPrice(selectedProduct.price, 'USD', selectedCurrency).toFixed(2)}
                          </Badge>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => setProductDetailsOpen(true)}
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Details
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm">{selectedProduct.description}</p>
                      {selectedProduct.inStock <= 10 && (
                        <Alert variant="warning">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            Only {selectedProduct.inStock} units left in stock
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </Card>
                )}
              </div>

              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={formData.quantity || ''}
                      onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="unitPrice">Unit Price</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="unitPrice"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.unitPrice || ''}
                        onChange={(e) => setFormData({ ...formData, unitPrice: Number(e.target.value) })}
                      />
                      <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent>
                          {currencies.map(currency => (
                            <SelectItem key={currency.code} value={currency.code}>
                              {currency.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      step="0.1"
                      min="0"
                      value={formData.taxRate || ''}
                      onChange={(e) => setFormData({ ...formData, taxRate: Number(e.target.value) })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="discount">Discount (%)</Label>
                    <Input
                      id="discount"
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      value={formData.discount || ''}
                      onChange={(e) => setFormData({ ...formData, discount: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              {stockWarning && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Warning: Quantity exceeds available stock ({selectedProduct?.inStock} available)
                  </AlertDescription>
                </Alert>
              )}

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any special instructions or notes about this item"
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <Card className="p-4">
                <div className="grid gap-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{currencies.find(c => c.code === selectedCurrency)?.symbol}{convertPrice(((formData.quantity || 0) * (formData.unitPrice || 0)), 'USD', selectedCurrency).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax ({formData.taxRate}%):</span>
                    <span>{currencies.find(c => c.code === selectedCurrency)?.symbol}{convertPrice(((formData.quantity || 0) * (formData.unitPrice || 0)) * ((formData.taxRate || 0) / 100), 'USD', selectedCurrency).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Discount ({formData.discount}%):</span>
                    <span>-{currencies.find(c => c.code === selectedCurrency)?.symbol}{convertPrice(((formData.quantity || 0) * (formData.unitPrice || 0)) * ((formData.discount || 0) / 100), 'USD', selectedCurrency).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total:</span>
                    <span>{currencies.find(c => c.code === selectedCurrency)?.symbol}{convertPrice(calculatedTotal, 'USD', selectedCurrency).toFixed(2)}</span>
                  </div>
                </div>
              </Card>
            </form>
          </ScrollArea>
          <DialogFooter className="flex gap-2 mt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleSubmit}
              disabled={!selectedProductId || stockWarning}
            >
              {orderLine ? 'Update' : 'Add to Order'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {selectedProduct && (
        <ProductDetailsDialog
          product={selectedProduct}
          open={productDetailsOpen}
          onOpenChange={setProductDetailsOpen}
        />
      )}
    </>
  )
}

