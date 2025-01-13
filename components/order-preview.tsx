'use client'

import { SalesOrder, Customer } from "@/types/sales-order"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

interface OrderPreviewProps {
  order: Partial<SalesOrder>
  customer?: Customer
}

export function OrderPreview({ order, customer }: OrderPreviewProps) {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">Company Name</h3>
              <p className="text-sm text-muted-foreground">123 Business Street</p>
              <p className="text-sm text-muted-foreground">City, State 12345</p>
            </div>
            <div className="text-right">
              <h3 className="font-semibold">Order Details</h3>
              <p className="text-sm text-muted-foreground">Order #: {order.orderNumber}</p>
              <p className="text-sm text-muted-foreground">
                Date: {order.orderDate ? format(new Date(order.orderDate), 'MMM d, yyyy') : 'N/A'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Bill To:</h3>
              {customer ? (
                <div className="text-sm text-muted-foreground">
                  <p>{customer.name}</p>
                  <p>{customer.billingAddress.street}</p>
                  <p>
                    {customer.billingAddress.city}, {customer.billingAddress.state}{' '}
                    {customer.billingAddress.postalCode}
                  </p>
                  <p>{customer.billingAddress.country}</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No customer selected</p>
              )}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ship To:</h3>
              {customer ? (
                <div className="text-sm text-muted-foreground">
                  <p>{customer.name}</p>
                  <p>{customer.shippingAddress.street}</p>
                  <p>
                    {customer.shippingAddress.city}, {customer.shippingAddress.state}{' '}
                    {customer.shippingAddress.postalCode}
                  </p>
                  <p>{customer.shippingAddress.country}</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No customer selected</p>
              )}
            </div>
          </div>

          <ScrollArea className="h-[300px] border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Unit Price</TableHead>
                  <TableHead className="text-right">Discount</TableHead>
                  <TableHead className="text-right">Tax</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderLines?.map((line) => (
                  <TableRow key={line.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{line.productName}</p>
                        <p className="text-sm text-muted-foreground">{line.productCode}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{line.quantity}</TableCell>
                    <TableCell className="text-right">${line.unitPrice.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{line.discount}% (-${((line.unitPrice * line.quantity) * (line.discount / 100)).toFixed(2)})</TableCell>
                    <TableCell className="text-right">{line.taxRate}%</TableCell>
                    <TableCell className="text-right">${line.total.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${order.subtotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax:</span>
              <span>${order.taxTotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount:</span>
              <span>-${order.discountTotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>${order.shippingCost?.toFixed(2) || '0.00'}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${order.total?.toFixed(2) || '0.00'}</span>
            </div>
          </div>

          {order.notes && (
            <div className="space-y-2">
              <h3 className="font-semibold">Notes</h3>
              <p className="text-sm text-muted-foreground">{order.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

