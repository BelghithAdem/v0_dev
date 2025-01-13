'use client'

import { useState, useEffect } from "react"
import { format } from 'date-fns'
import { CalendarIcon, Plus, FileText, Truck, Receipt, Paperclip, AlertCircle, Trash2, HelpCircle, Eye } from 'lucide-react'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { CustomerManagement } from "@/components/customer-management"
import { OrderLineDialog } from "@/components/order-line-dialog"
import { QuickAddFavorites } from "@/components/quick-add-favorites"
import { ProductRecommendations } from "@/components/product-recommendations"
import { DraggableOrderLineItem } from "@/components/draggable-order-line-item"
import { BatchActions } from "@/components/batch-actions"
import { Customer, OrderLine, SalesOrder, Product, ShippingMethod, PaymentMethod } from "@/types/sales-order"
import { customers, products, warehouses, shippingMethods, paymentMethods, initialOrderLines, sampleSalesOrders } from "@/data/dummy-data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { CopyFromDialog } from "@/components/copy-from-dialog"
import { CopyToDialog } from "@/components/copy-to-dialog"
import { OrderTemplates } from "@/components/order-templates"
import { OrderPreview } from "@/components/order-preview"
import { EnhancedAttachments } from "@/components/enhanced-attachments"
import { InvoiceGenerator } from "@/components/invoice-generator"
import { KeyboardShortcutsInfo } from "@/components/keyboard-shortcuts-info"
import { customers as customerData } from "@/data/dummy-data"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { CompactOrderPreview } from "@/components/compact-order-preview"


const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
]

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
}

interface Template {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  tags: string[];
  order: SalesOrder;
}

