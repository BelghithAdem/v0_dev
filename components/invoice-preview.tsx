import { SalesOrder, Customer } from "@/types/sales-order"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"

interface InvoicePreviewProps {
  order: Partial<SalesOrder>
  customer?: Customer
}

export function InvoicePreview({ order, customer }: InvoicePreviewProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border">
      {/* Header */}
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">INVOICE</h1>
          <p className="text-sm text-muted-foreground mt-1">#{order.orderNumber || 'N/A'}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Date</p>
          <p className="font-medium">{order.orderDate ? format(new Date(order.orderDate), 'MMM d, yyyy') : 'N/A'}</p>
        </div>
      </div>

      {/* Company and Customer Information */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">From</p>
          <h3 className="font-semibold">Your Company Name</h3>
          <div className="text-sm text-muted-foreground">
            <p>123 Business Street</p>
            <p>City, State 12345</p>
            <p>contact@company.com</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">Bill To</p>
          {customer ? (
            <div>
              <h3 className="font-semibold">{customer.name}</h3>
              <div className="text-sm text-muted-foreground">
                <p>{customer.billingAddress?.street}</p>
                <p>{customer.billingAddress?.city}, {customer.billingAddress?.state} {customer.billingAddress?.postalCode}</p>
                <p>{customer.email}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No customer selected</p>
          )}
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Item</th>
              <th className="text-center py-3 px-4">Quantity</th>
              <th className="text-right py-3 px-4">Rate</th>
              <th className="text-right py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {order.orderLines?.map((line) => (
              <tr key={line.id} className="border-b">
                <td className="py-3 px-4">
                  <div className="font-medium">{line.productName}</div>
                  <div className="text-sm text-muted-foreground">{line.productCode}</div>
                </td>
                <td className="text-center py-3 px-4">{line.quantity}</td>
                <td className="text-right py-3 px-4">${line.unitPrice?.toFixed(2) ?? '0.00'}</td>
                <td className="text-right py-3 px-4">${line.total?.toFixed(2) ?? '0.00'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="border-t pt-4">
        <div className="flex justify-end">
          <div className="w-64">
            <div className="flex justify-between py-1">
              <span className="text-sm text-muted-foreground">Subtotal:</span>
              <span>${order.subtotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm text-muted-foreground">Tax:</span>
              <span>${order.taxTotal?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-sm text-muted-foreground">Shipping:</span>
              <span>${order.shippingCost?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between py-3 border-t font-semibold">
              <span>Total:</span>
              <span>${order.total?.toFixed(2) || '0.00'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      {order.notes && (
        <div className="mt-8 border-t pt-4">
          <h4 className="font-medium mb-2">Notes</h4>
          <p className="text-sm text-muted-foreground">{order.notes}</p>
        </div>
      )}

      {/* Payment Terms */}
      <div className="mt-8 text-sm text-muted-foreground">
        <p>Payment Terms: {order.paymentTerms || 'N/A'}</p>
        <p className="mt-2">Thank you for your business!</p>
      </div>
    </div>
  )
}