export default function CreateSalesOrder() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>()
  const [selectedDates, setSelectedDates] = useState({
    orderDate: new Date(),
    deliveryDate: undefined,
    dueDate: undefined,
  })
  const [orderLines, setOrderLines] = useState<OrderLine[]>(initialOrderLines)
  const [orderLineDialogOpen, setOrderLineDialogOpen] = useState(false)
  const [editingOrderLine, setEditingOrderLine] = useState<OrderLine>()
  const [status, setStatus] = useState<SalesOrder['status']>('draft')
  const [shippingMethod, setShippingMethod] = useState('')
  const [trackingNumber, setTrackingNumber] = useState('')
  const [paymentTerms, setPaymentTerms] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [notes, setNotes] = useState('')
  const [customerNotes, setCustomerNotes] = useState('')
  const [internalNotes, setInternalNotes] = useState('')
  const [attachments, setAttachments] = useState<File[]>([])
  const [creditLimitWarning, setCreditLimitWarning] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [bulkUploadOpen, setBulkUploadOpen] = useState(false)
  const [copyFromDialogOpen, setCopyFromDialogOpen] = useState(false)
  const [copyToDialogOpen, setCopyToDialogOpen] = useState(false)
  const [salesOrders, setSalesOrders] = useState<SalesOrder[]>(sampleSalesOrders)
  const [selectedOrderLines, setSelectedOrderLines] = useState<string[]>([])
  const [shortcutsOpen, setShortcutsOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Standard Office Setup',
      description: 'Basic office equipment package including laptop, monitor, and accessories',
      createdAt: new Date(),
      tags: ['Office', 'Hardware', 'Standard'],
      order: {
        id: '1',
        orderNumber: 'TEMPLATE-001',
        customerId: '',
        status: 'draft',
        orderDate: new Date(),
        paymentTerms: 'net30',
        currency: 'USD',
        subtotal: 1729.97,
        taxTotal: 147.05,
        discountTotal: 0,
        shippingCost: 0,
        total: 1877.02,
        orderLines: [
          {
            id: '1',
            productId: '1',
            productName: 'Premium Laptop',
            productCode: 'TECH-001',
            quantity: 1,
            unitPrice: 1299.99,
            taxRate: 8.5,
            discount: 0,
            subTotal: 1299.99,
            total: 1410.49,
            unit: 'piece',
            isCustom: false
          },
          {
            id: '2',
            productId: '2',
            productName: 'Wireless Mouse',
            productCode: 'ACC-001',
            quantity: 1,
            unitPrice: 29.99,
            taxRate: 8.5,
            discount: 0,
            subTotal: 29.99,
            total: 32.54,
            unit: 'piece',
            isCustom: false
          },
          {
            id: '3',
            productId: '3',
            productName: '4K Monitor',
            productCode: 'DISP-001',
            quantity: 1,
            unitPrice: 399.99,
            taxRate: 8.5,
            discount: 0,
            subTotal: 399.99,
            total: 433.99,
            unit: 'piece',
            isCustom: false
          }
        ],
        paymentMethod: '1',
        isPaid: false
      }
    },
    // ... other template objects remain the same
  ])

  const favoriteProducts = products.slice(0, 3)
  const productBundles = [
    { 
      id: 'bundle1', 
      name: 'Office Starter Kit', 
      products: [products[0], products[1]] 
    },
    { 
      id: 'bundle2', 
      name: 'Premium Workstation', 
      products: [products[0], products[1], products[2]] 
    }
  ]

  const recommendedProducts = products.slice(0, 3) 

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleCopyFrom = (sourceOrder: SalesOrder) => {
    setSelectedCustomer(customers.find(c => c.id === sourceOrder.customerId))
    setOrderLines(sourceOrder.orderLines)
    setShippingMethod(sourceOrder.shippingMethod || '')
    setPaymentTerms(sourceOrder.paymentTerms)
    setCurrency(sourceOrder.currency)
    setNotes(sourceOrder.notes || '')
    setCustomerNotes(sourceOrder.customerNotes || '')
    setInternalNotes(sourceOrder.internalNotes || '')
    setCopyFromDialogOpen(false)
  }

  const handleCopyTo = (targetType: string) => {
    console.log(`Copying current order to ${targetType}`)
    setCopyToDialogOpen(false)
  }

  useEffect(() => {
    if (selectedCustomer && calculateTotal() > (selectedCustomer.creditLimit || 0)) {
      setCreditLimitWarning(true)
    } else {
      setCreditLimitWarning(false)
    }
  }, [selectedCustomer, orderLines])

  const handleAddOrderLine = (orderLine: Partial<OrderLine>) => {
    const newOrderLine = {
      ...orderLine,
      id: Math.random().toString(),
      subTotal: (orderLine.quantity ?? 0) * (orderLine.unitPrice ?? 0),
      total: (orderLine.quantity ?? 0) * (orderLine.unitPrice ?? 0) * (1 + (orderLine.taxRate ?? 0) / 100) * (1 - (orderLine.discount ?? 0) / 100)
    } as OrderLine

    setOrderLines([...orderLines, newOrderLine])
  }

  const handleUpdateOrderLine = (updatedLine: OrderLine) => {
    setOrderLines(orderLines.map(line => 
      line.id === updatedLine.id ? updatedLine : line
    ))
  }

  const handleDeleteOrderLine = (id: string) => {
    setOrderLines(orderLines.filter(ol => ol.id !== id))
    setSelectedOrderLines(selectedOrderLines.filter(lineId => lineId !== id))
  }

  const handleToggleRecurring = (id: string) => {
    setOrderLines(orderLines.map(line =>
      line.id === id ? { ...line, isRecurring: !line.isRecurring } : line
    ))
  }

  const calculateTotal = () => {
    return orderLines.reduce((sum, line) => sum + (line.total ?? 0), 0)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)])
    }
  }

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const handleCreateCustomer = (customer: Customer) => {
    customers.push(customer)
    setSelectedCustomer(customer)
  }

  const handleBulkUpload = (file: File) => {
    console.log(`Bulk upload file: ${file.name}`)
    setBulkUploadOpen(false)
  }

  const handleAddExistingProduct = (product: Product) => {
    const newOrderLine: OrderLine = {
      id: Math.random().toString(),
      productId: product.id,
      productName: product.name,
      productCode: product.code,
      quantity: 1,
      unitPrice: product.unitPrice,
      taxRate: product.taxRate,
      discount: 0,
      subTotal: product.unitPrice,
      total: product.unitPrice * (1 + product.taxRate / 100),
      unit: "piece",
      warehouse: warehouses[0].id,
      isCustom: false
    }
    setOrderLines([...orderLines, newOrderLine])
  }

  const handleAddFavoriteProducts = (newOrderLines: OrderLine[]) => {
    setOrderLines([...orderLines, ...newOrderLines])
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setOrderLines((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const handleApplyDiscount = (discount: number) => {
    setOrderLines(orderLines.map(line =>
      selectedOrderLines.includes(line.id)
        ? {
            ...line,
            discount,
            total: line.subTotal * (1 + line.taxRate / 100) * (1 - discount / 100)
          }
        : line
    ))
  }

  const handleApplyTax = (tax: number) => {
    setOrderLines(orderLines.map(line =>
      selectedOrderLines.includes(line.id)
        ? {
            ...line,
            taxRate: tax,
            total: line.subTotal * (1 + tax / 100) * (1 - line.discount / 100)
          }
        : line
    ))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case 's':
            e.preventDefault()
            setStatus('draft')
            break
          case 'Enter':
            e.preventDefault()
            setStatus('pending')
            break
          case 'b':
            e.preventDefault()
            setOrderLineDialogOpen(true)
            break
          case '/':
            e.preventDefault()
            setShortcutsOpen(true)
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handlePreviewTemplate = (template: SalesOrder) => {
    setPreviewOpen(true)
    const previewOrder = {
      ...template,
      orderNumber: `PREVIEW-${template.orderNumber}`,
      orderDate: new Date(),
    }
    setSelectedCustomer(undefined) 
    setOrderLines(template.orderLines)
    setPaymentTerms(template.paymentTerms)
    setCurrency(template.currency)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">Create Sales Order</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShortcutsOpen(true)}
            className="ml-2"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <div/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create and manage sales orders with a comprehensive form. Configure customer details, order lines, shipping, and payment information all in one place.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setPreviewOpen(true)}>
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview the complete order before finalizing. Review all details including customer information, order lines, and totals.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setCopyFromDialogOpen(true)}>Copy From</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new order by copying details from an existing order or template. Useful for recurring orders.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setCopyToDialogOpen(true)}>Copy To</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy this order to create a new document type (e.g., quotation, invoice, or purchase order).</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setStatus('draft')}>Save as Draft</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save the current order as a draft to continue editing later. All information will be preserved.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button onClick={() => setStatus('pending')}>Create Order</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Finalize and create the sales order. This will move the order to pending status and notify relevant parties.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </div>
      </div>

      {creditLimitWarning && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Credit Limit Warning</AlertTitle>
          <AlertDescription>
            The total order amount exceeds the customer&apos;s credit limit. Please review before proceeding.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CustomerManagement 
              customers={customerData}
              selectedCustomer={selectedCustomer}
              onSelectCustomer={setSelectedCustomer}
              onCreateCustomer={handleCreateCustomer}
            />
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger asChild>
                  <div/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>info box text</p>
                </TooltipContent>
              </TooltipRoot>
            </TooltipProvider>
            {selectedCustomer && !selectedCustomer.isGuest && (
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Billing Address</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedCustomer.billingAddress.street}<br />
                    {selectedCustomer.billingAddress.city}, {selectedCustomer.billingAddress.state} {selectedCustomer.billingAddress.postalCode}<br />
                    {selectedCustomer.billingAddress.country}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Shipping Address</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedCustomer.shippingAddress.street}<br />
                    {selectedCustomer.shippingAddress.city}, {selectedCustomer.shippingAddress.state} {selectedCustomer.shippingAddress.postalCode}<br />
                    {selectedCustomer.shippingAddress.country}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedCustomer.phone}<br />
                    {selectedCustomer.email}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Financial Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Tax ID: {selectedCustomer.taxId}<br />
                    Credit Limit: ${selectedCustomer.creditLimit?.toLocaleString()}<br />
                    Payment Terms: {selectedCustomer.paymentTerms}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Order Details</CardTitle>
              <TooltipProvider>
                <TooltipRoot>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>info box text</p>
                  </TooltipContent>
                </TooltipRoot>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Status</label>
                <TooltipProvider>
                  <TooltipRoot>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Set the current status of the order. Each status represents a different stage in the order lifecycle:
                        - Draft: Order is being prepared
                        - Pending: Awaiting approval or processing
                        - Confirmed: Order has been approved
                        - Processing: Items being prepared
                        - Shipped: Order in transit
                        - Delivered: Order completed
                        - Cancelled: Order terminated</p>
                    </TooltipContent>
                  </TooltipRoot>
                </TooltipProvider>
              </div>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {['Order Date', 'Delivery Date', 'Due Date'].map((label) => {
              return (
                <div key={label} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">{label}</label>
                    <TooltipProvider>
                      <TooltipRoot>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {label === 'Order Date' && <p>The date when the order was placed. This date will be used for order tracking and processing timelines. It affects payment terms and delivery calculations.</p>}
                          {label === 'Delivery Date' && <p>Expected date of delivery to the customer. This date considers processing time, shipping method, and destination. It will be communicated to the customer for delivery planning.</p>}
                          {label === 'Due Date' && <p>Payment due date for this order. This date is calculated based on the selected payment terms and affects payment scheduling and reminders.</p>}
                        </TooltipContent>
                      </TooltipRoot>
                    </TooltipProvider>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDates[label.toLowerCase().replace(/ /g, '')] && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDates[label.toLowerCase().replace(/ /g, '')] ? 
                          format(selectedDates[label.toLowerCase().replace(/ /g, '')], 'PPP') : 
                          `Select ${label.toLowerCase()}`}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDates[label.toLowerCase().replace(/ /g, '')]}
                        onSelect={(date) => 
                          setSelectedDates(prev => ({
                            ...prev,
                            [label.toLowerCase().replace(/ /g, '')]: date
                          }))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="w-full justify-start">
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="content" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Content
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Manage order lines, products, and item details. Add, edit, or remove items from your order.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="templates" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Templates
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Access and manage order templates. Save current order as a template or load existing templates.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="logistics" className="flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Logistics
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure shipping details, delivery methods, and warehouse information for this order.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="accounting" className="flex items-center">
                  <Receipt className="w-4 h-4 mr-2" />
                  Accounting
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Manage financial aspects including payment terms, currency, and tax information.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="attachments" className="flex items-center">
                  <Paperclip className="w-4 h-4 mr-2" />
                  Attachments
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upload and manage documents related to this order such as specifications or supporting files.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
          <TooltipProvider>
            <TooltipRoot>
              <TooltipTrigger asChild>
                <TabsTrigger value="invoice" className="flex items-center">
                  <Receipt className="w-4 h-4 mr-2" />
                  Invoice
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate and manage invoices for this order. Send invoices to customers and track payment status.</p>
              </TooltipContent>
            </TooltipRoot>
          </TooltipProvider>
        </TabsList>

        <TabsContent value="content" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Order Lines</CardTitle>
                <div className="flex space-x-2">
                  <TooltipProvider>
                    <TooltipRoot>
                      <TooltipTrigger asChild>
                        <Button onClick={() => setOrderLineDialogOpen(true)}>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Item
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add a new product or service to this order. You can select from your product catalog or create a custom item.</p>
                      </TooltipContent>
                    </TooltipRoot>
                  </TooltipProvider>
                  <TooltipProvider>
                    <TooltipRoot>
                      <TooltipTrigger asChild>
                        <Button onClick={() => setBulkUploadOpen(true)} variant="outline">
                          Bulk Upload
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload multiple items at once using a CSV or Excel file. Perfect for large orders with many line items.</p>
                      </TooltipContent>
                    </TooltipRoot>
                  </TooltipProvider>
                </div>
              </CardHeader>
              <CardContent>
                <BatchActions
                  selectedLines={orderLines.filter(line => selectedOrderLines.includes(line.id))}
                  onApplyDiscount={handleApplyDiscount}
                  onApplyTax={handleApplyTax}
                />
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">
                          <Checkbox
                            checked={selectedOrderLines.length === orderLines.length}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedOrderLines(orderLines.map(line => line.id))
                              } else {
                                setSelectedOrderLines([])
                              }
                            }}
                          />
                        </TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Unit Price</TableHead>
                        <TableHead>Tax Rate</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Recurring</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <SortableContext
                        items={orderLines}
                        strategy={verticalListSortingStrategy}
                      >
                        {orderLines.map((line) => {
                          return (
                            <DraggableOrderLineItem
                              key={line.id}
                              line={line}
                              onUpdate={handleUpdateOrderLine}
                              onDelete={handleDeleteOrderLine}
                              onToggleRecurring={handleToggleRecurring}
                              selectedOrderLines={selectedOrderLines}
                              setSelectedOrderLines={setSelectedOrderLines}
                            />
                          );
                        })}
                      </SortableContext>
                    </TableBody>
                  </Table>
                </DndContext>
                <div className="mt-4 flex justify-end">
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between gap-8">
                      <span className="text-sm font-medium">Subtotal:</span>
                      <span className="text-sm">${orderLines.reduce((sum, line) => sum + (line.subTotal ?? 0), 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-sm font-medium">Discounts:</span>
                      <span className="text-sm">-${orderLines.reduce((sum, line) => sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-sm font-medium">Tax Total:</span>
                      <span className="text-sm">${orderLines.reduce((sum, line) => sum + ((line.total ?? 0) - (line.subTotal ?? 0)), 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between gap-8 pt-2 border-t">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>            </Card>

            <div className="space-y-6">              <QuickAddFavorites
                favoriteProducts={favoriteProducts}
                productBundles={productBundles}
                onAddToOrder={handleAddFavoriteProducts}
              />
              <ProductRecommendations
                recommendations={recommendedProducts}
                onAddToOrder={handleAddExistingProduct}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardContent className="pt-6">
                <OrderTemplates
                  onLoadTemplate={handleCopyFrom}
                  onPreviewTemplate={handlePreviewTemplate}
                  currentOrder={{
                    orderNumber: "SO-" + Math.floor(Math.random() * 10000),
                    orderDate: selectedDates.orderDate,
                    orderLines,
                    subtotal: calculateTotal(),
                    taxTotal: orderLines.reduce((sum, line) => sum + ((line.total ?? 0) - (line.subTotal ?? 0)), 0),
                    discountTotal: orderLines.reduce((sum, line) => sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0),
                    shippingCost: shippingMethod ? shippingMethods.find(m => m.id === shippingMethod)?.cost ?? 0 : 0,
                    total: calculateTotal(),
                    notes: notes,
                    paymentTerms: paymentTerms,
                    currency: currency,
                    customerId: selectedCustomer?.id,
                    paymentMethod: paymentMethod,
                    isPaid: isPaid
                  }}
                  templates={templates}
                  setTemplates={setTemplates}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <OrderPreview
                  order={{
                    orderNumber: "SO-" + Math.floor(Math.random() * 10000),
                    orderDate: selectedDates.orderDate,
                    orderLines,
                    subtotal: calculateTotal(),
                    taxTotal: orderLines.reduce((sum, line) => sum + ((line.total ?? 0) - (line.subTotal ?? 0)), 0),
                    discountTotal: orderLines.reduce((sum, line) => sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0),
                    shippingCost: shippingMethod ? shippingMethods.find(m => m.id === shippingMethod)?.cost ?? 0 : 0,
                    total: calculateTotal(),
                    notes: notes,
                    paymentTerms: paymentTerms,
                    currency: currency
                  }}
                  customer={selectedCustomer}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Shipping Method</label>
                    <Select value={shippingMethod} onValueChange={setShippingMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipping method" />
                      </SelectTrigger>
                      <SelectContent>
                        {shippingMethods.map((method) => (
                          <SelectItem key={method.id} value={method.id}>
                            {method.name} (${method.cost.toFixed(2)}) - Est. {method.estimatedDeliveryDays} days
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tracking Number</label>
                    <Input 
                      placeholder="Enter tracking number" 
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Warehouse</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select warehouse" />
                      </SelectTrigger>
                      <SelectContent>
                        {warehouses.map((warehouse) => (
                          <SelectItem key={warehouse.id} value={warehouse.id}>
                            {warehouse.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Shipping Notes</label>
                    <Textarea 
                      placeholder="Add any special shipping instructions"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounting" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Terms</label>
                    <Select value={paymentTerms} onValueChange={setPaymentTerms}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net30">Net 30</SelectItem>
                        <SelectItem value="net60">Net 60</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Currency</label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.code} ({c.symbol})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Method</label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((method) => (
                          <SelectItem key={method.id} value={method.id}>
                            {method.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="paid"
                      checked={isPaid}
                      onCheckedChange={(checked) => setIsPaid(checked as boolean)}
                    />
                    <label
                      htmlFor="paid"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mark as Paid
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tax ID</label>
                    <Input placeholder="Enter tax ID" value={selectedCustomer?.taxId || ''} disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Reference Number</label>
                    <Input placeholder="Enter reference number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Internal Notes</label>
                    <Textarea 
                      placeholder="Add internal notes (not visible to customers)"
                      value={internalNotes}
                      onChange={(e) => setInternalNotes(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attachments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attachments</CardTitle>
              <CardDescription>Upload and manage documents related to this order</CardDescription>
            </CardHeader>
            <CardContent>
              <EnhancedAttachments
                attachments={attachments}
                onAddAttachments={(files) => setAttachments([...attachments, ...files])}
                onRemoveAttachment={handleRemoveAttachment}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoice" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Generation and Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <InvoiceGenerator
                order={{
                  id: Math.random().toString(),
                  orderNumber: "SO-" + Math.floor(Math.random() * 10000),
                  orderDate: selectedDates.orderDate,
                  orderLines,
                  subtotal: calculateTotal(),
                  taxTotal: orderLines.reduce((sum, line) => sum + ((line.total ?? 0) - (line.subTotal ?? 0)), 0),
                  discountTotal: orderLines.reduce((sum, line) => sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0),
                  shippingCost: shippingMethod ? shippingMethods.find(m => m.id === shippingMethod)?.cost ?? 0 : 0,
                  total: calculateTotal(),
                  notes: notes,
                  paymentTerms: paymentTerms,
                  currency: currency
                }}
                customer={selectedCustomer}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <OrderLineDialog
        open={orderLineDialogOpen}
        onOpenChange={setOrderLineDialogOpen}
        orderLine={editingOrderLine}
        onSave={editingOrderLine ? handleUpdateOrderLine : handleAddOrderLine}
        products={products}
        onAddExistingProduct={handleAddExistingProduct}
        currencies={currencies}
        exchangeRates={exchangeRates}
      />

      <CopyFromDialog
        open={copyFromDialogOpen}
        onOpenChange={setCopyFromDialogOpen}
        salesOrders={salesOrders}
        onCopyFrom={handleCopyFrom}
      />

      <CopyToDialog
        open={copyToDialogOpen}
        onOpenChange={setCopyToDialogOpen}
        onCopyTo={handleCopyTo}
      />

      <Dialog open={bulkUploadOpen} onOpenChange={setBulkUploadOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bulk Upload Products</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="bulk-upload">Upload CSV/Excel File</Label>
              <Input 
                id="bulk-upload"
                type="file" 
                accept=".csv,.xlsx,.xls"
                onChange={(e) => e.target.files && handleBulkUpload(e.target.files[0])}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setBulkUploadOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={shortcutsOpen} onOpenChange={setShortcutsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <KeyboardShortcutsInfo />
        </DialogContent>
      </Dialog>
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Order Preview</DialogTitle>
          </DialogHeader>
          <CompactOrderPreview
            order={{
              orderNumber: "SO-" + Math.floor(Math.random() * 10000),
              orderDate: selectedDates.orderDate,
              orderLines,
              subtotal: calculateTotal(),
              taxTotal: orderLines.reduce((sum, line) => sum + ((line.total ?? 0) - (line.subTotal ?? 0)), 0),
              discountTotal: orderLines.reduce((sum, line) => sum + ((line.subTotal ?? 0) * (line.discount ?? 0) / 100), 0),
              total: calculateTotal(),
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

